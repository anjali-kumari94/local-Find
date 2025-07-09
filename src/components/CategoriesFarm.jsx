import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Button from "./Button";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import farmBanner from "../assets/farm.jpg4.jpg";
import appleImg from "../assets/apple.jpg";
import blueberryImg from "../assets/farm.jpg.jpg";
import lettuceImg from "../assets/lettuce.jpg";
import watermelonImg from "../assets/farm.jpg5.jpg";
import farmImg from "../assets/farm.jpg.jpg";
import { Link } from "react-router-dom";

const farmProducts = [
  {
    id: "f1",
    title: "Fresh Apples",
    price: 4,
    subcategory: "Fruit",
    distance: 3,
    createdAt: 1710000000000,
    image: appleImg,
  },
  {
    id: "f2",
    title: "Organic Blueberries",
    price: 6,
    subcategory: "Berry",
    distance: 4,
    createdAt: 1711000000000,
    image: blueberryImg,
  },
  {
    id: "f3",
    title: "Crisp Lettuce",
    price: 2,
    subcategory: "Vegetable",
    distance: 2,
    createdAt: 1712000000000,
    image: lettuceImg,
  },
  {
    id: "f4",
    title: "Farm Fresh watermelon",
    price: 5,
    subcategory: "watermelon",
    distance: 1,
    createdAt: 1713000000000,
    image: watermelonImg,
  },
];

const subcategories = ["Fruit", "Berry", "Vegetable", "Eggs"];
const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

const CategoriesFarm = () => {
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

  let filtered = farmProducts.filter((p) => {
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
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">
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
        <main className="flex-1">
          {/* Green Valley Farms Business Card */}
          <div className="mb-8 flex justify-center">
            <Link
              to="/business/green-valley-farms"
              className="block w-full md:w-2/3"
            >
              <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center p-4 hover:shadow-lg transition cursor-pointer">
                <img
                  src={farmImg}
                  alt="Green Valley Farms"
                  className="w-32 h-32 object-cover rounded-full mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    Green Valley Farms
                  </h2>
                  <div className="text-yellow-500 text-lg mb-1">★ 4.9</div>
                  <p className="text-gray-600 mb-1">
                    Organic produce, fresh eggs, and local honey straight from
                    our family farm.
                  </p>
                  <span className="text-blue-600 underline">
                    View Business Profile
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mb-8 rounded-lg overflow-hidden relative h-48 md:h-64 flex items-center justify-center">
            <img
              src={farmBanner}
              alt="Green Valley Farms"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">
                Green Valley Farms
              </h1>
              <p className="text-lg md:text-xl text-white drop-shadow max-w-2xl mx-auto">
                Organic produce from our farm. Enjoy fresh fruits, berries,
                vegetables, and eggs direct from the source.
              </p>
            </div>
          </div>
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

export default CategoriesFarm;
