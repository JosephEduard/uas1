import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchCart();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:8000/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(response.data.data.items);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (selectedGame) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/cart/add",
        {
          game_id: selectedGame.id,
          quantity: 1,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.status === "success") {
        await fetchCart();
        alert("Game berhasil ditambahkan ke keranjang!");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/login");
      } else {
        alert(
          error.response?.data?.message || "Error menambahkan game ke keranjang"
        );
      }
    }
  };

  const removeFromCart = async (gameId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.delete(
        `http://127.0.0.1:8000/api/cart/remove/${gameId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.status === "success") {
        await fetchCart();
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
      alert(
        error.response?.data?.message || "Error menghapus item dari keranjang"
      );
    }
  };

  const updateQuantity = async (gameId, newQuantity) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.put(
        "http://127.0.0.1:8000/api/cart/update",
        {
          game_id: gameId,
          quantity: newQuantity,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.status === "success") {
        await fetchCart();
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
      alert(error.response?.data?.message || "Error mengupdate quantity");
    }
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.delete(
        "http://127.0.0.1:8000/api/cart/clear",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.status === "success") {
        await fetchCart();
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
      alert(error.response?.data?.message || "Error mengosongkan keranjang");
    }
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
        loading,
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
