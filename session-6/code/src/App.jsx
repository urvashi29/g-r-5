import React, { useState, useEffect, useMemo, useCallback } from "react";
import { fetchProduct } from "./services/productServices";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadProducts = async () => {
    try {
      const data = await fetchProduct();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const onAdd = useCallback((product) => {
    console.log("product added now!");
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  // useMemo()
  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      console.log("filtering products", product.title);
      // let i = 0;
      // for (i = 0; i < 100; i++) {
      //   console.log(i);
      // }

      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [products, searchTerm]);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div>
        <SearchBar value={searchTerm} searchInput={setSearchTerm} />
        <ProductList products={filterProducts} onAdd={onAdd} />
      </div>

      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;
