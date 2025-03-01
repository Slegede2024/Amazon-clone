// import React from 'react'
import Category from "../../Componets/Category/Category"
import Product from "../../Componets/Product/Product"
import CarouselEffect from "../../Componets/caraousel/CarouselEffect"
// import LayOut from "../../Componets/LayOut/LayOut"
import LayOut from "../../Componets/LayOut/LayOut"

function Landing() {
  return (
    <LayOut>
      <CarouselEffect/>
      <Category/>
      <Product/>
    </LayOut>
  )
}

export default Landing
