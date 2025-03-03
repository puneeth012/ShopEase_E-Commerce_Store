import React from "react";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user, addOrder } = useUser();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    if (!user) {
      alert("Please log in to place an order.");
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      id: `ORD${Date.now()}`,
      items: cart.map((item) => ({
        name: item.name,
        price: item.price,
      })),
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    addOrder(newOrder);
    clearCart();
    navigate("/thank-you"); 
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>
      <p>Total: ₹{totalPrice}</p>
      <button className={styles.placeOrderButton} onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
