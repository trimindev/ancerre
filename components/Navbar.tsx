"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Hiển thị navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Vị trí cuộn cuối cùng

  // Xử lý sự kiện cuộn
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Ẩn navbar khi cuộn xuống và hiện lại khi cuộn lên
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false); // Cuộn xuống -> Ẩn navbar
    } else if (currentScrollY <= 50) {
      setIsVisible(true); // Cuộn lên đầu trang -> Hiện navbar
    }

    setLastScrollY(currentScrollY); // Cập nhật vị trí cuộn
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`z-50 fixed top-0 w-full transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-2xl  mx-auto">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="relative bg-white bg-opacity-80 rounded-br-sm h-full w-36">
            <Image
              src="/image/logo.png"
              alt="Logo"
              fill={true}
              className="object-contain p-1"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden bg-opacity-80 rounded-bl-sm text-neutral-700 font-americana md:flex items-center px-6 space-x-8 bg-white h-full">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#product">Product</a>
            <a href="#collection">Collection</a>
            <a href="#contact">Contact</a>
          </div>

          {/* <div className="w-40 bg-white h-full"></div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
