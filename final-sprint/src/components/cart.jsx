import React from "react";
import "../css/cart.css";
import Nav from "./nav";
import { useState, useEffect } from "react";
import useFetch from "./fetchData";
import { useShoppingCart } from "./ShoppingCartContext";

const Cart = () => {
  const fetchedData = useFetch();
  const products = fetchedData[0];
  const loading = fetchedData[1];

  const { cartItems, removeFromCart, clearCart } = useShoppingCart();

  return (
    <div className="main">
      <Nav />
      <div className="main-container">
        <ul className="item-container">
          {cartItems.map((item) => (
            <li key={item.id}>
              The product is {item.name} and it is {item.price}
            </li>
          ))}
        </ul>
        <div className="info-container"></div>
      </div>
    </div>
  );
};

export default Cart;
