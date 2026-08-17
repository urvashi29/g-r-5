import React, { useEffect } from "react";
import { fetchProducts, toggleWishlist } from "../action/action";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const disptach = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    disptach(fetchProducts());
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} />
          <p>
            {product.title} - {product.price}
          </p>
          <button onClick={() => disptach(toggleWishlist(product.id))}>
            {product.liked ? "❤️" : "🤍"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
