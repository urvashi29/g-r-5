import React, { createContext, useState } from "react";

export const StoreContext = createContext();

// Provider Component
const StoreProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [cart, setCart] = useState([]);
  console.log(children);

  // API calls 
  const addToCart = (product) => {
    // api call to add to product 
    setCart((prev) => [...prev, product]);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <>
      <StoreContext.Provider value={{ theme, cart, addToCart, toggleTheme }}>
        {children}
      </StoreContext.Provider>
    </>
  );
};

export default StoreProvider;
