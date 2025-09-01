import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Package, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems, orders } = useCart();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-orange-200 shadow-lg sticky top-0 z-50 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-2">

          <Link to="/" className="flex items-center space-x-2">
            <img
              src={`${import.meta.env.BASE_URL}general/DS-Logo.png`}
              alt="Dream Spot Logo"
              className="h-14 object-contain"
            />
            <h1
              className="text-2xl md:text-3xl text-orange-500"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              Dream Spot
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 ml-auto mr-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-orange-600 ${
                  location.pathname === item.path
                    ? "text-orange-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons + Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <Link
              to="/orders"
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <Package className="w-6 h-6 text-gray-600" />
              {orders.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {orders.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top duration-200 rounded-b-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 hover:text-orange-600 ${
                    location.pathname === item.path
                      ? "text-orange-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
