import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import LoadingAnimation from "./LoadingAnimation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

function DetailGames() {
  const { id } = useParams();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(CartContext);
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/games/${id}`)
      .then((response) => {
        const gameData = response.data.data;
        setGame(gameData);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (game) {
      addToCart(game);
      console.log("Added game to cart:", game);
      // Optional: Show a success message
      alert("Game berhasil ditambahkan ke keranjang!");
    }
  };

  const handleWishlist = () => {
    if (game) {
      if (isInWishlist(game.id)) {
        removeFromWishlist(game.id);
      } else {
        addToWishlist(game);
      }
    }
  };

  if (!game) {
    return <LoadingAnimation />;
  }

  return (
    <div className="x-popup-overlay">
      <div className="x-popup">
        <button className="x-close-button" onClick={() => navigate("/home")}>
          &times;
        </button>
        <div>
          <div className="x-dg-title">
            <h1>
              {game.title}
              <button className="btn" onClick={handleWishlist}>
                {isInWishlist(game.id) ? (
                  <FontAwesomeIcon
                    icon={faHeartCircleCheck}
                    size="xl"
                    className="x-icon"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="xl"
                    className="x-icon"
                  />
                )}
              </button>
            </h1>
          </div>
          <div className="x-dg-group">
            <div className="x-dg-left">
              <div>
                <img
                  src={`http://127.0.0.1:8000/storage/${game.thumbnail}`}
                  alt={game.title}
                  className="w-full h-[350px]"
                />
              </div>
              <div className="x-dg-about">
                <h5 className="x-dg-about-title">Tentang Game Ini</h5>
                <p>{game.description}</p>
              </div>
            </div>
            <div className="x-dg-right">
              <div className="x-dg-rincian">
                <h5 className="x-dg-rincian-title">Rincian Game</h5>
                <ul>
                  <li className="x-dg-rincian-list">Nama : {game.title}</li>
                  <li className="x-dg-rincian-list">Genre : {game.genre}</li>
                  <li className="x-dg-rincian-list">
                    Platform : {game.platform}
                  </li>
                  <li className="x-dg-rincian-list">
                    Stok : {game.stock > 0 ? game.stock : "Habis"}
                  </li>
                </ul>
              </div>
              <div className="x-dg-co">
                <h4>Beli {game.title}</h4>
                <h5 className="x-dg-harga">
                  Rp {parseInt(game.price).toLocaleString()}
                </h5>
                <button
                  className="btn btn-warning"
                  onClick={handleAddToCart}
                  disabled={game.stock <= 0}
                >
                  {game.stock > 0 ? "Masukkan Keranjang" : "Stok Habis"}
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/home")}
                >
                  Kembali ke Beranda
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
