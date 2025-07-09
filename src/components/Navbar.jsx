import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import products from "../mockData";

const Navbar = ({ navLinks = [] }) => {
  const [open, setOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (wishlistOpen) {
      const favs = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistProducts(products.filter((p) => favs.includes(p.id)));
    }
  }, [wishlistOpen]);

  return (
    <nav className="relative z-40">
      <div className="flex items-center justify-between md:justify-start gap-4 py-2 px-2 md:px-0">
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none p-2 rounded hover:bg-gray-100 active:bg-gray-200"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        {/* Overlay for mobile menu */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
        <ul
          className={`flex-col md:flex-row md:flex gap-2 md:gap-4 fixed md:static top-0 left-0 h-full w-3/4 max-w-xs bg-white md:bg-transparent shadow-lg md:shadow-none z-40 transition-transform duration-200 transform md:translate-x-0 ${
            open
              ? "flex translate-x-0"
              : "hidden md:flex -translate-x-full md:translate-x-0"
          }`}
          style={{ minHeight: open ? "100vh" : undefined }}
        >
          <li className="md:hidden flex justify-end p-4">
            <button
              className="text-2xl text-gray-700 focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <FaTimes />
            </button>
          </li>
          {navLinks.map((link) => (
            <li key={link.href} className="">
              <a
                href={link.href}
                className="block px-6 py-3 text-lg md:text-base text-gray-700 hover:text-blue-600 font-medium focus:bg-gray-100 focus:outline-none rounded"
                onClick={() => setOpen(false)}
                tabIndex={0}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Wishlist Modal */}
      {wishlistOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setWishlistOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Wishlist"
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl focus:outline-none"
              onClick={() => setWishlistOpen(false)}
              aria-label="Close wishlist"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Wishlist</h2>
            {wishlistProducts.length === 0 ? (
              <p className="text-gray-500">No products in your wishlist.</p>
            ) : (
              <ul className="space-y-4 max-h-80 overflow-y-auto">
                {wishlistProducts.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center gap-4 cursor-pointer hover:bg-blue-50 rounded p-2 transition"
                    onClick={() => {
                      setWishlistOpen(false);
                      navigate(`/product/${product.id}`);
                    }}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setWishlistOpen(false);
                        navigate(`/product/${product.id}`);
                      }
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title || product.name}
                      className="w-16 h-16 object-cover rounded border"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">
                        {product.title || product.name}
                      </div>
                      <div className="text-blue-600 font-bold">
                        ${product.price}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
