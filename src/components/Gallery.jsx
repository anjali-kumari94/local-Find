import React from "react";

const Gallery = ({ images, className, imgProps }) => (
  <div className="gallery w-full h-full flex items-center justify-center">
    {images.length > 0 && (
      <img
        src={images[0]}
        alt="Product image"
        className={
          className
            ? className + " object-cover rounded shadow transition-transform"
            : "w-full h-full object-cover rounded shadow transition-transform"
        }
        style={{ minHeight: 0, minWidth: 0 }}
        {...imgProps}
      />
    )}
  </div>
);

export default Gallery;
