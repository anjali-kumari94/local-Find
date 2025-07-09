import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Button from "./Button";
import craftsBanner from "../assets/crafts.jpg.jpg";
import jewelryImg1 from "../assets/handmadebeadednecklace.jpg.jpg";
import jewelryImg2 from "../assets/handmadeclay.jpg.jpg";
import potteryImg1 from "../assets/handpaintedmug.jpg.jpg";
import potteryImg2 from "../assets/pottery.jpg.jpg";
import textilesImg1 from "../assets/Crochet Coasters.jpg.jpg";
import textilesImg2 from "../assets/woven wall hanging.jpg.jpg";
import woodworkImg1 from "../assets/Custom Wooden Sign.jpg.jpg";
import woodworkImg2 from "../assets/woodenjewellerbox.jpg.jpg";
import woodworkImg3 from "../assets/paintedwoodenframe.jpg.jpg";
import { useCart } from "../context/CartContext";
import Footer from "./Footer";
import craftsImg from "../assets/crafts.jpg.jpg";
import { Link } from "react-router-dom";
import bakeryImg from "../assets/bakery.jpg.jpg";
import farmImg from "../assets/farm.jpg.jpg";
import coffeeImg from "../assets/coffee.jpg.jpg";

// Featured businesses from Home.jsx
const featuredBusinesses = [
  {
    name: "The Corner Bakery",
    tagline: "Freshly baked goods daily",
    image: bakeryImg,
    categoryPath: "/categories/bakery",
  },
  {
    name: "Crafted by Hand",
    tagline: "Unique handmade items",
    image: craftsImg,
    categoryPath: "/categories/crafts",
  },
  {
    name: "Green Valley Farms",
    tagline: "Organic produce from our farm",
    image: farmImg,
    categoryPath: "/categories/farm",
  },
  {
    name: "Brewed Awakening",
    tagline: "Artisan coffee roasted locally",
    image: coffeeImg,
    categoryPath: "/categories/coffee",
  },
];

// Example mock data for Handmade Crafts with unique images
const craftsProducts = [
  {
    id: "c1",
    title: "Handmade Beaded Necklace",
    price: 25,
    subcategory: "Jewelry",
    distance: 8,
    createdAt: 1710000000000,
    image: jewelryImg1,
  },
  {
    id: "c2",
    title: "Ceramic Pottery Vase",
    price: 40,
    subcategory: "Pottery",
    distance: 12,
    createdAt: 1711000000000,
    image: potteryImg2,
  },
  {
    id: "c3",
    title: "Woven Wall Hanging",
    price: 30,
    subcategory: "Textiles",
    distance: 5,
    createdAt: 1712000000000,
    image: textilesImg2,
  },
  {
    id: "c4",
    title: "Wooden Jewelry Box",
    price: 35,
    subcategory: "Woodwork",
    distance: 10,
    createdAt: 1713000000000,
    image: woodworkImg2,
  },
  {
    id: "c5",
    title: "Hand-painted Mug",
    price: 18,
    subcategory: "Pottery",
    distance: 7,
    createdAt: 1714000000000,
    image: potteryImg1,
  },
  {
    id: "c6",
    title: "Macrame Plant Hanger",
    price: 22,
    subcategory: "Textiles",
    distance: 6,
    createdAt: 1715000000000,
    image: textilesImg1,
  },
  {
    id: "c7",
    title: "Custom Wooden Sign",
    price: 28,
    subcategory: "Woodwork",
    distance: 15,
    createdAt: 1716000000000,
    image: woodworkImg1,
  },
  {
    id: "c8",
    title: "Handmade Clay Earrings",
    price: 16,
    subcategory: "Jewelry",
    distance: 9,
    createdAt: 1717000000000,
    image: jewelryImg2,
  },
  {
    id: "c9",
    title: "Crochet Coasters (Set of 4)",
    price: 14,
    subcategory: "Textiles",
    distance: 4,
    createdAt: 1718000000000,
    image: textilesImg1,
  },
  {
    id: "c10",
    title: "Painted Wooden Frame",
    price: 20,
    subcategory: "Woodwork",
    distance: 11,
    createdAt: 1719000000000,
    image: woodworkImg1,
  },
];

const subcategories = ["Jewelry", "Pottery", "Textiles", "Woodwork"];
const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

