import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewsMenu = ({ onClick }) => {
  const [games, setGames] = useState([]);
  const selectedGames = [
    "black-myth-wukong",
    "asphalt-8",
    "battlefield-2042",
    "burnout",
    "valorant",
    "the-legend-of-zelda",
    "cyberpunk-2077",
    "dark-souls-iii",
    "cities-skyline-ii",
  ];

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/games")
      .then((response) => {
        if (response.data && response.data.success) {
          setGames(
            response.data.data.filter((game) =>
              selectedGames.includes(game.slug)
            )
          );
        }
      })
      .catch((error) => console.error("Error fetching games data:", error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 m-auto">
      <Slider {...settings}>
        {games.map((game) => (
          <div
            className="x-card h-[350px] text-white rounded-xl relative game-img-hover"
            key={game.id}
            onClick={() => onClick(game.id)}
          >
            <div className="flex justify-center align-center">
              <Link to={`/game/${game.id}`}>
                <img
                  src={`http://127.0.0.1:8000/storage/${game.thumbnail}`}
                  alt={game.title}
                  className="w-full h-[350px] object-cover"
                />
              </Link>
            </div>
            <div
              className="x-card-harga absolute bottom-2 right-2 bg-opacity-50 px-1 py-1 rounded 
                    hover:bg-opacity-80 hover:bg-gray-800 transition-all duration-300"
            >
              <span
                className="text-white text-lg 
                        hover:text-white"
              >
                <Link to={`/game/${game.id}`}>
                  Rp {parseInt(game.price).toLocaleString("id-ID")}
                </Link>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsMenu;
