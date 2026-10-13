import React, { useState } from 'react';
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";



export default function Navbar() {

  return (
  <header className="bg-blue-300 shadow-md fixed top-0 left-0 w-full z-50">
  <nav className="max-w-[1400px] mx-auto px-6 h-[70px] flex justify-between items-center">

    {/* Logo */}
    <a href="#" className="text-xl font-bold">
      Smart<span className="text-orange-500">P</span>harma
    </a>

    {/* Menu */}
    <ul className="flex gap-8 text-gray-800 font-medium">
      <li><a href="#" className="hover:text-blue-700">Home</a></li>
      <li><a href="#" className="hover:text-blue-700">About Us</a></li>
      <li><a href="#" className="hover:text-blue-700">Process</a></li>
      <li><a href="#" className="hover:text-blue-700">Contact Us</a></li>
    </ul>

    {/* Right Side */}
    <div className="flex items-center gap-x-5">

      <div className="flex items-center border-2 border-orange-500 rounded-full overflow-hidden bg-white w-full max-w-md">
        <input
          type="text"
          placeholder="Search... Pharmacy"
          autoComplete="off"
          className="flex-1 px-4 py-2 outline-none"
        />
        <button className="bg-orange-500 text-white px-4 py-3 flex items-center justify-center hover:bg-orange-600 transition">
          <FaSearchPlus className="text-xl" />
        </button>
      </div>

      <a href="#" className="text-2xl font-bold">
        <FaHandHoldingHeart />
      </a>

      <a href="#" className="text-2xl font-bold">
        <FaShoppingBag />
      </a>

    </div>

  </nav>
</header>
  );
}