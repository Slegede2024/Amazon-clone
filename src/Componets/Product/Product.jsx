import { useEffect, useState } from "react";
import axios from "axios";
import style from "./product.module.css";
import ProductCard from "./ProductCard";

function Product() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(products);
  
  return (
    <div className={style.product_contianer}>
      {products?.map((single_product, i) => {
        return <ProductCard key={i} data={single_product} renderADD={true} />;
      })}
    </div>
  );
}

export default Product;
