import "../style/menu.css";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CTATool from "./CTATool";
import NavigationBar from "./NavigationBar";
import FooterMenu from "./FooterMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import LoadingWishlist from "./LoadingWishlist";

const Wishlist = () => {
  const [wishlistGames, setWishlistGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setIsLoading(false);
      return;
    }

    axios
      .get(`http://127.0.0.1:8000/api/wishlist/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.data && response.data.success) {
          setWishlistGames(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleRemoveFromWishlist = (gameId) => {
    const userId = localStorage.getItem("userId");

    axios
      .delete(`http://127.0.0.1:8000/api/wishlist/${userId}/remove/${gameId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setWishlistGames((prev) => prev.filter((game) => game.id !== gameId));
      })
      .catch((error) => {
        console.error("Error removing from wishlist:", error);
      });
  };

  const handleAddToCart = (game) => {
    addToCart(game);

    handleRemoveFromWishlist(game.id);
  };

  if (isLoading) {
    return <LoadingWishlist />;
  }

  if (!wishlistGames.length) {
    return (
      <div className="x-wishlist-body">
        <NavigationBar />
        <CTATool />
        <Container className="flex flex-col items-center justify-center min-h-[50vh]">
          <div className="text-white text-center">
            <h2 className="text-2xl mb-4">Wishlist Anda Kosong</h2>
            <Link to="/home">
              <button className="btn btn-warning">Jelajahi Game</button>
            </Link>
          </div>
        </Container>
        <FooterMenu />
      </div>
    );
  }

  return (
    <div className="x-wishlist-body">
      <NavigationBar />
      <CTATool />
      <div className="mt-4 mb-4">
        {wishlistGames.map((game) => (
          <Container className="flex justify-center align-center" key={game.id}>
            <div className="x-wish-group w-3/4 flex flex-row justify-between align-start text-white m-1 rounded-lg">
              <Link to={`/game/${game.slug}`}>
                <div className="flex justify-center align-center m-3">
                  <img
                    src={`http://127.0.0.1:8000/storage/${game.thumbnail}`}
                    className="w-[300px] h-[150px]"
                    alt={game.title}
                  />
                </div>
              </Link>
              <div className="m-3 flex flex-column justify-start align-center w-2/6">
                <span className="text-2xl">{game.title}</span>
                <ul className="mt-4">
                  <li className="mt-1 mb-1">Platform: {game.platform}</li>
                  <li className="mt-1 mb-1">Genre: {game.genre}</li>
                </ul>
              </div>
              <div className="flex flex-column justify-center align-center m-3">
                <span className="flex justify-center align-center text-xl x-wl-harga">
                  Rp {parseInt(game.price).toLocaleString("id-ID")}
                </span>
                <button
                  className="btn btn-warning mt-4 mb-2"
                  onClick={() => handleAddToCart(game)}
                >
                  Masukkan Keranjang
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromWishlist(game.id)}
                >
                  Hapus dari Wishlist
                </button>
              </div>
            </div>
          </Container>
        ))}
      </div>
      <FooterMenu />
    </div>
  );
};

export default Wishlist;
