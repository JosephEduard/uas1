import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Cart functions
  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (selectedGame) => {
    console.log("Adding to cart:", selectedGame);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === selectedGame.id);

      // Check if adding more would exceed stock
      if (existingItem) {
        const newQuantity = (existingItem.quantity || 1) + 1;
        if (newQuantity > selectedGame.stock) {
          alert("Stok tidak mencukupi!");
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === selectedGame.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }

      return [...prevCart, { ...selectedGame, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === id);
      if (!item) return prevCart;

      // Check stock limit
      if (newQuantity > item.stock) {
        alert("Stok tidak mencukupi!");
        return prevCart;
      }

      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      return total + parseFloat(item.price) * (item.quantity || 1);
    }, 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  // Wishlist functions
  const addToWishlist = (game) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find((item) => item.id === game.id)) {
        return prevWishlist;
      }
      return [...prevWishlist, game];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        getCartTotal,
        getCartItemsCount,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
