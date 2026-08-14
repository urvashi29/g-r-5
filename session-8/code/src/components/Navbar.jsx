import React, { useContext } from "react";
import { StoreContext } from "../context/StoreProvider";

const Navbar = () => {
  // consuming a provider state
  const { cart, toggleTheme } = useContext(StoreContext);

  return (
    <div style={{ diplay: "flex", gap: "20px" }}>
      <h2>Cart: {cart.length}</h2>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default Navbar;
