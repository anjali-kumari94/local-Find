import React from "react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-8 mt-12">
    <div className="max-w-4xl mx-auto text-center px-4">
      <div className="mb-2 font-semibold text-2xl drop-shadow">
        LocalFinds &copy; {new Date().getFullYear()}
      </div>
      <div className="text-white/90 text-lg mb-2 font-medium">
        Discover unique handmade crafts and support local artisans in your
        community. Shopping with us means every purchase helps small businesses
        grow and thrive.
      </div>
      <div className="text-white/80 text-base">
        Enjoy a seamless shopping experience, fast delivery, and a curated
        selection of one-of-a-kind products. Thank you for choosing LocalFinds
        to connect with passionate makers and creative entrepreneurs!
      </div>
    </div>
  </footer>
);

export default Footer;
