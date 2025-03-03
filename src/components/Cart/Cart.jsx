import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (!cart) {
    return <p>Loading cart...</p>;
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mainContent"> {/* ✅ Fix footer issue */}
      <div className={styles.cartContainer}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className={styles.emptyCart}>Your cart is empty!</p>
        ) : (
          <>
            <ul className={styles.cartList}>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.cartImage} />
                  <div className={styles.cartDetails}>
                    <h4>{item.name}</h4>
                    <p className={styles.cartPrice}>Price: ₹{item.price}</p>
                    <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.cartFooter}>
              <h3 className={styles.cartPrice}>Total: ₹{totalPrice}</h3>
              <button className={styles.clearCartButton} onClick={clearCart}>
                Empty My Cart
              </button>
              <button className={styles.orderButton} onClick={() => navigate("/checkout")}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
