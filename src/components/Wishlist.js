import "../style/menu.css";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CTATool from "./CTATool";
import NavigationBar from "./NavigationBar";
import FooterMenu from "./FooterMenu";
import { Link } from "react-router-dom";
import axios from "axios";

const Wishlist = () => {
  const [wishlistGames, setWishlistGames] = useState([]);

  const selectedGames = ["gta-5", "wukong", "rdr-2", "marvel-rivals"];

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/games")
      .then((response) => {
        if (response.data && response.data.success) {
          const filteredGames = response.data.data.filter((game) =>
            selectedGames.includes(game.id)
          );
          setWishlistGames(filteredGames);
        }
      })
      .catch((error) => {
        console.error("Error fetching wishlist games:", error);
      });
  }, []);

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
                <button className="btn btn-warning mt-4 mb-4">
                  Masukkan Keranjang
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
