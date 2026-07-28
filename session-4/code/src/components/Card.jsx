import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <>
      <p>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </p>
      <p>
        {product.brand} - {product.price}
      </p>
    </>
  );
};

export default Card;
