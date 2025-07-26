"use client"
import React, { useState } from 'react';
import { Search, Heart, User, ChevronDown, Menu, X } from 'lucide-react';
import CartItem from '../productcard/cartitems';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecondaryMobileMenuOpen, setIsSecondaryMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

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
        { label: "TEREA KAZAKHSTAN", url: "/iqostereakazakhstan"},
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

  const popularSearches = [
    'IQOS 3',
    'IQOS MULTI',
    'IQOS 2.4',
    'HEETS UAE',
    'HEETS DUBAI',
    'HEETS ABU DHABI',
    'IQOS LIL',
    'IQOS 3 DUO'
  ];

  return (
    <div className="w-full relative">
      {/* ...Top header (unchanged) */}
      <header className="bg-black text-white">
        {/* ...Header Content */}
        {/* (Omitted here for brevity — keep your existing header content) */}
      </header>

      {/* Secondary Header - Brand Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                  </div>
                </div>
                <h1 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold text-gray-800 truncate">
                  IQOS HEETS DUBAI
                </h1>
              </div>
            </div>

            {/* Navigation Menu - Desktop */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 flex-1 justify-center">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className={`flex items-center space-x-1 text-xs 2xl:text-sm font-medium transition-colors py-6 ${
                      item.isActive 
                        ? 'text-red-500 hover:text-red-600 border-b-2 border-red-500' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.title}</span>
                    <ChevronDown className="w-3 h-3 2xl:w-4 2xl:h-4 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.items.map((subItem, subIndex) => (
                        <a 
                          key={subIndex}
                          href={subItem.url} 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Compact desktop nav */}
            <nav className="hidden lg:flex xl:hidden items-center space-x-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className={`flex items-center space-x-1 text-xs font-medium transition-colors py-6 ${
                      item.isActive 
                        ? 'text-red-500 hover:text-red-600 border-b-2 border-red-500' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    <span className="truncate max-w-24">{item.title.split(',')[0]}</span>
                    <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                  </button>
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.items.map((subItem, subIndex) => (
                        <a 
                          key={subIndex}
                          href={subItem.url} 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <CartItem />
              <button 
                onClick={() => setIsSecondaryMobileMenuOpen(!isSecondaryMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors"
              >
                {isSecondaryMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Secondary Nav */}
          {isSecondaryMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <div className="px-3 py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className={`flex items-center justify-between w-full text-left text-sm font-medium transition-colors py-2 ${
                        item.isActive 
                          ? 'text-red-500' 
                          : 'text-gray-700 hover:text-black'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === index && (
                      <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                        {item.items.map((subItem, subIndex) => (
                          <a 
                            key={subIndex}
                            href={subItem.url} 
                            className="block text-sm text-gray-600 hover:text-black transition-colors py-1"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Overlay (unchanged) */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6">
            <div className="relative">
              <div className="flex items-center">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-3 sm:mr-4 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="SEARCH KEYWORD"
                  className="flex-1 text-base sm:text-lg text-gray-600 placeholder-gray-400 border-none outline-none bg-transparent"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors sm:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-0 left-8 sm:left-10 right-0 h-px bg-gray-300"></div>
            </div>

            {/* Popular Searches */}
            <div className="mt-4 sm:mt-6">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <span className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-0 sm:mr-4 flex-shrink-0">
                  POPULAR SEARCHES:
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
