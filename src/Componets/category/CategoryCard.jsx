/* eslint-disable react/prop-types */
// import React from "react";
import style from "./Category.module.css";
function Category({ data }) {
  return (
    <div className={style.catagory}>
      <a href="">
        <span>{data.title}</span>
        <img src={data.imageLink} alt="" />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default Category;