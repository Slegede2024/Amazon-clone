// import React from "react";
import { catagoryinfo } from "../category/CategoryFullInfos";
import CategoryCard from "../category/CategoryCard";
import style from "../category/Category.module.css";
function Category() {
  return (
    <section className={style.catagory_container}>
      {catagoryinfo?.map((singleproduct, i) => {
        return <CategoryCard key={i} data={singleproduct} />;
      })}
    </section>
  );
}

export default Category;
