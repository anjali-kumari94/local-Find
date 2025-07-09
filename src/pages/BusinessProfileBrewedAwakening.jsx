import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import coffeeImg from "../assets/coffee.jpg.jpg";
import cappuccinoImg from "../assets/cappucino.jpg";
import classicLatteImg from "../assets/classiclatte.jpg";
import pastryImg from "../assets/bakery.jpg3.jpg";
import beansImg from "../assets/coffee.jpg2.jpg";
import { useCart } from "../context/CartContext";
import maplocal from "../assets/maplocal.jpg";

const featuredItems = [
  {
    name: "Cappuccino",
    price: "$4.00",
    image: cappuccinoImg,
    desc: "Rich espresso with steamed milk and a creamy foam top.",
  },
  {
    name: "Classic Latte",
    price: "$4.50",
    image: classicLatteImg,
    desc: "Smooth espresso with velvety steamed milk.",
  },
  {
    name: "Fresh Pastry",
    price: "$3.00",
    image: pastryImg,
    desc: "Baked daily, perfect with your morning coffee.",
  },
  {
    name: "Coffee Beans (12oz)",
    price: "$12.00",
    image: beansImg,
    desc: "Locally roasted beans for the perfect cup at home.",
  },
];

const reviews = [
  {
    name: "Ella",
    rating: 5,
    comment: "Best cappuccino in town! The foam is always perfect.",
  },
  {
    name: "Mason",
    rating: 4,
    comment: "Love the pastries and the cozy atmosphere.",
  },
  {
    name: "Grace",
    rating: 5,
    comment: "Their coffee beans make my mornings so much better!",
  },
];

const contact = {
  address: "404 Java Ave, Smalltown, ST 12345",
  phone: "555-246-1357",
  email: "brewedawakening@email.com",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories/coffee" },
  { label: "Coffee", href: "/categories/coffee" },
  { label: "Brewed Awakening", href: "" },
];

const BusinessProfileBrewedAwakening = () => {
  const { addToCart } = useCart();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={coffeeImg}
          alt="Brewed Awakening Logo"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-1">Brewed Awakening</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-semibold text-lg">4.6</span>
            <span className="text-gray-500">(76 reviews)</span>
          </div>
          <p className="text-gray-600">
            Artisan coffee, espresso drinks, and pastries roasted and baked
            locally. Start your day with a perfect cup!
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

export default BusinessProfileBrewedAwakening;
