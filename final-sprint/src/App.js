import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/productlist";
import Cart from "./components/cart.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/cart" element={<Nav />} />
          <Route path="/" element={<Nav />} />
          <Route path="/" element={<Nav />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
