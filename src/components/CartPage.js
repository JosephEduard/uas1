import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/menu.css";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import NavigationBar from "./NavigationBar";
import FooterMenu from "./FooterMenu";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";

function CartPage() {
  const {
    cart,
    removeFromCart,
    clearCart,
    updateQuantity,
    getCartTotal,
    getCartItemsCount,
  } = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (id, newQuantity, stock) => {
    if (newQuantity >= 1 && newQuantity <= stock) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }
    setIsCheckingOut(true);
  };

  const confirmCheckout = () => {
    alert("Pembelian berhasil!");
    clearCart();
    setIsCheckingOut(false);
  };

  return (
    <div className="x-wishlist-body min-h-screen">
      <NavigationBar />
      <Container className="py-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-3xl font-bold">Keranjang Belanja</h2>
          {cart.length > 0 && (
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Kosongkan Keranjang
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-white text-center py-16 bg-[#212121] rounded-lg">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="xl"
              className="x-icon"
            />
            <p className="text-xl mb-4">Keranjang belanja Anda masih kosong.</p>
            <Link to="/home">
              <button className="btn btn-warning px-6 py-2">
                Jelajahi Game
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#212121] rounded-lg p-4 mb-4 text-white flex flex-col md:flex-row justify-between items-center gap-4"
                >
                  <div className="flex items-center flex-1">
                    <img
                      src={`http://127.0.0.1:8000/storage/${item.thumbnail}`}
                      alt={item.title}
                      className="w-[120px] h-[70px] object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-400">
                        {item.platform} • {item.genre.split(", ")[0]}
                      </p>
                      <p className="text-sm text-gray-400">
                        Stok: {item.stock}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <button
                        className="btn btn-sm btn-dark"
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            (item.quantity || 1) - 1,
                            item.stock
                          )
                        }
                        disabled={(item.quantity || 1) <= 1}
                      >
                        -
                      </button>
                      <span className="w-10 text-center">
                        {item.quantity || 1}
                      </span>
                      <button
                        className="btn btn-sm btn-dark"
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            (item.quantity || 1) + 1,
                            item.stock
                          )
                        }
                        disabled={(item.quantity || 1) >= item.stock}
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-[120px]">
                      <div className="text-lg font-semibold text-[#d56c0a]">
                        Rp{" "}
                        {(
                          parseFloat(item.price) * (item.quantity || 1)
                        ).toLocaleString("id-ID", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                      <button
                        className="btn btn-sm btn-outline-danger mt-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-1/3">
              <div className="bg-[#212121] rounded-lg p-6 sticky top-4">
                <h3 className="text-white text-xl font-bold mb-4">
                  Ringkasan Belanja
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Total Item</span>
                    <span>{getCartItemsCount()} item</span>
                  </div>
                  <div className="flex justify-between text-white text-xl font-bold">
                    <span>Total Harga</span>
                    <span className="text-[#d56c0a]">
                      Rp{" "}
                      {getCartTotal().toLocaleString("id-ID", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                </div>

                <button
                  className="btn btn-warning w-full py-2"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>

      {/* Checkout Modal */}
      {isCheckingOut && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#212121] p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-white text-xl font-bold mb-4">
              Konfirmasi Pembelian
            </h3>

            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-gray-300"
                  >
                    <span>
                      {item.title} x{item.quantity}
                    </span>
                    <span>
                      Rp{" "}
                      {(
                        parseFloat(item.price) * (item.quantity || 1)
                      ).toLocaleString("id-ID")}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-gray-600">
                <div className="flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#d56c0a]">
                    Rp{" "}
                    {getCartTotal().toLocaleString("id-ID", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="btn btn-warning flex-1"
                onClick={confirmCheckout}
              >
                Konfirmasi
              </button>
              <button
                className="btn btn-secondary flex-1"
                onClick={() => setIsCheckingOut(false)}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      <FooterMenu />
    </div>
  );
}

export default CartPage;
