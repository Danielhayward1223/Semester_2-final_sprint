import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/productlist";
import Cart from "./components/cart.jsx";
import Product from "./components/product.jsx";
import { ShoppingCartProvider } from "./components/ShoppingCartContext.js";
import Checkout from "./components/checkout.jsx";

function App() {
  return (
    <div>
      <Router>
        <ShoppingCartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Nav />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </ShoppingCartProvider>
      </Router>
    </div>
  );
}

export default App;
