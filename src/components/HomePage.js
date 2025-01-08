import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";
import gamesData from "../data/games.json";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import NewsMenu from "./NewsMenu";
import GameMenu from "./GameMenu";
import FooterMenu from "./FooterMenu";
import DetailGames from "./DetailGames";
import CTATool from "./CTATool";

function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    try {
      setGames(gamesData);
    } catch (error) {
      console.error("Failed to load game data:", error);
    }
  }, []);

  const [categoryGames, setCategoryGames] = useState("");

  const categoryDataFromCategory = (cat) => setCategoryGames(cat);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [popupValue, setPopupValue] = useState("");

  const handleTriggerClick = (value) => {
    setPopupValue(value); // Simpan value dari TriggerButton
    setIsPopupOpen(true); // Tampilkan popup
  };

  return (
    <div>
      <div className="x-body">
        <div>
          <NavigationBar />
          <CTATool />
        </div>
        <div>
          <div className="x-menu-news">
            <NewsMenu data={gamesData} onClick={handleTriggerClick} />
          </div>
          <div className="x-menu-game">
            <GameMenu
              data={gamesData}
              categoryGames={categoryGames}
              onClick={handleTriggerClick}
            />
          </div>
        </div>
        <DetailGames />
        <div className="x-menu-footer">
          <FooterMenu />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
