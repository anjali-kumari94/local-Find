import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import maplocal from "../assets/maplocal.jpg";

// Placeholder images (replace with real assets as needed)
const logoUrl = "https://via.placeholder.com/120x120.png?text=Logo";
const productImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // Sourdough Loaf
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", // Croissants
  "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80", // Cinnamon Rolls
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80", // Muffins
];

const featuredItems = [
  {
    name: "Sourdough Loaf",
    price: "$6.50",
    image: productImages[0],
    desc: "Crusty artisan sourdough, baked fresh daily.",
  },
  {
    name: "Croissants",
    price: "$3.00",
    image: productImages[1],
    desc: "Flaky, buttery croissants with a golden crust.",
  },
  {
    name: "Cinnamon Rolls",
    price: "$4.00",
    image: productImages[2],
    desc: "Soft rolls swirled with cinnamon and sugar.",
  },
  {
    name: "Muffins",
    price: "$2.50",
    image: productImages[3],
    desc: "Assorted muffins made with seasonal ingredients.",
  },
];

const reviews = [
  {
    name: "Alice",
    rating: 5,
    comment: "Best sourdough I've ever had! Perfect crust and flavor.",
  },
  {
    name: "Ben",
    rating: 4,
    comment: "Croissants are so flaky and delicious. Will come again!",
  },
  {
    name: "Carla",
    rating: 5,
    comment: "Cinnamon rolls are a family favorite. Highly recommend!",
  },
];

const contact = {
  address: "123 Main St, Smalltown, ST 12345",
  phone: "555-123-4567",
  email: "info@dailycrumb.com",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories/bakery" },
  { label: "Bakeries", href: "/categories/bakery" },
  { label: "The Daily Crumb", href: "" }, // current page
];

const BusinessProfile = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={logoUrl}
          alt="The Daily Crumb Logo"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-1">The Daily Crumb</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-semibold text-lg">4.5</span>
            <span className="text-gray-500">(120 reviews)</span>
          </div>
          <p className="text-gray-600">
            A cozy neighborhood bakery specializing in artisan breads, pastries,
            and sweet treats. Freshly baked every morning!
          </p>
        </div>
      </div>

      {/* Featured Items */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
              <div className="text-blue-600 font-semibold mb-1">
                {item.price}
              </div>
              <p className="text-gray-500 text-sm text-center mb-2">
                {item.desc}
              </p>
              <button className="mt-auto bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition text-sm">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-4 shadow flex flex-col sm:flex-row gap-3 items-start"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-blue-700">{review.name}</span>
                <span className="flex items-center text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                  ))}
                </span>
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <div className="mb-2">
              <span className="font-semibold">Address:</span> {contact.address}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Phone:</span> {contact.phone}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {contact.email}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 mt-10">Location</h2>
        <div className="bg-gray-200 rounded-lg flex items-center justify-center h-56 mb-8">
          <img
            src={maplocal}
            alt="Map location"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default BusinessProfile;
