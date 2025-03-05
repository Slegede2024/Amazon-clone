import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LayOut from "../../Componets/LayOut/LayOut";
import ProductCard from "../../Componets/Product/ProductCard";
import { productUrl } from "../../Api/endepoint";
import style from "./Results.module.css";
import Loader from "../../Componets/Loader/Loader";

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   console.log(categoryName)
  useEffect(() => {
    setIsLoading(true);
    // https://fakestoreapi.com/products/category/jewelery
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res)
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <div>
        <h1 style={{ padding: "10px" }}>Results</h1>
        <p style={{ padding: "10px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={style.products_container}>
            {results?.map((singleProduct) => {
              return (
                <ProductCard
                  key={singleProduct.id}
                  data={singleProduct}
                  renderADD={true}
                />
              );
            })}
          </div>
        )}
      </div>
    </LayOut>
  );
}

export default Results;