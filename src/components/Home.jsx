import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Button from "./Button";
import ProductFilter from "./ProductFilter";
import ProductGrid from "./ProductGrid";
import { useNavigate, Link } from "react-router-dom";

import bakeryImg from "../assets/bakery.jpg.jpg";
import craftsImg from "../assets/crafts.jpg.jpg";
import farmImg from "../assets/farm.jpg.jpg";
import coffeeImg from "../assets/coffee.jpg.jpg";
import soapImg from "../assets/soap.jpg.jpg";
import recordPlayerImg from "../assets/record-player.jpg.jpg";
import honeyImg from "../assets/honey.jpg.jpg";
import artImg from "../assets/art.jpg.jpg";
import furnitureImg from "../assets/furniture.jpg.jpg";
import cheeseImg from "../assets/cheese.jpg4.jpg";

import lavenderSoapImg from "../assets/lavendersoap.jpg";
import mintSoapImg from "../assets/mintsoap.jpg";
import charcoalSoapImg from "../assets/charcoalsoap.jpg";
import roseSoapImg from "../assets/rosesoap.jpg";
import aloeVeraSoapImg from "../assets/aloeverasoap.jpg";

import classicRecordPlayerImg from "../assets/classicrecordplayer.jpg";
import portableRecordPlayerImg from "../assets/portablerecordplayer.jpg";
import bluetoothRecordPlayerImg from "../assets/bluetoothrecordplayer.jpg";
import miniRecordPlayerImg from "../assets/minirecordplayer.jpg";
import modernRecordPlayerImg from "../assets/modernrecordplayer.jpg";

import wildflowerHoneyImg from "../assets/honey.jpg2.jpg";
import cloverHoneyImg from "../assets/honey.jpg3.jpg";
import rawHoneyImg from "../assets/honey.jpg.jpg";
import acaciaHoneyImg from "../assets/honey.jpg4.jpg";
import orangeBlossomHoneyImg from "../assets/honey-823614_1280.jpg";

import abstractArtPrintImg from "../assets/art.jpg.jpg";
import natureArtPrintImg from "../assets/natureart.jpg";
import modernArtPrintImg from "../assets/modernart.jpg";
import vintageArtPrintImg from "../assets/vintageart.jpg";
import minimalistArtPrintImg from "../assets/art.jpg2.jpg";

import rusticFurnitureImg from "../assets/furniture.jpg2.jpg";
import modernFurnitureImg from "../assets/furniture.jpg.jpg";
import classicFurnitureImg from "../assets/classicfurniture.jpg";
import ecoFurnitureImg from "../assets/furniture.jpg4.jpg";
import handcraftedFurnitureImg from "../assets/furniture.jpg3.jpg";

import goatCheeseImg from "../assets/cheese.jpg.jpg";
import agedCheddarImg from "../assets/cheese.jpg2.jpg";
import brieCheeseImg from "../assets/cheese.jpg3.jpg";
import blueCheeseImg from "../assets/bluecheese.jpg";
import parmesanCheeseImg from "../assets/parsmencheese.jpg";

