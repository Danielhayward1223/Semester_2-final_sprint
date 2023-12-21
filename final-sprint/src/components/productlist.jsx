import "../css/home.css";
import useFetch from "./fetchData";
import { Link } from "react-router-dom";

const Home = () => {
  // getting data from hook
  const fetchedData = useFetch();
  const products = fetchedData[0];
  const loading = fetchedData[1];

  return (
    <div>
      {/*check if page is still loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-container">
          {/*make box for each product from api */}
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-box"
            >
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
