import React from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./components/Home";
import Orders from "./pages/Orders";
import { useNavigate, Routes, Route } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Product", href: "" }, // current page, no href
];

function App() {
  const navigate = useNavigate();
  const handleSearch = (query) => {
    if (query.toLowerCase().includes("daily crumb")) {
      navigate("/business");
    }
    // You can add more search logic for other businesses here
  };
  return (
    <Layout navLinks={navLinks} onSearch={handleSearch}>
      <Navbar navLinks={navLinks} />
      <Breadcrumb items={breadcrumbItems} />
      <Routes>
        {/* ...other routes... */}
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Home />
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome to LocalFinds!</h1>
      </div>
    </Layout>
  );
}

export default App;
