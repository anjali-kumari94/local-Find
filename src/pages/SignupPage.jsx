import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const gradientBg =
  "bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex items-center justify-center";
const cardStyle = "bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto";
const inputStyle =
  "w-full border border-gray-300 rounded px-4 py-3 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base";
const buttonStyle =
  "w-full py-3 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition mb-2";
const linkStyle = "text-blue-500 hover:underline cursor-pointer";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Enter a valid email.";
    if (!form.password) newErrors.password = "Password is required.";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm your password.";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
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
    // Only send name, email, and password to the backend
    const { name, email, password } = form;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();
      if (response.ok && data.success) {
        navigate("/login?registered=1");
      } else {
        setErrors({ api: data.message || "Registration failed" });
      }
    } catch (err) {
      setErrors({ api: "Network error. Please try again." });
    }
  };

  return (
    <div className={gradientBg}>
      <div className={cardStyle}>
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-6">Sign up to get started</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            className={inputStyle}
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="text-red-500 text-sm mb-2">{errors.name}</div>
          )}

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

          <label className="block font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className={inputStyle}
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 text-sm mb-2">
              {errors.confirmPassword}
            </div>
          )}

          <button type="submit" className={buttonStyle}>
            Create Account
          </button>
        </form>
        <div className="text-center mt-2">
          <span className="text-gray-500">Already have an account? </span>
          <span className={linkStyle} onClick={() => navigate("/login")}>
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

