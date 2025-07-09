import React from "react";

const Breadcrumb = ({ items = [] }) => (
  <nav className="text-sm mb-4" aria-label="Breadcrumb">
    <ol className="flex flex-wrap items-center space-x-2">
      {items.map((item, idx) => (
        <li key={item.href || item.label} className="flex items-center">
          {idx > 0 && <span className="mx-1 text-gray-400">/</span>}
          {idx < items.length - 1 ? (
            <a href={item.href} className="text-blue-600 hover:underline">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-500" aria-current="page">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
