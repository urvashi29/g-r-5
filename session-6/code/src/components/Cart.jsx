import React from "react";

const Cart = ({ cart }) => {
  console.log("cart added!", cart.length);

  const total = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  }, [cart]);

  return (
    <div
      style={{ flex: 1, borderLeft: "1px solid black", paddingLeft: "20px" }}
    >
      <h2>Cart</h2>
      <p>Total: {total}</p>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Cart;
