import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import bakeryImg from "../assets/bakery.jpg.jpg";
import croissantImg from "../assets/bakery.jpg4.jpg";
import cakeImg from "../assets/bakery.jpg3.jpg";
import muffinImg from "../assets/bakery.jpg (2).jpg";
import { useCart } from "../context/CartContext";
import maplocal from "../assets/maplocal.jpg";

const featuredItems = [
  {
    name: "Sourdough Bread",
    price: "$5.00",
    image: bakeryImg,
    desc: "Crusty sourdough, baked fresh every morning.",
  },
  {
    name: "Butter Croissant",
    price: "$3.00",
    image: croissantImg,
    desc: "Flaky, buttery croissants with a golden crust.",
  },
  {
    name: "Chocolate Cake Slice",
    price: "$4.00",
    image: cakeImg,
    desc: "Rich chocolate cake, perfect for dessert.",
  },
  {
    name: "Blueberry Muffin",
    price: "$2.50",
    image: muffinImg,
    desc: "Moist muffins loaded with fresh blueberries.",
  },
];

const reviews = [
  {
    name: "Emily",
    rating: 5,
    comment: "The best croissants in town! Always fresh and delicious.",
  },
  {
    name: "James",
    rating: 4,
    comment: "Love their sourdough bread. Great texture and flavor.",
  },
  {
    name: "Sophia",
    rating: 5,
    comment: "Blueberry muffins are my kids' favorite treat!",
  },
];

const contact = {
  address: "101 Baker St, Smalltown, ST 12345",
  phone: "555-321-9876",
  email: "cornerbakery@email.com",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories/bakery" },
  { label: "Bakeries", href: "/categories/bakery" },
  { label: "The Corner Bakery", href: "" },
];

const BusinessProfileCornerBakery = () => {
  const { addToCart } = useCart();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={bakeryImg}
          alt="The Corner Bakery Logo"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-1">The Corner Bakery</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-semibold text-lg">4.7</span>
            <span className="text-gray-500">(98 reviews)</span>
          </div>
          <p className="text-gray-600">
            Freshly baked breads, pastries, and cakes made daily with local
            ingredients. Your neighborhood bakery for every occasion!
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
              <button
                className="mt-auto bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 hover:scale-105 transition text-sm shadow-md"
                onClick={() => addToCart(item)}
              >
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

export default BusinessProfileCornerBakery;
