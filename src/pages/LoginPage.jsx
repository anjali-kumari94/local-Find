import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const gradientBg =
  "bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex items-center justify-center";
const cardStyle = "bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto";
const inputStyle =
  "w-full border border-gray-300 rounded px-4 py-3 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base";
const buttonStyle =
  "w-full py-3 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition mb-2";
const linkStyle = "text-blue-500 hover:underline cursor-pointer";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const registered = params.get("registered");

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Enter a valid email.";
    if (!form.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setApiError("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
          credentials: "include",
        }
      );
      const data = await response.json();
      if (response.ok && data.success) {
        const user = data.data.user;
        const token = data.data.token;
        login(user); // Save user in context/localStorage
        // Optionally: localStorage.setItem('token', token);
        navigate("/");
      } else {
        setApiError(data.message || "Login failed");
      }
    } catch (err) {
      setApiError("Network error. Please try again.");
    }
  };

  return (
    <div className={gradientBg}>
      <div className={cardStyle}>
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">
          Please sign in to your account
        </p>
        {registered && (
          <div className="text-green-600 text-sm mb-2">
            Registration successful! Please log in.
          </div>
        )}
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            className={inputStyle}
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="text-red-500 text-sm mb-2">{errors.email}</div>
          )}

          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            className={inputStyle}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="text-red-500 text-sm mb-2">{errors.password}</div>
          )}

          <button type="submit" className={buttonStyle}>
            Sign In
          </button>
          {apiError && (
            <div className="text-red-500 text-sm mb-2">{apiError}</div>
          )}
        </form>
        <div className="text-center mt-2">
          <a className="text-blue-400 text-sm hover:underline" href="#">
            Forgot your password?
          </a>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-500">Don't have an account? </span>
          <span className={linkStyle} onClick={() => navigate("/signup")}>
            Create one
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


