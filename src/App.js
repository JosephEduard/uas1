import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import DetailGames from "./components/DetailGames";
import { CartProvider } from "./context/CartContext";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/game/:id" element={<DetailGames />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
