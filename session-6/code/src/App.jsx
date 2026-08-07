import React, { useState, useEffect, useMemo, useCallback } from "react";
import { fetchProduct } from "./services/productServices";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import useDebounce from "./hooks/useDebounce";
import { Suspense } from "react";

const Cart = React.lazy(() => import("./components/Cart")); //lazy loading

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm);

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
    // console.log("product added now!");
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  // useMemo()
  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      // console.log("filtering products", product.title);
      // let i = 0;
      // for (i = 0; i < 100; i++) {
      //   console.log(i);
      // }

      return product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
    });
  }, [products, debouncedSearch]);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div>
        <SearchBar value={debouncedSearch} searchInput={setSearchTerm} />
        <ProductList products={filterProducts} onAdd={onAdd} />
      </div>

      <div>
        <Suspense fallback={<div>Loading Cart...</div>}>
          <Cart cart={cart} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
