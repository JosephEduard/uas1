import "../style/menu.css";
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gamesData from "../data/games.json";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function DetailGames() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedGame = gamesData.find((game) => game.id === id);
    if (selectedGame) {
      setGame(selectedGame);
    } else {
      console.error("Game not found");
    }
  }, [id]);

  const handleAddToCart = () => {
    if (game) {
      addToCart(game);
      console.log("Added game to cart:", game); // Debugging log
    } else {
      console.error("No game selected to add to cart");
    }
  };

  if (!game) {
    return <p>Loading game details...</p>;
  }

  return (
    <div className="x-popup-overlay">
      <div className="x-popup">
        <button className="x-close-button" onClick={() => navigate("/home")}>
          &times;
        </button>
        <div>
          <div className="x-dg-title">
            <h1>{game.tittle}</h1>
          </div>
          <div className="x-dg-group">
            <div className="x-dg-left">
              <div>
                <Link to={`/game/${game.id}`}>
                  <img src={game.img} alt="" className="w-full h-[350px]" />
                </Link>
              </div>
              <div className="x-dg-about">
                <h5 className="x-dg-about-title">Tentang Game Ini</h5>
                <p>{game.deskripsi}</p>
              </div>
            </div>
            <div className="x-dg-right">
              <div className="x-dg-rincian">
                <h5 className="x-dg-rincian-title">Rincian Game</h5>
                <ul>
                  <li className="x-dg-rincian-list">Nama : {game.tittle}</li>
                  <li className="x-dg-rincian-list">
                    Genre : {game.kategori?.join(", ") || "Unknown"}
                  </li>
                  <li className="x-dg-rincian-list">
                    Pengembang : {game.pengembang}
                  </li>
                  <li className="x-dg-rincian-list">
                    Penerbit : {game.penerbit}
                  </li>
                </ul>
              </div>
              <div className="x-dg-co">
                <h4>Beli {game.tittle}</h4>
                <h5 className="x-dg-harga">Rp {game.harga}</h5>
                <button className="btn btn-warning" onClick={handleAddToCart}>
                  Masukan Keranjang
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/home")}
                >
                  Kembali ke Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailGames;
