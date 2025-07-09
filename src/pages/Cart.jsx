import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

const steps = [
  { label: "Review Order" },
  { label: "Payment" },
  { label: "Confirmation" },
];

// Helper to safely parse JSON
function safeParse(json, fallback = []) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    itemCount,
    clearCart,
  } = useCart();
  const [currentStep, setCurrentStep] = useState(0);

  // Payment form state (always defined, only used in step 1)
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    phone: "",
    paymentMethod: "card", // 'card' or 'cod'
    cardName: "",
    card: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  // Add a state to track if the order is placed
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Example shipping/tax logic
  const shipping = cartItems.length > 0 ? 5.0 : 0;
  const taxes =
    cartItems.length > 0 ? Math.round(totalPrice * 0.063 * 100) / 100 : 0;
  const grandTotal = (totalPrice + shipping + taxes).toFixed(2);

  // Stepper UI
  const Stepper = () => (
    <div className="flex border-b mb-8 mt-2">
      {steps.map((step, idx) => (
        <button
          key={step.label}
          className={`px-6 py-2 font-medium focus:outline-none border-b-2 transition-colors duration-200 ${
            currentStep === idx
              ? "border-black text-black"
              : "border-transparent text-gray-400 hover:text-black"
          }`}
          onClick={() => setCurrentStep(idx)}
          disabled={currentStep === idx}
        >
          {step.label}
        </button>
      ))}
    </div>
  );

  // Payment form handlers (always defined)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.address.trim()) newErrors.address = "Address is required.";
    if (!form.city.trim()) newErrors.city = "City is required.";
    if (!form.pincode.trim() || !/^\d{5,6}$/.test(form.pincode))
      newErrors.pincode = "Valid pincode required.";
    if (!form.state.trim()) newErrors.state = "State is required.";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))
      newErrors.phone = "Valid 10-digit phone required.";
    if (form.paymentMethod === "card") {
      if (!form.cardName.trim())
        newErrors.cardName = "Name on card is required.";
      if (!/^\d{16}$/.test(form.card.replace(/\s/g, "")))
        newErrors.card = "Card number must be 16 digits.";
      if (!/^\d{2}\/\d{2}$/.test(form.expiry))
        newErrors.expiry = "Expiry must be MM/YY.";
      if (!/^\d{3,4}$/.test(form.cvv))
        newErrors.cvv = "CVV must be 3 or 4 digits.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setOrderPlaced(true); // Mark order as placed
      setCurrentStep(2);
      // --- Save order to localStorage ---
      const order = {
        id: Date.now(),
        customerName: form.name,
        items: cartItems.map(
          (item) => `${item.title || item.name} x${item.quantity}`
        ),
        total: Number(grandTotal),
        status: "Pending",
        date: new Date().toISOString().slice(0, 10),
        address: form.address,
        city: form.city,
        pincode: form.pincode,
        state: form.state,
        phone: form.phone,
        paymentMethod: form.paymentMethod,
      };
      const prevOrders = safeParse(localStorage.getItem("orders"), []);
      localStorage.setItem("orders", JSON.stringify([order, ...prevOrders]));
      clearCart();
    }, 1200); // Simulate payment processing
  };

  // Step Content
  const renderStepContent = () => {
    if (currentStep === 0) {
      // Review Order
      return (
        <>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500">
              Your cart is empty.
              <br />
              <Link to="/" className="text-blue-600 hover:underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="divide-y border rounded-lg bg-white shadow mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4">
                    <img
                      src={item.image || item.images?.[0]}
                      alt={item.title || item.name}
                      className="w-16 h-16 rounded border object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium">
                        {item.title || item.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        ${item.price} each
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          className="px-2 py-1 border rounded hover:bg-gray-100"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          className="px-2 py-1 border rounded hover:bg-gray-100"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="ml-4 text-red-500 hover:underline text-xs"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                  <span>Total</span>
                  <span>${grandTotal}</span>
                </div>
                <button
                  className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-900 transition font-semibold text-lg"
                  onClick={() => setCurrentStep(1)}
                >
                  Proceed to Payment
                </button>
                <button
                  className="w-full mt-2 text-red-500 hover:underline text-sm"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </>
      );
    }
    if (currentStep === 1) {
      // Payment
      return (
        <form
          className="bg-white rounded-lg shadow p-8 max-w-md mx-auto"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h2 className="text-xl font-bold mb-6 text-center">
            Delivery & Payment
          </h2>
          {/* Address Fields */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Full Name"
            />
            {errors.name && (
              <div className="text-red-500 text-xs mt-1">{errors.name}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Street Address"
            />
            {errors.address && (
              <div className="text-red-500 text-xs mt-1">{errors.address}</div>
            )}
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="City"
              />
              {errors.city && (
                <div className="text-red-500 text-xs mt-1">{errors.city}</div>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                  errors.pincode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Pincode"
                maxLength={6}
              />
              {errors.pincode && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.pincode}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                  errors.state ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="State"
              />
              {errors.state && (
                <div className="text-red-500 text-xs mt-1">{errors.state}</div>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="10-digit phone"
                maxLength={10}
              />
              {errors.phone && (
                <div className="text-red-500 text-xs mt-1">{errors.phone}</div>
              )}
            </div>
          </div>
          {/* Payment Method */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Payment Method</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={form.paymentMethod === "card"}
                  onChange={handleChange}
                />
                Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={form.paymentMethod === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          {/* Card Fields (only if Card is selected) */}
          {form.paymentMethod === "card" && (
            <>
              <div className="mb-4">
                <label className="block font-medium mb-1">Name on Card</label>
                <input
                  type="text"
                  name="cardName"
                  value={form.cardName}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                    errors.cardName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Full Name"
                />
                {errors.cardName && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.cardName}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Card Number</label>
                <input
                  type="text"
                  name="card"
                  value={form.card}
                  onChange={handleChange}
                  maxLength={16}
                  className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                    errors.card ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="1234 5678 9012 3456"
                  inputMode="numeric"
                />
                {errors.card && (
                  <div className="text-red-500 text-xs mt-1">{errors.card}</div>
                )}
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="block font-medium mb-1">Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    maxLength={5}
                    className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                      errors.expiry ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="MM/YY"
                  />
                  {errors.expiry && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.expiry}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block font-medium mb-1">CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    maxLength={4}
                    className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
                      errors.cvv ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="123"
                    inputMode="numeric"
                  />
                  {errors.cvv && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.cvv}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition font-semibold text-lg disabled:opacity-60"
            disabled={submitting}
          >
            {submitting
              ? form.paymentMethod === "card"
                ? "Processing..."
                : "Placing Order..."
              : form.paymentMethod === "card"
              ? "Pay Now"
              : "Place Order"}
          </button>
        </form>
      );
    }
    // Confirmation step
    if (currentStep === 2) {
      return (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-xl font-bold mb-4">Confirmation</h2>
          {orderPlaced ? (
            <>
              <p className="text-green-600 font-semibold mb-4">
                Thank you for your order!
              </p>
              <p className="text-gray-500">
                Your order has been placed successfully. You will receive a
                confirmation email shortly.
              </p>
              <Link
                to="/"
                className="inline-block mt-6 text-blue-600 hover:underline font-medium"
              >
                Back to Home
              </Link>
            </>
          ) : (
            <p className="text-gray-500">
              Complete your order to see confirmation.
            </p>
          )}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        navLinks={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: "My Orders", href: "/orders" },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Shopping Cart", href: "/cart" },
            { label: "Checkout" },
          ]}
        />
        <h1 className="text-3xl font-bold mb-2">Checkout</h1>
        <Stepper />
        <div className="mt-8">{renderStepContent()}</div>
      </div>
    </div>
  );
};

export default Cart;
