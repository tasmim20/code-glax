"use client";

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when clicking outside the sidebar
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar-menu");
      if (isOpen && sidebar && !sidebar.contains(event.target as Node)) {
        handleCloseMenu();
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="bg-gradient-to-r relative from-[rgba(27,28,54,0.16)] to-[rgba(112,113,122,0.16)] backdrop-blur-md text-white w-full container rounded-lg mx-auto px-6 lg:mt-4 md:mt-4 sm:mt-0 flex justify-between items-center">
        {/* Left Section (Logo) */}
        <div className="flex items-center">logo</div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>Menu</button>
        </div>

        {/* Center Section (Nav Links - hidden on mobile) */}
        <div className={`hidden md:flex space-x-4 sm:space-x-6 lg:space-x-8`}>
          {navItems.map((item, index) => (
            <a
              key={item.label + index}
              href={item.href}
              className="relative group text-sm uppercase sm:text-base lg:text-sm  transition duration-300"
            >
              {item.label}
              {/* Add underline animation */}
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-[#090EDB] rounded-full to-[#8D1EA2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* Right Section (Buttons - visible on all screens) */}
        <div className="hidden md:flex space-x-2 sm:space-x-4">
          <button className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-6 py-2 my-2 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 text-white">
            Contact Us
          </button>
        </div>
      </div>

      {/* Sliding Mobile Menu (visible when toggled) */}
      {isOpen && (
        <>
          {/* Overlay behind the sidebar */}
          <div className="fixed inset-0 z-40" onClick={handleCloseMenu}></div>

          {/* Sidebar */}
          <div
            id="sidebar-menu"
            className={`fixed top-0 mt-10 left-0 h-3/4 w-64 bg-gradient-to-r from-[#70717A] to-transparent bg-opacity-90 shadow-slate-500 rounded-lg shadow-lg backdrop-blur-md px-4 py-8 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-500 ease-in-out z-50 flex flex-col space-y-5`}
          >
            {navItems.map((item, index) => (
              <a
                key={item.href + index}
                href={item.href}
                className="text-white hover:text-yellow-300 transition duration-300 text-lg"
                onClick={toggleMenu} // Close menu after click
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-4">
              <button className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-6 py-2 my-2 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 text-white">
                Contact Us
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
