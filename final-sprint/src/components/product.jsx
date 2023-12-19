import React, { useState } from "react";
import useFetch from "./fetchData";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import { useShoppingCart } from "./ShoppingCartContext";
import "../css/product.css";

const Product = () => {
  const { productId } = useParams();
  const fetchedData = useFetch();
  const products = fetchedData[0];
  const product = products.find((product) => product.id === parseInt(productId, 10));
  const {addToCart} = useShoppingCart();

  if (!product) {
    return <p>Product not found</p>;
  }

  const modifiedDesc =
    product.description +
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="product-informations">
          <img src={product.image} alt={`Product ${product.id}`} />

          <div className="product-description">
            <p className="product-titles">{product.title}</p>
            <p className="description-title">{modifiedDesc}</p>
          </div>
          
        </div>
        <div className="checkout-box">
          <p className="product-prices">${product.price}</p>
          <button className="cartBtn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
