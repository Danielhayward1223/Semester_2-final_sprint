import { useState, useEffect } from "react";
import "../css/home.css";
import Nav from "./nav";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
