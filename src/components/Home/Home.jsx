import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.welcomeText}>Welcome to Our E-Commerce Store</h1>
        <p className={styles.discover}>Discover the best products at unbeatable prices.</p>
        <button className={styles.shopButton} onClick={() => navigate("/products")}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
