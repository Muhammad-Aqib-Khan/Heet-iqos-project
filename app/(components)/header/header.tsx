"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import CartItem from "../productcard/cartitems";

const Header = () => {
  const [isSecondaryMobileMenuOpen, setIsSecondaryMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    {
      title: "IQOS HEETS DUBAI, UAE",
      isActive: false,
      items: [
        { label: "HEETS Classic", url: "/heets-classic" },
        { label: "IQOS ORIGINALS DUO", url: "/originals-duo" },
        { label: "IQOS ORIGINALS ONE", url: "/originals-one" },
        { label: "IQOS LIL SOLID EZ", url: "/lil-solid-ez" },
        { label: "IQOS LIL SOLID 2.0", url: "/lil-solid-2" },
        { label: "LAMDA CC", url: "/lamda-cc" }
      ]
    },
    {
      title: "IQOS TEREA DUBAI, UAE",
      isActive: false,
      items: [
        { label: "TEREA KAZAKHSTAN", url: "/iqostereakazakhstan" },
        { label: "TEREA INDONESIA", url: "/terea-indonesia" }
      ]
    },
    {
      title: "IQOS ILUMA DUBAI, UAE",
      isActive: true,
      items: [
        { label: "IQOS ILUMA Prime", url: "/iluma-prime" },
        { label: "IQOS ILUMA", url: "/iluma" },
        { label: "IQOS ILUMA One", url: "/iluma-one" },
        { label: "LAMBDA I8", url: "/lambda-i8" }
      ]
    }
  ];

  return (
    <div className="w-full relative">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full" />
                </div>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">IQOS HEETS DUBAI</h1>
            </div>
          </div>

          <nav className="hidden xl:flex items-center space-x-6 flex-1 justify-center">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className={`flex items-center space-x-1 text-sm font-medium py-6 transition-colors ${
                    item.isActive
                      ? 'text-red-500 border-b-2 border-red-500'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.url}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <CartItem />
            <button
              onClick={() => setIsSecondaryMobileMenuOpen(!isSecondaryMobileMenuOpen)}
              className="lg:hidden"
            >
              {isSecondaryMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
