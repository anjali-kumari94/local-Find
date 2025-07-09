import React from "react";

const Card = ({
  image,
  title,
  description,
  price,
  actions,
  footer,
  children,
  className = "",
  onClick,
}) => (
  <div
    className={`bg-white rounded-xl shadow-md flex flex-col items-center p-4 transition hover:shadow-lg ${className} ${
      onClick ? "cursor-pointer" : ""
    }`}
    onClick={onClick}
    tabIndex={onClick ? 0 : undefined}
    role={onClick ? "button" : undefined}
  >
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
    )}
    <h3 className="font-semibold text-base text-center mb-1">{title}</h3>
    <p className="text-gray-500 text-xs text-center mb-2">{description}</p>
    {price !== undefined && (
      <div className="text-blue-600 font-semibold mb-2">
        ${price.toFixed(2)}
      </div>
    )}
    {children}
    {actions && <div className="flex gap-2 mt-2">{actions}</div>}
    {footer && <div className="mt-2">{footer}</div>}
  </div>
);

export default Card;
