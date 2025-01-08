import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (selectedGame) => {
    console.log("Adding to cart:", selectedGame); // Debugging log
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === selectedGame.id)) {
        console.log("Game already in cart");
        return prevCart; // Avoid duplicates
      }
      return [...prevCart, selectedGame];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
