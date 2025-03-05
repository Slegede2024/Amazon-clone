import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {productUrl} from "../../Api/endepoint"
import LayOut from "../../Componets/LayOut/LayOut";
import ProductCard from "../../Componets/Product/ProductCard";
import Loader from "../../Componets/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams()
  // console.log(productId)
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    //https://fakestoreapi.com/products/7
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res)
        setProduct(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard data={product} flex={true} renderDesc={true} renderADD ={true}/>
      )}
    </LayOut>
  )
}

export default ProductDetail;


