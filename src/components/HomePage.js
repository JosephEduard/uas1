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

function HomePage() {
  const data = [
    {
      id: "gta-5",
      tittle: "Grand Theft Auto 5",
      img: "/assets/gta 5.webp",
      harga: "500.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
      pengembang: "Rockstar North",
      penerbit: "Rocstar Games",
      deskripsi:
        "When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.",
    },
    {
      id: "rdr-2",
      tittle: "Red Dead Redemption 2",
      img: "/assets/rdr 2.jpg",
      harga: "700.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
      pengembang: "Rockstar North",
      penerbit: "Rocstar Games",
      deskripsi:
        "Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
    },
    {
      id: "wukong",
      tittle: "Black Myth Wukong",
      img: "/assets/wukong.jpg",
      harga: "800.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
      pengembang: "Game Science",
      penerbit: "Game Science",
      deskripsi:
        "Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
    },
    {
      id: "forza-horizon-5",
      tittle: "Forza Horizon 5",
      img: "/assets/forza.webp",
      harga: "600.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "chivalry-2",
      tittle: "Chivalry 2",
      img: "/assets/chivaly 2.avif",
      harga: "50.000",
      kategori: [" Aksi ", " Strategi "],
    },
    {
      id: "battlefield-2042",
      tittle: "Battlefield 2042",
      img: "/assets/battlefield.avif",
      harga: "650.000",
      kategori: [" Aksi ", " Strategi "],
    },
    {
      id: "cities-skyline",
      tittle: "Cities Skyline",
      img: "/assets/cities skyline.jpg",
      harga: "600.000",
      kategori: [" Simulasi ", " Strategi "],
    },
    {
      id: "dota-2",
      tittle: "Dota 2",
      img: "/assets/dota 2.jpg",
      harga: "600.000",
      kategori: [" Strategi ", " RPG "],
    },
    {
      id: "marvel-rivals",
      tittle: "Marvel Rivals",
      img: "/assets/marvel rivals.png",
      harga: "gratis",
      kategori: [" RPG ", " Aksi "],
      pengembang: "NetEase Games",
      penerbit: "NetEase Games",
      deskripsi:
        "Marvel Rivals is a Super Hero Team-Based PVP Shooter! Assemble an all-star Marvel squad, devise countless strategies by combining powers to form unique Team-Up skills and fight in destructible, ever-changing battlefields across the continually evolving Marvel universe!",
    },
    {
      id: "batman-arkham-knight",
      tittle: "Batman Arkham Knight",
      img: "/assets/batman.avif",
      harga: "100.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
    },
    {
      id: "valorant",
      tittle: "Valorant",
      img: "/assets/valorant.jpg",
      harga: "gratis",
      kategori: [" RPG ", " Aksi "],
    },
    {
      id: "elden-ring",
      tittle: "Elden Ring",
      img: "/assets/elden ring.jpg",
      harga: "400.000",
      kategori: [" Petualangan ", " RPG ", " Aksi "],
    },
    {
      id: "asphalt-8",
      tittle: "Asphalt 8",
      img: "/assets/asphalt 8.jpg",
      harga: "200.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "assassin-creed-valhala",
      tittle: "Assassin Creed Valhala",
      img: "/assets/assassin creed.avif",
      harga: "500.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
    },
    {
      id: "burnout-paradise",
      tittle: "Burnout Paradise",
      img: "/assets/burnout.jpg",
      harga: "200.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "carx-drift",
      tittle: "CarX Drift Racing",
      img: "/assets/carx drift.jpg",
      harga: "300.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "crusader-king-3",
      tittle: "Crusader King III",
      img: "/assets/crusader king.avif",
      harga: "200.000",
      kategori: [" Strategi ", " Aksi "],
    },
    {
      id: "cyberpunk-2077",
      tittle: "Cyberpunk 2077",
      img: "/assets/cyberpunk.jpg",
      harga: "500.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
    },
    {
      id: "dark-souls",
      tittle: "Dark Souls",
      img: "/assets/dark souls.jpg",
      harga: "100.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
    },
    {
      id: "dead-by-daylight",
      tittle: "Dead By Daylight",
      img: "/assets/dead by daylight.jpg",
      harga: "300.000",
      kategori: [" Horor ", " Petualangan ", " Aksi "],
    },
    {
      id: "divinity-2",
      tittle: "Divinity 2",
      img: "/assets/divinity.jpg",
      harga: "300.000",
      kategori: [" Strategi ", " Aksi "],
    },
    {
      id: "dragon-age-inquisition",
      tittle: "Dragon Age Inquisition",
      img: "/assets/dragon age.avif",
      harga: "400.000",
      kategori: [" Strategi ", " RPG ", " Petualangan "],
    },
    {
      id: "euro-truck-simulator-2",
      tittle: "Euro Truck Simulator 2",
      img: "/assets/euro truck.jpg",
      harga: "300.000",
      kategori: [" Simulasi ", " Petualangan "],
    },
    {
      id: "farming-simulator-22",
      tittle: "Farming Simulator 22",
      img: "/assets/farming simulator.jpg",
      harga: "100.000",
      kategori: [" Simulasi ", " Strategi "],
    },
    {
      id: "f1-24",
      tittle: "F1 24",
      img: "/assets/f1 24.avif",
      harga: "600.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "flight-simulator",
      tittle: "Flight Simulator",
      img: "/assets/flight simulator.png",
      harga: "400.000",
      kategori: [" Simulasi "],
    },
    {
      id: "outlast",
      tittle: "Outlast",
      img: "/assets/outlast.jpg",
      harga: "300.000",
      kategori: [" Horor ", " Aksi "],
    },
    {
      id: "final-fantasy",
      tittle: "Final Fantasy",
      img: "/assets/final fantasy.jpg",
      harga: "100.000",
      kategori: [" RPG ", " Petualangan ", " Aksi "],
    },
    {
      id: "god-of-war-ragnarok",
      tittle: "God Of War Ragnarok",
      img: "/assets/god of war.jpg",
      harga: "700.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
    },
    {
      id: "grid-legends",
      tittle: "Grid Legends",
      img: "/assets/grid legends.jpg",
      harga: "300.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "hearts-of-iron",
      tittle: "Hearts Of Iron",
      img: "/assets/hearts of iron.jpg",
      harga: "100.000",
      kategori: [" Strategi ", " Aksi "],
    },
    {
      id: "hogwarts-legacy",
      tittle: "Hogwarts Legacy",
      img: "/assets/hogwarts legacy.avif",
      harga: "400.000",
      kategori: [" Petualangan ", " Aksi ", " RPG "],
    },
    {
      id: "hot-wheels-monster-truck",
      tittle: "Hot Wheels Monster Truck",
      img: "/assets/hot wheels.jpg",
      harga: "300.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "mass-effect",
      tittle: "Mass Effect",
      img: "/assets/mass effect.jpg",
      harga: "200.000",
      kategori: [" Aksi ", " Rpg "],
    },
    {
      id: "need-for-speed-heat",
      tittle: "Need For Speed Heat",
      img: "/assets/nfs heat.jpg",
      harga: "400.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "persona-5",
      tittle: "Persona 5",
      img: "/assets/persona 5.jpg",
      harga: "100.000",
      kategori: [" RPG ", " Aksi ", " Petualangan "],
    },
    {
      id: "resident-evil-7",
      tittle: "Resident Evil 7",
      img: "/assets/resident evil 7.jpg",
      harga: "700.000",
      kategori: [" Horor ", " Aksi ", " Petualangan "],
    },
    {
      id: "sekiro",
      tittle: "Sekiro Shadow Die Twice",
      img: "/assets/sekiro.jpg",
      harga: "300.000",
      kategori: [" RPG ", " Aksi ", " Petualangan "],
    },
    {
      id: "sport-wrc",
      tittle: "EA Sport WRC",
      img: "/assets/sport wrc.jpg",
      harga: "400.000",
      kategori: [" Balapan ", " Simulasi "],
    },
    {
      id: "the-sims-4",
      tittle: "The Sims 4",
      img: "/assets/the sims 4.webp",
      harga: "200.000",
      kategori: [" Simulasi ", " Strategi "],
    },
    {
      id: "the-witcher-3",
      tittle: "The Witcher 3",
      img: "/assets/the witcher 3.webp",
      harga: "500.000",
      kategori: [" RPG ", " Aksi ", " Petualangan "],
    },
    {
      id: "tomb-raider",
      tittle: "Tomb Raider",
      img: "/assets/tomb raider.jpg",
      harga: "600.000",
      kategori: [" RPG ", " Aksi ", " Petualangan "],
    },
    {
      id: "uncharted-4",
      tittle: "Uncgarted 4",
      img: "/assets/uncharted.jpg",
      harga: "600.000",
      kategori: [" RPG ", " Aksi ", " Petualangan "],
    },
    {
      id: "warhammer",
      tittle: "Total Warhammer",
      img: "/assets/warhammer.jpg",
      harga: "200.000",
      kategori: [" Strategi ", " Aksi "],
    },
    {
      id: "zelda",
      tittle: "The Legend Of Zelda",
      img: "/assets/zelda.jpg",
      harga: "400.000",
      kategori: [" RPG ", " Aksi ", " Petualangan "],
    },
    {
      id: "civilization-5",
      tittle: "Civilization V",
      img: "/assets/civilization 5.jpg",
      harga: "200.000",
      kategori: [" Strategi ", " Aksi "],
    },
    {
      id: "the-last-of-us-2",
      tittle: "The Last Of Us 2",
      img: "/assets/the last of us.jpg",
      harga: "400.000",
      kategori: [" Horor ", " Aksi ", " Petualangan "],
    },
    {
      id: "age-of-empire-4",
      tittle: "Age Of Empire IV",
      img: "/assets/age of empire 4.png",
      harga: "100.000",
      kategori: [" Strategi ", " Simulasi "],
    },
    {
      id: "phasmophobia",
      tittle: "Phasmophobia",
      img: "/assets/phasmophobia.jpg",
      harga: "150.000",
      kategori: [" Horor ", " Aksi "],
    },
    {
      id: "left-4-dead-2",
      tittle: "Left 4 Dead 2",
      img: "/assets/left 4 dead 2.jpg",
      harga: "300.000",
      kategori: [" Horor ", " Aksi "],
    },
    {
      id: "sons-of-the-forest",
      tittle: "Sons Of The Forest",
      img: "/assets/sons of the forest.jpg",
      harga: "120.000",
      kategori: [" Horor ", " Strategi "],
    },
    {
      id: "dayz",
      tittle: "DayZ",
      img: "/assets/dayz.jpg",
      harga: "100.000",
      kategori: [" Horor ", " Petualangan "],
    },
    {
      id: "the-forest",
      tittle: "The Forest",
      img: "/assets/the forest.jpg",
      harga: "200.000",
      kategori: [" Horor ", " Petualangan "],
    },
  ];

  const [categoryGames, setCategoryGames] = useState("");

  const categoryDataFromCategory = (cat) => setCategoryGames(cat);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [popupValue, setPopupValue] = useState("");

  const handleTriggerClick = (value) => {
    setPopupValue(value); // Simpan value dari TriggerButton
    setIsPopupOpen(true); // Tampilkan popup
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="x-body">
      <div>
        <NavigationBar />
        <CTATool />
      </div>
      <div>
        <div className="x-menu-news">
          <NewsMenu data={data} onClick={handleTriggerClick} />
        </div>
        <div className="x-menu-game">
          <GameMenu
            data={data}
            categoryGames={categoryGames}
            onClick={handleTriggerClick}
          />
        </div>
      </div>
      <DetailGames
        isOpen={isPopupOpen}
        onClose={closePopup}
        value={popupValue}
        data={data}
      />
      <div className="x-menu-footer">
        <FooterMenu />
      </div>
    </div>
  );
}

export default HomePage;
