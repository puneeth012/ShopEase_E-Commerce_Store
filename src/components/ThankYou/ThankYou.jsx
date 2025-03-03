import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.thankYouContainer}>
      <h2>Thank You for Your Purchase!</h2>
      <p>Your order has been placed successfully.</p>
      <button className={styles.continueShoppingButton} onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default ThankYou;
