import React, {useContext} from "react";
import data from "../data/products";
import {StoreContext} from "../context/StoreProvider";

const ProductList = () => {
  const { addToCart } = useContext(StoreContext);

  return (
    <>
      {data.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </>
  );
};

export default ProductList;
