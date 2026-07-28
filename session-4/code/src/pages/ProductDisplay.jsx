import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDisplay = () => {
  const [product, setProduct] = useState(null);

  const params = useParams();
  console.log(params.id);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${params.id}`,
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return <>{product && <p>{product.title}</p>}</>;
};

export default ProductDisplay;