const Categories = () => {
  const [filters, setFilters] = useState({
    subcategory: "",
    maxPrice: "",
    maxDistance: "",
  });
  const [sort, setSort] = useState("price-asc");
  const [page, setPage] = useState(1);
  const productsPerPage = 6;
  const { addToCart } = useCart();
  const [modalProduct, setModalProduct] = useState(null);
  const [modalQty, setModalQty] = useState(1);
  const [feedback, setFeedback] = useState("");

  // Filter and sort logic
  let filtered = craftsProducts.filter((p) => {
    const matchSub =
      !filters.subcategory || p.subcategory === filters.subcategory;
    const matchPrice = !filters.maxPrice || p.price <= Number(filters.maxPrice);
    const matchDist =
      !filters.maxDistance || p.distance <= Number(filters.maxDistance);
    return matchSub && matchPrice && matchDist;
  });
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "newest") filtered.sort((a, b) => b.createdAt - a.createdAt);

  // Pagination
  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const paginated = filtered.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const openModal = (product) => {
    setModalProduct(product);
    setModalQty(1);
    setFeedback("");
  };
  const closeModal = () => setModalProduct(null);
  const handleAddToCart = () => {
    addToCart(modalProduct, modalQty);
    setFeedback("Added to cart!");
    setTimeout(() => setFeedback(""), 1000);
    setTimeout(() => closeModal(), 1200);
  };

  return (
    <>
      {/* Featured Categories Section */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {featuredBusinesses.map((biz) => (
            <Link
              to={biz.categoryPath}
              key={biz.name}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center group"
            >
              <img
                src={biz.image}
                alt={biz.name}
                className="w-full h-32 object-cover rounded mb-3 group-hover:scale-105 transition"
              />
              <div className="font-bold text-lg mb-1">{biz.name}</div>
              <div className="text-gray-500 text-sm">{biz.tagline}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow p-4 sticky top-4">
            <h2 className="text-lg font-bold mb-4">Filter</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Subcategory</label>
              <select
                className="w-full border rounded p-2"
                value={filters.subcategory}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, subcategory: e.target.value }))
                }
              >
                <option value="">All</option>
                {subcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Max Price</label>
              <input
                type="number"
                className="w-full border rounded p-2"
                placeholder="No limit"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, maxPrice: e.target.value }))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Max Distance (km)
              </label>
              <input
                type="number"
                className="w-full border rounded p-2"
                placeholder="No limit"
                value={filters.maxDistance}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, maxDistance: e.target.value }))
                }
              />
            </div>
            <Button
              label="Reset"
              onClick={() =>
                setFilters({ subcategory: "", maxPrice: "", maxDistance: "" })
              }
            />
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1">
          {/* Crafted by Hand Business Card */}
          <div className="mb-8 flex justify-center">
            <Link
              to="/business/crafted-by-hand"
              className="block w-full md:w-2/3"
            >
              <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center p-4 hover:shadow-lg transition cursor-pointer">
                <img
                  src={craftsImg}
                  alt="Crafted by Hand"
                  className="w-32 h-32 object-cover rounded-full mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-1">Crafted by Hand</h2>
                  <div className="text-yellow-500 text-lg mb-1">★ 4.8</div>
                  <p className="text-gray-600 mb-1">
                    Unique handmade pottery, jewelry, and crafts from local
                    artisans.
                  </p>
                  <span className="text-blue-600 underline">
                    View Business Profile
                  </span>
                </div>
              </div>
            </Link>
          </div>
          {/* Category Banner/Header */}
          <div className="mb-8 rounded-lg overflow-hidden relative h-48 md:h-64 flex items-center justify-center">
            <img
              src={craftsBanner}
              alt="Handmade Crafts"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">
                Handmade Crafts
              </h1>
              <p className="text-lg md:text-xl text-white drop-shadow max-w-2xl mx-auto">
                Discover unique, handcrafted items made by local artisans. From
                jewelry to pottery, find the perfect piece for your home or as a
                gift.
              </p>
            </div>
          </div>
          {/* Sorting */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div className="text-sm text-gray-500">
              {filtered.length} products found
            </div>
            <div>
              <label className="mr-2 font-medium">Sort by:</label>
              <select
                className="border rounded p-2"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Product Grid - 2 columns on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paginated.map((product) => (
              <div key={product.id}>
                <div className="bg-white rounded-xl shadow-md flex flex-col items-start p-0 h-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover cursor-pointer"
                    onClick={() => openModal(product)}
                  />
                  <div className="p-4 w-full">
                    <div className="font-bold text-lg mb-2">
                      {product.title}
                    </div>
                    <div className="text-gray-500 mb-2">
                      Subcategory: {product.subcategory}
                    </div>
                    <div className="text-blue-600 font-semibold mb-2">
                      ${product.price}
                    </div>
                    <div className="text-xs text-gray-400">
                      Distance: {product.distance} km
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Modal for product details */}
          {modalProduct && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <div
                className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-0 flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                {/* Left: Image */}
                <div className="flex-1 flex items-center justify-center p-6">
                  <img
                    src={modalProduct.image}
                    alt={modalProduct.title}
                    className="w-full h-80 object-cover rounded"
                  />
                </div>
                {/* Right: Details */}
                <div className="flex-1 flex flex-col gap-4 p-6">
                  <h2 className="text-2xl font-bold mb-1">
                    {modalProduct.title}
                  </h2>
                  <div className="text-blue-600 font-semibold text-lg mb-1">
                    ${modalProduct.price}
                  </div>
                  <div className="text-gray-500 mb-1">
                    Subcategory: {modalProduct.subcategory}
                  </div>
                  <div className="text-gray-600 mb-1">
                    Delivery: 2-5 business days
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">Quantity:</span>
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => setModalQty((q) => Math.max(1, q - 1))}
                    >
                      -
                    </button>
                    <span>{modalQty}</span>
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => setModalQty((q) => q + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  {feedback && (
                    <div className="text-green-600 mt-2 text-center">
                      {feedback}
                    </div>
                  )}
                  <div className="flex gap-4 mt-2">
                    <button className="text-pink-500 hover:text-pink-700 flex items-center gap-1">
                      <span>❤️</span> Wishlist
                    </button>
                    <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                      <span>🔗</span> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border ${
                  page === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
