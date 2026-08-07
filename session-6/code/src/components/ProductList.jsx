import React from "react";

const ProductItem = ({ product, onAdd }) => {
  // console.log("Render");
  
  return (
    <div style={{ marginBottom: "10px" }}>
      <p>
        {product.title}- {product.price}
      </p>
      <button onClick={() => onAdd(product)}>Add to cart</button>
    </div>
  );
};

const ProductList = ({ products, onAdd }) => {
  console.log("productlist is added !");

  return (
    <div>
      {products.map((product) => {
        return <ProductItem product={product} onAdd={onAdd} />;
      })}
    </div>
  );
};

export default ProductList;
