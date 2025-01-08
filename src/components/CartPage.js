import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import gamesData from "../data/games.json";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  console.log("Current cart contents:", cart); // Debugging log

  const checkout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    alert("Checkout successful!");
    clearCart();
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.tittle} - ${item.harga}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={checkout}>Checkout</button>}
    </div>
  );
}

export default CartPage;
