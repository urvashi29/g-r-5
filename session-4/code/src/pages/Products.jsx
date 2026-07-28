import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //display data in ordered format -> React List
  const productsList = products.length ? (
    products.map((product) => {
      return <Card product={product} />;
    })
  ) : (
    <p>No data yet!</p>
  );

  return <>{productsList}</>;
};

export default Products;
