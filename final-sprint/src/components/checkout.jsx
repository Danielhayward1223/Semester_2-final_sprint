import React from "react";
import "../css/checkout.css";
import { useShoppingCart } from "./ShoppingCartContext";
import { Link } from "react-router-dom";
import { round } from "mathjs";

const Checkout = () => {
  const { cartItems, removeFromCart, clearCart } = useShoppingCart();

  // getting total, subtotal and tax from caart items
  let totalPrice = 0;

  cartItems.map((item) => {
    totalPrice += item.price;
    return totalPrice;
  });

  let Tax = 0.15 * totalPrice;
  let finalPrice = totalPrice + round(Tax * 100) / 100;

  return (
    <div className="main">
      <div className="main-container">
        <ul
          className="item-container"
          style={{ listStyleType: "none", padding: "0" }}
        >
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="image-description">
                <img src={item.image} alt="" />
                <p>
                  {item.title} <br /> ${item.price} <br /> <br /> Qty: 1
                </p>
              </div>
              <div className="button-container">
                <button className="view">
                  <Link to={`/product/${item.id}`}>View item</Link>
                </button>
                <button
                  className="delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="checkout-container">
          <h3>
            Order summary <br />
          </h3>
          <div className="summary-line">
            <p>Subtotal ({`${cartItems.length}`} items):</p>
            <p>${`${totalPrice}`}</p>
          </div>
          <div className="summary-line">
            <p>Shipping & handling:</p>
            <p>FREE</p>
          </div>
          <div className="summary-line">
            <p>total before tax:</p>
            <p>${`${totalPrice}`}</p>
          </div>
          <div className="summary-line">
            <p>Estimated GST/HST:</p>
            <p>${`${round(Tax * 100) / 100}`}</p>
          </div>
          <hr />
          <div className="summary-line">
            <h2>Order Total:</h2>
            <p>${`${round(finalPrice * 100) / 100}`}</p>
          </div>
          <div className="checkout-button-container">
            <button
              onClick={() => {
                clearCart();
                window.alert("Order Placed!");
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
