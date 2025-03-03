import React from "react";
import styles from "./ProductList.module.css"; 

const ProductFilters = ({ searchQuery, setSearchQuery, category, setCategory, sort, setSort }) => {
  return (
    <div className={styles.filtersContainer}>
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />

      
      <div className={styles.categoryButtonsContainer}>
        <button
          className={`${styles.categoryButton} ${category === "" ? styles.activeCategory : ""}`}
          onClick={() => setCategory("")}
        >
          All
        </button>
        <button
          className={`${styles.categoryButton} ${category === "smartphones" ? styles.activeCategory : ""}`}
          onClick={() => setCategory("smartphones")}
        >
          Smartphones
        </button>
        <button
          className={`${styles.categoryButton} ${category === "wireless-headphones" ? styles.activeCategory : ""}`}
          onClick={() => setCategory("wireless-headphones")}
        >
          Wireless Headphones
        </button>
        <button
          className={`${styles.categoryButton} ${category === "laptops" ? styles.activeCategory : ""}`}
          onClick={() => setCategory("laptops")}
        >
          Laptops
        </button>
      </div>

  
      <select value={sort} onChange={(e) => setSort(e.target.value)} className={styles.filterSelect}>
        <option value="">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilters;
