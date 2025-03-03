import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ThankYou from "./components/ThankYou/ThankYou";
import UserProfile from "./components/UserProfile/UserProfile";
import Login from "./components/Login/Login"; 
import products from "./data/products";
import "./styles/GlobalStyles.css";
import Register from "./components/Register/Register";
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="app-container">
            <Navbar setSearchQuery={setSearchQuery} />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList products={products} searchQuery={searchQuery} />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>  
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
