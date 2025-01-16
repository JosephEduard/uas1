import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import DetailGames from "./components/DetailGames";
import { CartProvider } from "./context/CartContext";
import Login from "./components/login";
import Register from "./components/register";
import WelcomePage from "./components/WelcomePage";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/game/:id" element={<DetailGames />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
