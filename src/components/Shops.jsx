import React, { useState } from "react";
import pizzaLogo from "../assets/pizza-6478478_1280.jpg";
import electronicsLogo from "../assets/electronics.jpg";
import bloomLogo from "../assets/bloomandblossom.jpg";
import cappucinoLogo from "../assets/cappucino.jpg";
import boutiqueLogo from "../assets/boutique.jpg";
import freshmarketLogo from "../assets/freshmarket.jpg";
import salonLogo from "../assets/salon.jpg";

const initialShops = [
  {
    name: "Mario's Pizzeria",
    address: "987 Market Street, Fresh District",
    tags: ["Groceries", "Organic", "Fresh Produce"],
    status: "Open",
    description: "Groceries • Organic • Fresh Produce",
    rating: 4.8,
    reviews: 267,
    category: "Food & Dining",
    logo: pizzaLogo,
    services: ["Pizza", "Pasta", "Salads", "Takeout"],
    hours: "10:00 AM - 10:00 PM",
    email: "contact@mariospizzeria.com",
    phone: "+1 555-123-4567",
  },
  {
    name: "TechFix Solutions",
    address: "456 Tech Avenue, Digital District",
    tags: ["Electronics Repair", "IT Services"],
    status: "Open",
    description: "Electronics Repair • IT Services",
    rating: 4.6,
    reviews: 156,
    category: "Services",
    logo: electronicsLogo,
    services: ["Phone Repair", "Laptop Repair", "IT Consulting"],
    hours: "9:00 AM - 8:00 PM",
    email: "support@techfix.com",
    phone: "+1 555-234-5678",
  },
  {
    name: "Bloom & Blossom",
    address: "789 Garden Lane, Flower District",
    tags: ["Flower Shop", "Garden Supplies"],
    status: "Closed",
    description: "Flower Shop • Garden Supplies",
    rating: 4.9,
    reviews: 89,
    category: "Shopping",
    logo: bloomLogo,
    services: ["Bouquets", "Event Flowers", "Garden Tools"],
    hours: "8:00 AM - 6:00 PM",
    email: "info@bloomblossom.com",
    phone: "+1 555-345-6789",
  },
  {
    name: "Café Mocha",
    address: "321 Coffee Street, Artisan Quarter",
    tags: ["Coffee Shop", "Bakery"],
    status: "Open",
    description: "Coffee Shop • Bakery",
    rating: 4.7,
    reviews: 312,
    category: "Food & Dining",
    logo: cappucinoLogo,
    services: ["Coffee", "Pastries", "Sandwiches"],
    hours: "7:00 AM - 9:00 PM",
    email: "hello@cafemocha.com",
    phone: "+1 555-456-7890",
  },
  {
    name: "StyleHub Boutique",
    address: "654 Fashion Boulevard, Style District",
    tags: ["Fashion", "Clothing", "Accessories"],
    status: "Open",
    description: "Fashion • Clothing • Accessories",
    rating: 4.5,
    reviews: 198,
    category: "Shopping",
    logo: boutiqueLogo,
    services: ["Clothing", "Accessories", "Personal Styling"],
    hours: "10:00 AM - 8:00 PM",
    email: "contact@stylehub.com",
    phone: "+1 555-567-8901",
  },
  {
    name: "Fresh Market",
    address: "123 Main Street, Downtown",
    tags: ["Groceries", "Fresh Produce"],
    status: "Open",
    description: "Groceries • Fresh Produce",
    rating: 4.8,
    reviews: 234,
    category: "Food & Dining",
    logo: freshmarketLogo,
    services: ["Groceries", "Organic Produce", "Dairy"],
    hours: "8:00 AM - 9:00 PM",
    email: "info@freshmarket.com",
    phone: "+1 555-678-9012",
  },
  {
    name: "Urban Style Salon",
    address: "222 City Plaza, Uptown",
    tags: ["Salon", "Men", "Women", "Haircut", "Styling"],
    status: "Open",
    description:
      "Full-service salon for men & women • Haircuts • Styling • Grooming",
    rating: 4.9,
    reviews: 142,
    category: "Health & Beauty",
    logo: salonLogo,
    services: [
      "Men's Haircut",
      "Women's Haircut",
      "Styling",
      "Coloring",
      "Grooming",
    ],
    hours: "9:00 AM - 8:00 PM",
    email: "contact@urbanstylesalon.com",
    phone: "+1 555-789-0123",
  },
];

