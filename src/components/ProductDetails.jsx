import React, { useState } from "react";
import { useParams } from "react-router-dom";
import imageData from "../imageData";
import products from "../mockData.js";
import Gallery from "./Gallery";
import { useCart } from "../context/CartContext";
import ProductGrid from "./ProductGrid"; // Added import for ProductGrid
import ProductCard from "./ProductCard"; // Added import for ProductCard

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => String(p.id) === String(productId));

  // State for quantity, size, color, etc.
  const [quantity, setQuantity] = useState(1);
  // Example: const [selectedSize, setSelectedSize] = useState("");
  // Example: const [selectedColor, setSelectedColor] = useState("");

  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    setLoading(true);
    addToCart(product, quantity);
    setTimeout(() => {
      setLoading(false);
      setFeedback("Added to cart!");
      setTimeout(() => setFeedback(""), 1500);
    }, 800);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="flex-1">
          <Gallery
            images={product.image ? [product.image] : []}
            className="w-full h-80"
          />
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-700">${product.price}</p>
          <p className="text-gray-600">{product.businessId}</p>
          <p className="text-gray-500">{product.description}</p>
          {/* Delivery info, etc. */}
          <div className="text-sm text-gray-400">
            Delivery: 2-5 business days
          </div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-2">
            <span>Quantity:</span>
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
          {/* Add to Cart Button */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            onClick={handleAddToCart}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add to Cart"}
          </button>
          {feedback && <div className="text-green-600 mt-2">{feedback}</div>}
          {/* Wishlist, Social Sharing, etc. */}
          <div className="flex gap-2 mt-2">
            <button>❤️ Wishlist</button>
            <button>🔗 Share</button>
          </div>
        </div>
      </div>
      {/* Explore More Products Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Explore More Products
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          Discover a variety of unique items from local businesses in your area.
        </p>
        <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
          {products
            .filter(
              (p) =>
                p.subcategory === product.subcategory && p.id !== product.id
            )
            .map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="min-w-[260px] max-w-xs flex-shrink-0 transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
              >
                <ProductCard product={relatedProduct} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
