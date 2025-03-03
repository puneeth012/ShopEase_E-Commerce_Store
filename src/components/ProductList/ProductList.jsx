import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; 
import products from "../../data/products";
import styles from "./ProductList.module.css";

const ProductList = ({ searchQuery }) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate(); // ✅ Define navigate here

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className={styles.productList}>
      <h2 className={styles.title}>Products</h2>
      
    
      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? styles.activeCategory : styles.categoryButton}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className={styles.productsGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>₹{product.price}</p>
              <div className={styles.buttonContainer}>
                <button className={styles.addToCartButton} onClick={() => addToCart(product)}>Add to Cart</button>
                <button 
                  className={styles.viewDetailsButton} 
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noProducts}>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
