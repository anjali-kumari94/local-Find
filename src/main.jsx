import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductDetails from "./components/ProductDetails"; // (to be created)
import Categories from "./components/Categories";
import CategoriesBakery from "./components/CategoriesBakery";
import CategoriesFarm from "./components/CategoriesFarm";
import CategoriesCoffee from "./components/CategoriesCoffee";
import Shops from "./components/Shops";
import BusinessProfile from "./pages/BusinessProfile";
import BusinessProfileCornerBakery from "./pages/BusinessProfileCornerBakery";
import BusinessProfileCraftedByHand from "./pages/BusinessProfileCraftedByHand";
import BusinessProfileGreenValleyFarms from "./pages/BusinessProfileGreenValleyFarms";
import BusinessProfileBrewedAwakening from "./pages/BusinessProfileBrewedAwakening";
import Cart from "./pages/Cart";
import ProductsNearYou from "./components/ProductsNearYou";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import { ProductListPage } from "./components/Home";
import ContactPage from "./pages/ContactPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Orders from "./pages/Orders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/crafts" element={<Categories />} />
            <Route path="/categories/bakery" element={<CategoriesBakery />} />
            <Route path="/categories/farm" element={<CategoriesFarm />} />
            <Route path="/categories/coffee" element={<CategoriesCoffee />} />
            <Route path="/shop" element={<Shops />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/business" element={<BusinessProfile />} />
            <Route
              path="/business/corner-bakery"
              element={<BusinessProfileCornerBakery />}
            />
            <Route
              path="/business/crafted-by-hand"
              element={<BusinessProfileCraftedByHand />}
            />
            <Route
              path="/business/green-valley-farms"
              element={<BusinessProfileGreenValleyFarms />}
            />
            <Route
              path="/business/brewed-awakening"
              element={<BusinessProfileBrewedAwakening />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products-near-you" element={<ProductsNearYou />} />
            <Route path="/product" element={<ProductListPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </ProductProvider>
);
