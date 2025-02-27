import { useEffect, useState } from "react";
import axios from "axios";
import style from "./product.module.css";
import ProductCard from "./ProductCard";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("Fetched Products:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className={style.product_container}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default Product;
