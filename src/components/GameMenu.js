import "../style/menu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const GameMenu = ({ data, onClick, id }) => {
  // const kategoriRPG = props.data.kategori.filter((game) => game.kategori.includes("RPG"))

  const [filteredGames, setFilteredGames] = useState(data);

  const filterCategoryRPG = () => {
    const categoryGames = data.filter((game) =>
      game.kategori.includes(" RPG ")
    );
    setFilteredGames(categoryGames);
  };

  const filterCategoryBalapan = () => {
    const categoryGames = data.filter((game) =>
      game.kategori.includes(" Balapan ")
    );
    setFilteredGames(categoryGames);
  };

  const filterCategoryAksi = () => {
    const categoryGames = data.filter((game) =>
      game.kategori.includes(" Aksi ")
    );
    setFilteredGames(categoryGames);
  };

  const filterCategoryPetualangan = () => {
    const categoryGames = data.filter((game) =>
      game.kategori.includes(" Petualangan ")
    );
    setFilteredGames(categoryGames);
  };

  const filterCategoryHoror = () => {
    const categoryGames = data.filter((game) =>
      game.kategori.includes(" Horor ")
    );
    setFilteredGames(categoryGames);
  };

  const filterCategorySimulasi = () => {
    const categoryGames = data.filter((game) =>
      game.kategori.includes(" Simulasi ")
    );
    setFilteredGames(categoryGames);
  };

  const filterCategoryStrategi = () => {
    const categoryGames = data.filter((game) =>
      game.kategori.includes(" Strategi ")
    );
    setFilteredGames(categoryGames);
  };

  const showAllGames = () => {
    setFilteredGames(data);
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
      <div className=" x-cat-menu">
        <div className="x-cat-title">
          <h3>Kategori</h3>
        </div>
        <div className=" x-cat-group flex justify-center align-center rounded-xl">
          <div className="x-cat">
            <div
              className="x-cat-img rounded-full flex justify-center align-center"
              onClick={filterCategoryRPG}
            >
              <img src="/assets/icons/rpg.png" alt="" className="w-16 h-16" />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">RPG</span>
            </div>
          </div>
          <div className="x-cat">
            <div
              className="x-cat-img rounded-full flex justify-center align-center"
              onClick={filterCategoryPetualangan}
            >
              <img
                src="/assets/icons/petualangan.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Petualangan</span>
            </div>
          </div>
          <div className="x-cat">
            <div
              className="x-cat-img rounded-full flex justify-center align-center"
              onClick={filterCategoryBalapan}
            >
              <img
                src="/assets/icons/balapan.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Balapan</span>
            </div>
          </div>
          <div className="x-cat">
            <div
              className="x-cat-img rounded-full flex justify-center align-center"
              onClick={filterCategoryAksi}
            >
              <img src="/assets/icons/aksi.png" alt="" className="w-16 h-16" />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Aksi</span>
            </div>
          </div>
          <div className="x-cat">
            <div
              className="x-cat-img rounded-full flex justify-center align-center"
              onClick={filterCategoryStrategi}
            >
              <img
                src="/assets/icons/strategi.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Strategi</span>
            </div>
          </div>
          <div className="x-cat">
            <div
              className="x-cat-img rounded-full flex justify-center align-center"
              onClick={filterCategorySimulasi}
            >
              <img
                src="/assets/icons/simulator.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Simulasi</span>
            </div>
          </div>
          <div className="x-cat">
            <div
              className="x-cat-img rounded-full flex justify-center align-center"
              onClick={filterCategoryHoror}
            >
              <img
                src="/assets/icons/horror.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="flex justify-center align-center">
              <span className="x-cat-title">Horor</span>
            </div>
          </div>
        </div>
      </div>

      <div className="x-game-group">
        <Slider {...settings}>
          {filteredGames.map((game) => (
            <div
              className="x-game-card h-[300px] text-white rounded-xl"
              id={game.tittle}
              onClick={() => onClick(game.id)}
            >
              <div className="flex justify-center align-center">
                <img src={game.img} alt="" className="w-[90%] h-[300px]" />
              </div>
              <div className="flex justify-end align-center mr-3">
                <span>Rp {game.harga}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GameMenu;
