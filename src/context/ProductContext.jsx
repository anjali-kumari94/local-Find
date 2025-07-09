import React, { createContext, useContext, useState, useEffect } from "react";
import { products as defaultProducts } from "../components/Home";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultProducts);
  // Optionally, add loading/error state if fetching from API in future

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
