import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/productlist";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/" element={<Nav />} />
          <Route path="/" element={<Nav />} />
          <Route path="/" element={<Nav />} />
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
