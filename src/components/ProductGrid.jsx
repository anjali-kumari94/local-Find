import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onProductClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 py-2 gap-y-6">
    {products.map((product) => (
      <div
        key={product.id}
        onClick={() => onProductClick && onProductClick(product)}
      >
        <ProductCard product={product} />
      </div>
    ))}
  </div>
);

export default ProductGrid;
