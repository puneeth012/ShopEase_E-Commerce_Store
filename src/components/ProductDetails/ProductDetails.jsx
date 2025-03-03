import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import products from "../../data/products";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="mainContent">
      <div className={styles.productDetails}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productCategory}>Category: {product.category}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>Price: ₹{product.price}</p>
        <div className={styles.buttons}>
          <button className={styles.addButton} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