const categories = [
  "All",
  "Food & Dining",
  "Shopping",
  "Services",
  "Health & Beauty",
  "Auto & Repair",
];

const Shops = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedShop, setSelectedShop] = useState(null);

  const filteredShops = initialShops.filter((shop) => {
    const matchesCategory =
      activeCategory === "All" || shop.category === activeCategory;
    const matchesSearch =
      shop.name.toLowerCase().includes(search.toLowerCase()) ||
      shop.address.toLowerCase().includes(search.toLowerCase()) ||
      shop.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-100 pb-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 text-center relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Discover Local Shops
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Find the best local businesses in your neighborhood
        </p>
        <button
          className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300 mb-4"
          onClick={() => {
            const grid = document.getElementById("shop-grid");
            if (grid) grid.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Now
        </button>
      </section>

      {/* Filter/Search Section */}
      <section className="bg-white border-b border-gray-200 py-6 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
              <input
                type="text"
                className="flex-1 bg-transparent border-none outline-none text-gray-700 text-base px-2 py-1"
                placeholder="Search for shops, products, or services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full border-2 font-semibold transition-all duration-200 text-sm md:text-base ${
                  activeCategory === cat
                    ? "bg-blue-500 border-blue-500 text-white shadow"
                    : "bg-white border-blue-300 text-blue-600 hover:bg-blue-100"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Grid */}
      <section id="shop-grid" className="py-12 px-4 md:px-16">
        <h2 className="section-title text-3xl font-extrabold text-center mb-10 text-gray-800 relative">
          Featured Local Shops
          <span className="block w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredShops.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No shops found.
            </div>
          ) : (
            filteredShops.map((shop, idx) => (
              <div
                key={shop.name + idx}
                className="shop-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden cursor-pointer group"
              >
                <div className="shop-header flex justify-between items-center mb-4">
                  <h3 className="shop-name text-xl font-bold text-gray-800">
                    {shop.name}
                  </h3>
                  <div
                    className={`shop-status px-4 py-1 rounded-full text-xs font-semibold animate-pulse ${
                      shop.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {shop.status}
                  </div>
                </div>
                <div className="shop-info flex flex-col gap-2 mb-4">
                  <div className="info-item flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>{shop.address}</span>
                  </div>
                  <div className="info-item flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span>{shop.description}</span>
                  </div>
                  <div className="info-item">
                    <div className="rating flex items-center gap-2 font-semibold text-yellow-500">
                      <div className="stars flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`star text-lg ${
                              i < Math.round(shop.rating) ? "" : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-700">
                        {shop.rating} ({shop.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="shop-actions flex gap-3 mt-4">
                  <button
                    className="action-btn btn-primary flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-lg shadow hover:from-purple-500 hover:to-blue-500 transition-all"
                    onClick={() => setSelectedShop(shop)}
                  >
                    View Details
                  </button>
                  <button className="action-btn btn-secondary flex-1 bg-gray-100 text-blue-600 font-semibold py-2 rounded-lg border border-blue-300 hover:bg-blue-50 transition-all">
                    Call Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      {/* Shop Details Modal */}
      {selectedShop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-400/70 via-purple-400/70 to-pink-400/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedShop(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex flex-col items-center gap-4">
              {/* Larger Logo */}
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-5xl font-bold text-gray-400 mb-2 overflow-hidden shadow-lg">
                {selectedShop.logo ? (
                  <img
                    src={selectedShop.logo}
                    alt="Shop Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  selectedShop.name[0]
                )}
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-1">
                {selectedShop.name}
              </h2>
              <div className="text-gray-500 text-sm mb-2">
                {selectedShop.address}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedShop.services.map((service, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-700">Hours:</span>
                <span className="text-gray-600">{selectedShop.hours}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-700">Email:</span>
                <span className="text-blue-600 underline">
                  {selectedShop.email}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-700">Contact:</span>
                <span className="text-gray-700">{selectedShop.phone}</span>
              </div>
              {/* Rating Feature */}
              <div className="flex flex-col items-center mt-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < Math.round(selectedShop.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-gray-700 font-semibold">
                    {selectedShop.rating}
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {selectedShop.reviews} reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shops;
