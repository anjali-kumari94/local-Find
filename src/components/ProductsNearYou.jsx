import React, { useState } from "react";
import bakeryImg from "../assets/bakery.jpg.jpg";
import craftsImg from "../assets/crafts.jpg.jpg";
import farmImg from "../assets/farm.jpg.jpg";
import coffeeImg from "../assets/coffee.jpg.jpg";
import { products } from "./Home";

const featuredBusinesses = [
  {
    name: "The Corner Bakery",
    tagline: "Freshly baked goods daily",
    image: bakeryImg,
  },
  {
    name: "Crafted by Hand",
    tagline: "Unique handmade items",
    image: craftsImg,
  },
  {
    name: "Green Valley Farms",
    tagline: "Organic produce from our farm",
    image: farmImg,
  },
  {
    name: "Brewed Awakening",
    tagline: "Artisan coffee roasted locally",
    image: coffeeImg,
  },
];

const ProductsNearYou = () => {
  const [search, setSearch] = useState("");

  // Combine businesses and products for search
  const allItems = [
    ...featuredBusinesses.map((b) => ({ ...b, type: "business" })),
    ...products.map((p) => ({ ...p, type: "product" })),
  ];

  const filtered = allItems.filter((item) => {
    const text =
      item.type === "business"
        ? `${item.name} ${item.tagline}`
        : `${item.title} ${item.business}`;
    return text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 pb-10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
          Products & Featured Businesses Near You
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            className="w-full max-w-md border border-blue-200 rounded-full px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
            placeholder="Search for products or businesses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((item, idx) =>
            item.type === "business" ? (
              <div
                key={item.name + idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-full mb-4 group-hover:scale-105 transition"
                />
                <div className="font-bold text-lg mb-1 text-center">
                  {item.name}
                </div>
                <div className="text-gray-500 text-sm text-center mb-2">
                  {item.tagline}
                </div>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mt-auto">
                  Featured Business
                </span>
              </div>
            ) : (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg mb-4 group-hover:scale-105 transition"
                />
                <div className="font-bold text-lg mb-1 text-center">
                  {item.title}
                </div>
                <div className="text-gray-500 text-sm text-center mb-2">
                  {item.business}
                </div>
                <div className="text-blue-700 font-semibold text-base mb-1">
                  ${item.price}
                </div>
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mt-auto">
                  Product
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsNearYou;
