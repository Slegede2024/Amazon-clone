/* eslint-disable react/prop-types */

import style from "../category/Category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({data}) {
  // console.log(data);

  return (
    <div className={style.catagory}>
      <Link to={`/category/${data.category}`}>
        <span>{data.category}</span>
        <img src={data.imageLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
