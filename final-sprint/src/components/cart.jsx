import React from "react";
import "../css/cart.css";
import Nav from "./nav";
import { useState, useEffect } from "react";
import useFetch from "./fetchData";

const Cart = ({cartItems}) => {
  const fetchedData = useFetch();
  const products = fetchedData[0];
  const loading = fetchedData[1];

  const getProduct = (productId) => {
    return products.find((product) => product.id === parseInt(productId, 10));
  };

  
  return (
    <div className="main">
      <Nav />
      <h1>Cart page!</h1>
    </div>
    
  );
};

export default Cart;
