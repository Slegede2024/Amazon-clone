/* eslint-disable react/prop-types */
import style from "./product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  if (!data) return null;

  const { id, image, title, rating, price } = data; 

  return (
    <div className={style.card_container}>
      <Link to={`/product/${id}`}>
        {" "}
        <img src={image} alt={title || "Product image"} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={style.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </div>
      <button className={style.button}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
