import React from "react";
import axios from "axios";
import "../style/menu.css";

const DetailGames = ({ isOpen, onClose, value, data }) => {
  const gameData = data.find((game) => game.id === value);

  if (!isOpen || !gameData) return null;

  const addToCart = () => {
    axios
      .post("http://localhost:8000/api/cart", { game_id: gameData.id })
      .then(() => alert("Game berhasil ditambahkan ke keranjang"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="x-popup-overlay">
      <div className="x-popup">
        <button className="x-close-button" onClick={onClose}>
          &times;
        </button>
        <div>
          <div className="x-dg-title">
            <h1>{gameData.tittle}</h1>
          </div>
          <div className="x-dg-group">
            <div className="x-dg-left">
              <div>
                <img src={gameData.img} alt="" className="w-full h-[300px]" />
              </div>
              <div className="x-dg-about">
                <h5 className="x-dg-about-title">Tentang Game Ini</h5>
                <p>{gameData.deskripsi}</p>
              </div>
            </div>
            <div className="x-dg-right">
              <div className="x-dg-rincian">
                <h5 className="x-dg-rincian-title">Rincian Game</h5>
                <ul>
                  <li className="x-dg-rincian-list">
                    Nama : {gameData.tittle}
                  </li>
                  <li className="x-dg-rincian-list">
                    Genre : {gameData.kategori.join(", ")}
                  </li>
                  <li className="x-dg-rincian-list">
                    Pengembang : {gameData.pengembang}
                  </li>
                  <li className="x-dg-rincian-list">
                    Penerbit : {gameData.penerbit}
                  </li>
                </ul>
              </div>
              <div className="x-dg-co">
                <h4>Beli {gameData.tittle}</h4>
                <h5 className="x-dg-harga">Rp {gameData.harga}</h5>
                <button className="btn btn-warning">Masukan Keranjang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailGames;