import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const featuredBusinesses = [
  // Removed The Daily Crumb from homepage featured businesses
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

export const products = [
  // Main products
  {
    id: "p1",
    image: soapImg,
    title: "Handmade Soap",
    price: 12,
    business: "Soapery",
    category: "Bath",
    subcategory: "Soap",
    distance: 5,
  },
  {
    id: "p2",
    image: recordPlayerImg,
    title: "Vintage Record Player",
    price: 120,
    business: "Retro Sounds",
    category: "Electronics",
    subcategory: "Record Player",
    distance: 15,
  },
  {
    id: "p3",
    image: honeyImg,
    title: "Organic Honey",
    price: 20,
    business: "Bee Farm",
    category: "Food",
    subcategory: "Honey",
    distance: 12,
  },
  {
    id: "p4",
    image: artImg,
    title: "Local Art Print",
    price: 35,
    business: "Artisan Studio",
    category: "Art",
    subcategory: "Art Print",
    distance: 8,
  },
  {
    id: "p5",
    image: furnitureImg,
    title: "Upcycled Furniture",
    price: 200,
    business: "Eco Furnishings",
    category: "Furniture",
    subcategory: "Furniture",
    distance: 20,
  },
  {
    id: "p6",
    image: cheeseImg,
    title: "Artisan Cheese",
    price: 15,
    business: "Cheese Co.",
    category: "Food",
    subcategory: "Cheese",
    distance: 7,
  },
  // Subcategory products for Handmade Soap
  {
    id: "p7",
    image: lavenderSoapImg,
    title: "Lavender Soap",
    price: 14,
    business: "Soapery",
    category: "Bath",
    subcategory: "Soap",
    distance: 6,
  },
  {
    id: "p8",
    image: mintSoapImg,
    title: "Mint Soap",
    price: 13,
    business: "Soapery",
    category: "Bath",
    subcategory: "Soap",
    distance: 7,
  },
  {
    id: "p9",
    image: charcoalSoapImg,
    title: "Charcoal Soap",
    price: 15,
    business: "Soapery",
    category: "Bath",
    subcategory: "Soap",
    distance: 8,
  },
  {
    id: "p10",
    image: roseSoapImg,
    title: "Rose Soap",
    price: 16,
    business: "Soapery",
    category: "Bath",
    subcategory: "Soap",
    distance: 9,
  },
  {
    id: "p11",
    image: aloeVeraSoapImg,
    title: "Aloe Vera Soap",
    price: 17,
    business: "Soapery",
    category: "Bath",
    subcategory: "Soap",
    distance: 10,
  },
  // Subcategory products for Vintage Record Player
  {
    id: "p12",
    image: classicRecordPlayerImg,
    title: "Classic Record Player",
    price: 130,
    business: "Retro Sounds",
    category: "Electronics",
    subcategory: "Record Player",
    distance: 16,
  },
  {
    id: "p13",
    image: portableRecordPlayerImg,
    title: "Portable Record Player",
    price: 110,
    business: "Retro Sounds",
    category: "Electronics",
    subcategory: "Record Player",
    distance: 17,
  },
  {
    id: "p14",
    image: bluetoothRecordPlayerImg,
    title: "Bluetooth Record Player",
    price: 140,
    business: "Retro Sounds",
    category: "Electronics",
    subcategory: "Record Player",
    distance: 18,
  },
  {
    id: "p15",
    image: miniRecordPlayerImg,
    title: "Mini Record Player",
    price: 100,
    business: "Retro Sounds",
    category: "Electronics",
    subcategory: "Record Player",
    distance: 19,
  },
  {
    id: "p16",
    image: modernRecordPlayerImg,
    title: "Modern Record Player",
    price: 150,
    business: "Retro Sounds",
    category: "Electronics",
    subcategory: "Record Player",
    distance: 20,
  },
  // Subcategory products for Organic Honey
  {
    id: "p17",
    image: wildflowerHoneyImg,
    title: "Wildflower Honey",
    price: 22,
    business: "Bee Farm",
    category: "Food",
    subcategory: "Honey",
    distance: 13,
  },
  {
    id: "p18",
    image: cloverHoneyImg,
    title: "Clover Honey",
    price: 21,
    business: "Bee Farm",
    category: "Food",
    subcategory: "Honey",
    distance: 14,
  },
  {
    id: "p19",
    image: rawHoneyImg,
    title: "Raw Honey",
    price: 23,
    business: "Bee Farm",
    category: "Food",
    subcategory: "Honey",
    distance: 15,
  },
  {
    id: "p20",
    image: acaciaHoneyImg,
    title: "Acacia Honey",
    price: 24,
    business: "Bee Farm",
    category: "Food",
    subcategory: "Honey",
    distance: 16,
  },
  {
    id: "p21",
    image: orangeBlossomHoneyImg,
    title: "Orange Blossom Honey",
    price: 25,
    business: "Bee Farm",
    category: "Food",
    subcategory: "Honey",
    distance: 17,
  },
  // Subcategory products for Local Art Print
  {
    id: "p22",
    image: abstractArtPrintImg,
    title: "Abstract Art Print",
    price: 38,
    business: "Artisan Studio",
    category: "Art",
    subcategory: "Art Print",
    distance: 9,
  },
  {
    id: "p23",
    image: natureArtPrintImg,
    title: "Nature Art Print",
    price: 36,
    business: "Artisan Studio",
    category: "Art",
    subcategory: "Art Print",
    distance: 10,
  },
  {
    id: "p24",
    image: modernArtPrintImg,
    title: "Modern Art Print",
    price: 40,
    business: "Artisan Studio",
    category: "Art",
    subcategory: "Art Print",
    distance: 11,
  },
  {
    id: "p25",
    image: vintageArtPrintImg,
    title: "Vintage Art Print",
    price: 37,
    business: "Artisan Studio",
    category: "Art",
    subcategory: "Art Print",
    distance: 12,
  },
  {
    id: "p26",
    image: minimalistArtPrintImg,
    title: "Minimalist Art Print",
    price: 39,
    business: "Artisan Studio",
    category: "Art",
    subcategory: "Art Print",
    distance: 13,
  },
  // Subcategory products for Upcycled Furniture
  {
    id: "p27",
    image: rusticFurnitureImg,
    title: "Rustic Furniture",
    price: 210,
    business: "Eco Furnishings",
    category: "Furniture",
    subcategory: "Furniture",
    distance: 21,
  },
  {
    id: "p28",
    image: modernFurnitureImg,
    title: "Modern Furniture",
    price: 220,
    business: "Eco Furnishings",
    category: "Furniture",
    subcategory: "Furniture",
    distance: 22,
  },
  {
    id: "p29",
    image: classicFurnitureImg,
    title: "Classic Furniture",
    price: 230,
    business: "Eco Furnishings",
    category: "Furniture",
    subcategory: "Furniture",
    distance: 23,
  },
  {
    id: "p30",
    image: ecoFurnitureImg,
    title: "Eco Furniture",
    price: 240,
    business: "Eco Furnishings",
    category: "Furniture",
    subcategory: "Furniture",
    distance: 24,
  },
  {
    id: "p31",
    image: handcraftedFurnitureImg,
    title: "Handcrafted Furniture",
    price: 250,
    business: "Eco Furnishings",
    category: "Furniture",
    subcategory: "Furniture",
    distance: 25,
  },
  // Subcategory products for Artisan Cheese
  {
    id: "p32",
    image: goatCheeseImg,
    title: "Goat Cheese",
    price: 18,
    business: "Cheese Co.",
    category: "Food",
    subcategory: "Cheese",
    distance: 8,
  },
  {
    id: "p33",
    image: agedCheddarImg,
    title: "Aged Cheddar",
    price: 19,
    business: "Cheese Co.",
    category: "Food",
    subcategory: "Cheese",
    distance: 9,
  },
  {
    id: "p34",
    image: brieCheeseImg,
    title: "Brie Cheese",
    price: 20,
    business: "Cheese Co.",
    category: "Food",
    subcategory: "Cheese",
    distance: 10,
  },
  {
    id: "p35",
    image: blueCheeseImg,
    title: "Blue Cheese",
    price: 21,
    business: "Cheese Co.",
    category: "Food",
    subcategory: "Cheese",
    distance: 11,
  },
  {
    id: "p36",
    image: parmesanCheeseImg,
    title: "Parmesan Cheese",
    price: 22,
    business: "Cheese Co.",
    category: "Food",
    subcategory: "Cheese",
    distance: 12,
  },
];

const categories = ["Bath", "Electronics", "Food", "Art", "Furniture"];

const Home = () => {
  const [filters, setFilters] = useState({
    category: "",
    maxPrice: "",
    maxDistance: "",
  });
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [wishlistOnly, setWishlistOnly] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist") || "[]"));
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleSort = (e) => setSort(e.target.value);
  const handleWishlistToggle = () => setWishlistOnly((w) => !w);

  let filteredProducts = products.filter((product) => {
    const matchCategory =
      !filters.category || product.category === filters.category;
    const matchPrice =
      !filters.maxPrice || product.price <= Number(filters.maxPrice);
    const matchDistance =
      !filters.maxDistance || product.distance <= Number(filters.maxDistance);
    const matchSearch =
      (product.title || product.name || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (product.description || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (product.business || "").toLowerCase().includes(search.toLowerCase());
    const matchWishlist = !wishlistOnly || wishlist.includes(product.id);
    return (
      matchCategory &&
      matchPrice &&
      matchDistance &&
      matchSearch &&
      matchWishlist
    );
  });

  if (sort) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "distance") return a.distance - b.distance;
      if (sort === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });
  }

  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Breadcrumb or navigation for Product page */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline text-blue-600">
          Home
        </Link>
        <span>/</span>
        <Link to="/shop" className="hover:underline text-blue-600">
          Shop
        </Link>
        <span>/</span>
        <Link
          to="/product"
          className="hover:underline text-blue-600 font-semibold"
        >
          Product
        </Link>
      </nav>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-400 to-purple-500 text-white py-16 px-4 text-center relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to Local Finds
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Discover the best local businesses, products, and experiences in your
          community.
        </p>
        <button
          className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300 mb-4"
          onClick={() => navigate("/shops")}
        >
          Shop Local
        </button>
      </section>

      {/* Featured Local Businesses */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-4">Featured Local Businesses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {featuredBusinesses.map((biz) => (
            <Card
              key={biz.name}
              image={biz.image}
              title={biz.name}
              description={biz.tagline}
              className="hover:shadow-lg hover:scale-105 transition-transform duration-200"
              onClick={() => navigate(biz.categoryPath)}
            />
          ))}
        </div>
      </section>

      {/* Product Filter and Grid */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-4">Products Near You</h2>
        {/* Search, Filter, Sort, Wishlist Controls */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 items-stretch sm:items-end">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
            className="px-3 py-2 border rounded w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters((f) => ({ ...f, category: e.target.value }))
            }
            className="px-3 py-2 border rounded w-full sm:w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters((f) => ({ ...f, maxPrice: e.target.value }))
            }
            className="px-3 py-2 border rounded w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            min={0}
          />
          <select
            value={sort}
            onChange={handleSort}
            className="px-3 py-2 border rounded w-full sm:w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="distance">Distance: Nearest</option>
            <option value="rating">Rating: Highest</option>
          </select>
          <button
            type="button"
            onClick={handleWishlistToggle}
            className={`px-3 py-2 rounded border font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              wishlistOnly
                ? "bg-pink-100 text-pink-600 border-pink-300"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {wishlistOnly ? "View All" : "View Wishlist"}
          </button>
        </div>
        <ProductFilter categories={categories} onFilterChange={setFilters} />
        <div className="mb-2 text-sm text-gray-600">
          {filteredProducts.length} products found
        </div>
        <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
          {filteredProducts
            .filter((p) => ["p1", "p2", "p3", "p4", "p5", "p6"].includes(p.id))
            .map((product) => (
              <div
                key={product.id}
                className="min-w-[260px] max-w-xs flex-shrink-0 transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
              >
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </section>

      {/* Discover More Local Treasures */}
      <section className="my-20 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Discover More Local Treasures
        </h2>
        <p className="mb-6 text-gray-600">
          Browse through a wide range of unique products from local businesses
          in your area.
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => navigate("/product")}
        >
          Explore All Products
        </button>
      </section>
    </div>
  );
};

export default Home;

// ProductListPage for /product route
// import ProductGrid from "./ProductGrid";
// import ProductDetailModal from "./ProductDetailModal";

export const ProductListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  // All products
  const allProducts = products;

  // Featured businesses and their main product IDs
  const featuredBusinessData = [
    {
      business: "Soapery",
      businessCard: featuredBusinesses.find(
        (b) => b.name === "The Corner Bakery"
      ),
      mainProductId: "p1",
    },
    {
      business: "Retro Sounds",
      businessCard: featuredBusinesses.find(
        (b) => b.name === "Crafted by Hand"
      ),
      mainProductId: "p2",
    },
    {
      business: "Bee Farm",
      businessCard: featuredBusinesses.find(
        (b) => b.name === "Green Valley Farms"
      ),
      mainProductId: "p3",
    },
    {
      business: "Artisan Studio",
      businessCard: featuredBusinesses.find(
        (b) => b.name === "Brewed Awakening"
      ),
      mainProductId: "p4",
    },
    {
      business: "Eco Furnishings",
      businessCard: null, // Not shown as a featured business card
      mainProductId: "p5",
    },
    {
      business: "Cheese Co.",
      businessCard: null, // Not shown as a featured business card
      mainProductId: "p6",
    },
  ];

  // Filter products by name or description
  const filteredProducts = allProducts.filter(
    (product) =>
      (product.name || product.title || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (product.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Products & Featured Businesses Near You
      </h1>
      {/* Featured Businesses Row */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-4">Featured Local Businesses</h2>
        <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
          {featuredBusinessData
            .filter((fb) => fb.businessCard)
            .map((fb) => (
              <div
                key={fb.business}
                className="min-w-[260px] max-w-xs flex-shrink-0"
              >
                <Card
                  image={fb.businessCard.image}
                  title={fb.businessCard.name}
                  description={fb.businessCard.tagline}
                  className="hover:shadow-lg hover:scale-105 transition-transform duration-200"
                  onClick={() => navigate(fb.businessCard.categoryPath)}
                  footer={
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                      Featured Business
                    </span>
                  }
                />
              </div>
            ))}
        </div>
      </section>
      {/* Subcategory Products for Each Featured Business */}
      {featuredBusinessData.map((fb) => {
        const businessProducts = allProducts.filter(
          (p) => p.business === fb.business
        );
        if (businessProducts.length === 0) return null;
        return (
          <section className="mb-14" key={fb.business + "-products"}>
            <h2 className="text-xl font-bold mb-4">{fb.business} Products</h2>
            <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
              {businessProducts.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[260px] max-w-xs flex-shrink-0 transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleProductClick(product)}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
      {/* Search and All Products Grid */}
      <div className="mb-6">
        <SearchBar
          onSearch={setSearchTerm}
          placeholder="Search products by name or description..."
        />
      </div>
      <div className="mb-2 text-sm text-gray-600">
        {filteredProducts.length} products found
      </div>
      <ProductGrid
        products={filteredProducts}
        onProductClick={handleProductClick}
      />
      <ProductDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
};
