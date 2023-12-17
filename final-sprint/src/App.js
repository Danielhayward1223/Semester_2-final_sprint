import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/productlist";
import Cart from "./components/cart.jsx";
import Product  from "./components/product.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Nav />} />
          <Route path="/" element={<Nav />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
