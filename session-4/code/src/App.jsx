import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductDisplay from "./pages/ProductDisplay";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDisplay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

// Task
// API: Rapid Api, OMDB Free api's
// Try for movies -> Home, About, Contact, Movies, Movie detail page
