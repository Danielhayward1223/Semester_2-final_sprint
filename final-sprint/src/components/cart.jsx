import React from "react";
import "../css/cart.css";
import { useShoppingCart } from "./ShoppingCartContext";
import { Link } from "react-router-dom";
import { round } from "mathjs";
const Cart = () => {
  // import from context
  const { cartItems, removeFromCart } = useShoppingCart();

  // calculating total price
  let totalPrice = 0;

  cartItems.map((item) => {
    totalPrice += item.price;
    return totalPrice;
  });

  return (
    <div className="main">
      <div className="main-container">
        <ul
          className="item-container"
          style={{ listStyleType: "none", padding: "0" }}
        >
          {/*make div for each item in the cart */}
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
        <div className="info-container">
          <p>
            your order qualifies for free shipping [excludes remote locations].
            Choose this option at checkout.
          </p>
          <h2>
            Subtotal [{cartItems.length}]: ${round(totalPrice * 100) / 100}
          </h2>
          <button>
            <Link to={"/checkout"}>Proceed to checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
