import React from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.jpg";
import { FaUserCircle, FaShoppingCart, FaHeart, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import products from "../mockData";

const Header = ({ navLinks = [], onSearch, user }) => {
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const [wishlistOpen, setWishlistOpen] = React.useState(false);
  const [wishlistProducts, setWishlistProducts] = React.useState([]);

  React.useEffect(() => {
    if (wishlistOpen) {
      const favs = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistProducts(products.filter((p) => favs.includes(p.id)));
    }
  }, [wishlistOpen]);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="LocalFinds Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="font-bold text-xl text-blue-700">LocalFinds</span>
        </a>
        <nav className="ml-6 flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex-1 mx-8 max-w-lg">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="flex items-center gap-4">
        {/* Wishlist Icon */}
        <button
          className="relative p-2 text-2xl text-gray-700 hover:text-red-500 focus:outline-none"
          aria-label="View wishlist"
          onClick={() => setWishlistOpen(true)}
        >
          <FaHeart />
          {/* Wishlist count badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
            {JSON.parse(localStorage.getItem("wishlist") || "[]").length}
          </span>
        </button>
        <a href="/cart" className="relative text-gray-600 hover:text-blue-600">
          <FaShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {itemCount}
            </span>
          )}
        </a>
        {user ? (
          <a href="/profile" className="text-gray-600 hover:text-blue-600">
            <FaUserCircle size={28} />
          </a>
        ) : (
          <button
            className="text-gray-600 hover:text-blue-600 bg-transparent border-none p-0 m-0"
            onClick={() => navigate("/login")}
            aria-label="Login"
          >
            <FaUserCircle size={28} />
          </button>
        )}
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
    </header>
  );
};

export default Header;
