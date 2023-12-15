import { useState, useEffect } from "react";
import "../css/home.css";
import Nav from "./nav";
import useFetch from "./fetchData";
import { Link } from 'react-router-dom';

const Home = () => {
  const fetchedData = useFetch();
  const products = fetchedData[0];
  const loading = fetchedData[1];

  return (
    <div>
      <Nav />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-container">
          {products.map((product) => (
            // connect this link to the product page once it's done :3
            <Link key={product.id} to={`/product/${product.id}`} className="product-box">
              <img src={product.image} alt={`Product ${product.id}`} />
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
