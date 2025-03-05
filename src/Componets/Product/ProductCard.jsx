/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { DataContext } from "../DataProvider/DataProvidere"; // Ensure correct path
import { Type } from "../../Utility/action.type";
import style from "./product.module.css";

function ProductCard({ data }) {
  const { image, title, id, rating, price } = data;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price },
    });
  };

  return (
    <div className={style.card_container}>
      <Link to={`/products/${id}`} className={style.image_link}>
        <img src={image} alt={title} className={style.product_image} />
      </Link>
      <div className={style.product_details}>
        <h3 className={style.product_title}>{title}</h3>
        <div className={style.rating_container}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small className={style.rating_count}>({rating?.count || 0})</small>
        </div>
        <div className={style.price_container}>
          <CurrencyFormat amount={price} />
        </div>
        <button className={style.button} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
