import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./productDetail.module.css"; // ✅ Import CSS module

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("🔍 Debug: Product ID from URL:", productId);

  useEffect(() => {
    if (!productId) {
      console.error("❌ Invalid product ID:", productId);
      setError("Invalid product ID");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log("✅ API Response:", response.data);

        if (response.data && Object.keys(response.data).length > 0) {
          setProduct(response.data);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("⚠️ Error fetching product:", err);
        setError("Product not found or error fetching data");
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p className={style.loading}>Loading...</p>;
  if (error) return <p className={style.error}>{error}</p>;

  return (
    <div className={style.container}>
      {product ? (
        <>
          <h1 className={style.title}>{product.title}</h1>
          <img
            className={style.image}
            src={product.image}
            alt={product.title}
          />
          <p className={style.description}>{product.description}</p>
          <p className={style.price}>Price: ${product.price}</p>
          <p className={style.category}>Category: {product.category}</p>
        </>
      ) : (
        <p className={style.error}>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetail;
