import "../App.css";
import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";
import CTATool from "./CTATool";
import NewsMenu from "./NewsMenu";
import GameMenu from "./GameMenu";
import FooterMenu from "./FooterMenu";
import DetailGames from "./DetailGames";
import { Link } from "react-router-dom";
import games from "../data/games.json";

function HomePage() {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <h3>{game.tittle}</h3>
          <p>{game.img}</p>
          <p>${game.harga}</p>
          <Link to={`/game/${game.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
