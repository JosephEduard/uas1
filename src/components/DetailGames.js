import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import LoadingAnimation from "./LoadingAnimation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

function DetailGames() {
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);
  const [game, setGame] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGameAndWishlistStatus = async () => {
      try {
        setIsLoading(true);
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        const gameResponse = await axios.get(
          `http://127.0.0.1:8000/api/games/${id}`
        );
        setGame(gameResponse.data.data);

        if (userId && token) {
          const wishlistResponse = await axios.get(
            `http://127.0.0.1:8000/api/wishlist/${userId}/check/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setIsInWishlist(wishlistResponse.data.inWishlist);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.response?.data?.message || "Error loading game details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGameAndWishlistStatus();
  }, [id]);

  const handleAddToCart = async () => {
    if (!game) return;

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const gameInCart = cart.find((item) => item.id === game.id);
    if (gameInCart && gameInCart.quantity >= game.stock) {
      alert(
        "Tidak dapat menambah game ke keranjang karena stok tidak mencukupi"
      );
      return;
    }

    try {
      setIsAddingToCart(true);
      await addToCart(game);
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (error.response?.status === 401) {
        navigate("/login");
      } else {
        alert(
          error.response?.data?.message || "Gagal menambahkan ke keranjang"
        );
      }
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleWishlist = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      navigate("/login");
      return;
    }

    try {
      if (isInWishlist) {
        await axios.delete(
          `http://127.0.0.1:8000/api/wishlist/${userId}/remove/${game.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsInWishlist(false);
        alert("Game berhasil dihapus dari wishlist!");
      } else {
        await axios.post(
          "http://127.0.0.1:8000/api/wishlist/add",
          {
            game_id: game.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsInWishlist(true);
        alert("Game berhasil ditambahkan ke wishlist!");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/login");
      } else {
        console.error("Error updating wishlist:", error);
        alert(
          error.response?.data?.message ||
            "Terjadi kesalahan saat memperbarui wishlist"
        );
      }
    }
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <div className="x-popup-overlay">
        <div className="x-popup">
          <div className="text-center">
            <h2 className="text-xl mb-4">{error}</h2>
            <button
              className="btn btn-warning"
              onClick={() => window.location.reload()}
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!game) {
    return null;
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
              <button
                className="btn"
                onClick={handleWishlist}
                title={
                  isInWishlist ? "Hapus dari Wishlist" : "Tambah ke Wishlist"
                }
              >
                <FontAwesomeIcon
                  icon={isInWishlist ? faHeartCircleCheck : faHeart}
                  size="xl"
                  className="x-icon"
                  style={{ color: isInWishlist ? "#ff0000" : "#000000" }}
                />
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
                  onError={(e) => {
                    e.target.src = "/placeholder-game.jpg";
                  }}
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
                  disabled={game.stock <= 0 || isAddingToCart}
                >
                  {isAddingToCart
                    ? "Menambahkan..."
                    : game.stock > 0
                    ? "Masukkan Keranjang"
                    : "Stok Habis"}
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
