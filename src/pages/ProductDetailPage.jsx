import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../mockData.js";
import { CartContext } from "../context/CartContext.jsx";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => String(p.id) === String(productId));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg mt-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-80 object-cover rounded-lg border"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <div className="text-xl font-semibold mb-4">${product.price}</div>
        </div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
