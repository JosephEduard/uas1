import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GameMenu = ({ onClick }) => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/games")
      .then((response) => {
        if (response.data && response.data.success) {
          setGames(response.data.data);
          setFilteredGames(response.data.data);
        }
      })
      .catch((error) => console.error("Error fetching games data:", error));
  }, []);

  const filterGamesByCategory = (category) => {
    const filtered = games.filter(
      (game) => game.genre && game.genre.includes(category)
    );
    setFilteredGames(filtered);
  };

  const showAllGames = () => {
    setFilteredGames(games);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
  };

  return (
    <div className="w-3/4 m-auto x-game-menu">
      <div className="x-cat-menu">
        <div className="x-cat-title">
          <h3>Kategori</h3>
        </div>
        <div className="x-cat-group flex justify-center align-center rounded-xl">
          <div className="x-cat" onClick={() => filterGamesByCategory("RPG")}>
            <div className="x-cat-img rounded-full flex justify-center align-center">
              <img
                src="/assets/icons/rpg.png"
                alt="RPG"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">RPG</span>
            </div>
          </div>
          <div
            className="x-cat"
            onClick={() => filterGamesByCategory("First-Person Shooter")}
          >
            <div className="x-cat-img rounded-full flex justify-center align-center">
              <img
                src="/assets/icons/petualangan.png"
                alt="Petualangan"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Petualangan</span>
            </div>
          </div>
          <div
            className="x-cat"
            onClick={() => filterGamesByCategory("Racing")}
          >
            <div className="x-cat-img rounded-full flex justify-center align-center">
              <img
                src="/assets/icons/balapan.png"
                alt="Balapan"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Balapan</span>
            </div>
          </div>
          <div
            className="x-cat"
            onClick={() => filterGamesByCategory("Action")}
          >
            <div className="x-cat-img rounded-full flex justify-center align-center">
              <img
                src="/assets/icons/aksi.png"
                alt="Aksi"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Aksi</span>
            </div>
          </div>
          <div
            className="x-cat"
            onClick={() => filterGamesByCategory("Strategy")}
          >
            <div className="x-cat-img rounded-full flex justify-center align-center">
              <img
                src="/assets/icons/strategi.png"
                alt="Strategi"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Strategi</span>
            </div>
          </div>
          <div
            className="x-cat"
            onClick={() => filterGamesByCategory("Simulation")}
          >
            <div className="x-cat-img rounded-full flex justify-center align-center">
              <img
                src="/assets/icons/simulator.png"
                alt="Simulasi"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Simulasi</span>
            </div>
          </div>
          <div
            className="x-cat"
            onClick={() => filterGamesByCategory("Horror")}
          >
            <div className="x-cat-img rounded-full flex justify-center align-center">
              <img
                src="/assets/icons/horror.png"
                alt="Horor"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Horor</span>
            </div>
          </div>
          <div className="x-cat" onClick={showAllGames}>
            <div className="x-cat-img rounded-full flex justify-center align-center">
              <img
                src="/assets/icons/all.png"
                alt="All"
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Semua</span>
            </div>
          </div>
        </div>
      </div>

      <div className="x-game-group">
        <Slider {...settings}>
          {filteredGames.map((game) => (
            <div
              className="x-game-card h-[300px] text-white rounded-xl"
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
              <div className="flex justify-end align-center mr-3">
                <span>Rp {parseInt(game.price).toLocaleString("id-ID")}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GameMenu;
