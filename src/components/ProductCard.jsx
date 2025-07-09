import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import imageData from "../imageData";
import useCart from "../hooks/useCart";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setFavorite(favs.includes(product.id));
  }, [product.id]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const favs = JSON.parse(localStorage.getItem("wishlist") || "[]");
    let updated;
    if (favs.includes(product.id)) {
      updated = favs.filter((id) => id !== product.id);
      setFavorite(false);
    } else {
      updated = [...favs, product.id];
      setFavorite(true);
    }
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // Determine if this is a main product (for homepage hover effect)
  const isMainProduct = ["p1", "p2", "p3", "p4", "p5", "p6"].includes(
    product.id
  );
  return (
    <Link
      to={`/product/${product.id}`}
      className="block group focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <div className="bg-white border border-blue-200 rounded-lg shadow-md overflow-hidden flex flex-col h-full relative hover:scale-105 hover:shadow-2xl hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 animate-fade-in">
        {/* Wishlist Heart Icon */}
        <button
          className="absolute top-2 right-2 z-30 p-1 bg-white/80 rounded-full focus:outline-none"
          onClick={toggleFavorite}
          aria-label={favorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <FaHeart
            className={favorite ? "text-red-500" : "text-gray-300"}
            size={22}
          />
        </button>
        {/* Gallery fills the card with hover scale effect */}
        <div className="w-full h-full">
          <Gallery
            images={product.image ? [product.image] : []}
            className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
            imgProps={{ loading: "lazy" }}
          />
          {isMainProduct && (
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />
          )}
        </div>
        {/* Overlay for product info with hover effect */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4 text-white transition-all duration-300 group-hover:from-blue-900/90 group-hover:opacity-100 group-active:from-blue-900/95 z-20">
          <h2 className="text-base sm:text-lg font-bold mb-1 truncate transition-colors duration-300 group-hover:text-blue-200">
            {product.title || product.name}
          </h2>
          {product.description && (
            <p className="text-xs mb-1 truncate transition-colors duration-300 group-hover:text-blue-100">
              {product.description}
            </p>
          )}
          <p className="text-sm sm:text-base font-semibold transition-colors duration-300 group-hover:text-blue-300">
            ${product.price}
          </p>
          <button
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded text-base sm:text-sm hover:bg-blue-700 hover:scale-105 transition shadow-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
