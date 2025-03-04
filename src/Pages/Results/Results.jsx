import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LayOut from "../../Componets/LayOut/LayOut";
import ProductCard from "../../Componets/Product/ProductCard";
import { productUrl } from "../../Api/endepoint";
import style from "./Results.module.css";
import Loader from "../../Componets/Loader/Loader";

function Results() {
  const { categoryName } = useParams(); // Extract category from URL
  console.log("🔍 useParams output:", useParams());
  console.log("📌 Extracted categoryName:", categoryName);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("useParams output:", useParams()); // Debugging
  console.log("Extracted categoryName:", categoryName);

  useEffect(() => {
    if (!categoryName) {
      console.warn("categoryName is undefined. Skipping API call.");
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log("API Response:", res.data); // Debugging
        setResults(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <LayOut>
      <div className={style.container}>
        <h1 className={style.heading}>Results</h1>
        <p className={style.categoryPath}>
          Category / {categoryName || "Unknown"}
        </p>
        <hr />

        {loading ? ( 
          <Loader />
        ) : results.length === 0 ? (
          <p className={style.loadingMessage}>Loading products...</p>
        ) : error ? (
          <p className={style.errorMessage}>{error}</p>
        ) : results.length > 0 ? (
          <div className={style.productsContainer}>
            {results.map((singleProduct) => (
              <ProductCard key={singleProduct.id} data={singleProduct} />
            ))}
          </div>
        ) : (
          <p className={style.noResultsMessage}>
            No products found for this category.
          </p>
        )}
      </div>
    </LayOut>
  );
}

export default Results;
