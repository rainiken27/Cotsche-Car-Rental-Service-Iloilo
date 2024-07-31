// src/components/ContactOverlay.js

import React from "react";

const Overlay = ({ onClose }) => {
  return (
    <div className="fixed inset-32 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="relative bg-white p-8 rounded-md text-center w-80 shadow-lg">
        <button
          className="absolute top-2 right-2 text-blue-500 hover:text-gray-800 transition duration-300"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl mb-4 text-black font-semibold">Contact Us</h2>
        <p className="mb-4 text-black">Phone: 
        0961 682 9964</p>
        <a
          href="https://www.facebook.com/bestcarrentaliloilo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition duration-300"
        >
          Facebook Page
        </a>
      </div>
    </div>
  );
};

export default Overlay;