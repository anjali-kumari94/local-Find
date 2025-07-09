import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Gallery from "./Gallery";
import { useCart } from "../context/CartContext";

Modal.setAppElement("#root"); // For accessibility

const ProductDetailModal = ({ open, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (open) setQuantity(1);
  }, [open, product]);

  if (!product) return null;

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
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      contentLabel="Product Details"
      overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative outline-none"
    >
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="flex-1">
          <Gallery
            images={product.image ? [product.image] : []}
            className="w-full h-80"
          />
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            {product.name || product.title}
          </h1>
          <p className="text-lg text-gray-700">${product.price}</p>
          {product.description && (
            <p className="text-gray-500">{product.description}</p>
          )}
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mt-2">
            <span>Quantity:</span>
            <button
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          {/* Add to Cart Button */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
            onClick={handleAddToCart}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add to Cart"}
          </button>
          {feedback && <div className="text-green-600 mt-2">{feedback}</div>}
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;
