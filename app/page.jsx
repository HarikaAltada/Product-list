"use client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Header from "./components/Header";
const Homepage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default Homepage;
