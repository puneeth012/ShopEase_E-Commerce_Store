import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import styles from "./Navbar.module.css";

const Navbar = ({ setSearchQuery }) => {
  const { cart } = useCart(); 
  const { user, logout } = useUser();
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
  
      <h2 className={styles.logo}>
        <Link to="/">Ecommerce</Link>
      </h2>

    
      {location.pathname === "/products" && (
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      )}

      
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navItem}>Home</Link>
        <Link to="/products" className={styles.navItem}>Products</Link>
        <Link to="/cart" className={styles.cartLink}>
          Cart ({cart?.length || 0}) 
        </Link>
        {user ? (
          <div className={styles.userSection}>
            <Link to="/profile" className={styles.profileLink}>
              {user.name}
            </Link>
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.authLinks}>
            <Link to="/login" className={styles.authLink}>Login</Link>
            <Link to="/register" className={styles.authLink}>Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
