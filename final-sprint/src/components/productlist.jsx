import { useState, useEffect } from "react";
import "../css/home.css";
import Nav from "./nav";
import useFetch from "./fetchData";

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
            <div key={product.id} className="product-box">
              <img src={product.image} alt={`Product ${product.id}`} />
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
