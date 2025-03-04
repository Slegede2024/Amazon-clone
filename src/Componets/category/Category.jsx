// import React from "react";
import { catagoryinfo } from "./CategoryFullInfos";
import Category from "../category/CategoryCard";
import style from "../category/Category.module.css";
function CategoryList() {
  return (
    <section className={style.catagory_container}>
      {catagoryinfo?.map((singleproduct, i) => {
        return <Category key={i} data={singleproduct} />;
      })}
    </section>
  );
}

export default CategoryList;
