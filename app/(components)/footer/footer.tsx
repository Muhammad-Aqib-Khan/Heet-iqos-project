"use client"
import React, { useState } from 'react';
import { Package, RotateCcw, Award, ChevronDown, Mail, Phone, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const footerSections = {
    products: {
      title: "PRODUCTS",
      links: [
        "IQOS TEREA KAZAKHSTAN",
        "IQOS TEREA INDONESIA", 
        "IQOS HEETS",
        "IQOS ILUMA PRIME KIT",
        "IQOS ILUMA KIT",
        "LAMBDA I8 (TEREA)",
        "IQOS ILUMA ONE KIT",
        "IQOS ORIGINALS DUO",
        "IQOS ORIGINALS ONE",
        "IQOS LIL SOLID EZ",
        "IQOS LIL SOLID 2.0",
        "LAMBDA CC (HEETS)"
      ]
    },
    shop: {
      title: "IQOS SHOP",
      links: [
        "IQOS DUBAI UAE",
        "IQOS HEETS",
        "IQOS TEREA", 
        "IQOS ILUMA KITS",
        "IQOS ORIGINALS DUO",
        "IQOS ORIGINALS ONE"
      ]
    },
    support: {
      title: "SUPPORT",
      links: [
        "SHIPPING & DELIVERY",
        "REFUND POLICY",
        "TERMS OF USE",
        "PRIVACY POLICY",
        "CONTACT"
      ]
    },
    connect: {
      title: "CONNECT WITH US",
      info: [
        { 
          icon: Mail,
          label: "EMAIL:", 
          value: "infoheetsiqosuaestore@gmail.com", 
          type: "email",
          href: "mailto:infoheetsiqosuaestore@gmail.com"
        },
        { 
          icon: Clock,
          label: "HOURS:", 
          value: "SUN-SAT 11AM-10PM", 
          type: "text"
        },
        { 
          icon: MapPin,
          label: "DELIVERY:", 
          value: "UNITED ARAB EMIRATES", 
          type: "text"
        },
        { 
          icon: Phone,
          label: "WHATSAPP:", 
          value: "+971 50 801 6258", 
          type: "phone",
          href: "tel:+971508016258"
        }
      ]
    }
  };

  const features = [
    {
      icon: Package,
      title: "FREE DELIVERY",
      subtitle: "AED 280+ ORDERS"
    },
    {
      icon: RotateCcw,
      title: "RETURN POLICY", 
      subtitle: "2 DAYS REPLACEMENT ON DEVICES ONLY"
    },
    {
      icon: Award,
      title: "GUARANTEE",
      subtitle: "100% GENUINE PRODUCT"
    }
  ];

  return (
    <footer className="bg-white">
      {/* Features Banner */}
      <div className="bg-gradient-to-r from-red-400 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-4 sm:py-5 lg:py-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center sm:justify-start space-x-3 lg:space-x-4 p-2 sm:p-0">
                <div className="flex-shrink-0 p-2 bg-white bg-opacity-20 rounded-lg">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-sm sm:text-base lg:text-lg leading-tight">
                    {feature.title}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base opacity-90 leading-tight mt-0.5">
                    {feature.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Footer Content */}
      <div className="hidden lg:block bg-gray-50 py-12 xl:py-16">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-4 gap-8 xl:gap-12">
            
            {/* Products Section */}
            <div className="space-y-6">
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 uppercase tracking-wide border-b-2 border-red-400 pb-2 inline-block">
                {footerSections.products.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.products.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm xl:text-base text-gray-600 hover:text-red-500 hover:translate-x-1 transition-all duration-300 block py-1 group"
                    >
                      <span className="group-hover:border-b group-hover:border-red-500">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* IQOS Shop Section */}
            <div className="space-y-6">
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 uppercase tracking-wide border-b-2 border-red-400 pb-2 inline-block">
                {footerSections.shop.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.shop.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm xl:text-base text-gray-600 hover:text-red-500 hover:translate-x-1 transition-all duration-300 block py-1 group"
                    >
                      <span className="group-hover:border-b group-hover:border-red-500">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="space-y-6">
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 uppercase tracking-wide border-b-2 border-red-400 pb-2 inline-block">
                {footerSections.support.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.support.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm xl:text-base text-gray-600 hover:text-red-500 hover:translate-x-1 transition-all duration-300 block py-1 group"
                    >
                      <span className="group-hover:border-b group-hover:border-red-500">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Us Section */}
            <div className="space-y-6">
              <h3 className="text-lg xl:text-xl font-bold text-gray-900 uppercase tracking-wide border-b-2 border-red-400 pb-2 inline-block">
                {footerSections.connect.title}
              </h3>
              <div className="space-y-4">
                {footerSections.connect.info.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg group-hover:bg-red-50 transition-colors duration-300">
                      <item.icon className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-700 text-sm xl:text-base">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className={`text-sm xl:text-base transition-colors duration-300 hover:underline block mt-1 ${
                            item.type === 'email' 
                              ? 'text-red-500 hover:text-red-600' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-600 text-sm xl:text-base block mt-1">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Tablet Footer Content */}
      <div className="hidden md:block lg:hidden bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-8">
              {/* Products */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b-2 border-red-400 pb-2 inline-block">
                  {footerSections.products.title}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {footerSections.products.links.slice(0, 6).map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-300 py-1"
                    >
                      {link}
                    </a>
                  ))}
                  <details className="group">
                    <summary className="text-sm text-red-500 cursor-pointer hover:text-red-600 py-1 list-none">
                      View More ({footerSections.products.links.length - 6} more)
                    </summary>
                    <div className="mt-2 space-y-2">
                      {footerSections.products.links.slice(6).map((link, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-300 block py-1"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </details>
                </div>
              </div>

              {/* Shop */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b-2 border-red-400 pb-2 inline-block">
                  {footerSections.shop.title}
                </h3>
                <div className="space-y-2">
                  {footerSections.shop.links.map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-300 block py-1"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Support */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b-2 border-red-400 pb-2 inline-block">
                  {footerSections.support.title}
                </h3>
                <div className="space-y-2">
                  {footerSections.support.links.map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-300 block py-1"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b-2 border-red-400 pb-2 inline-block">
                  {footerSections.connect.title}
                </h3>
                <div className="space-y-3">
                  {footerSections.connect.info.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <item.icon className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-700 text-sm">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className={`text-sm transition-colors duration-300 hover:underline block mt-0.5 ${
                              item.type === 'email' 
                                ? 'text-red-500 hover:text-red-600' 
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-gray-600 text-sm block mt-0.5">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Footer Content */}
      <div className="md:hidden bg-gray-50 py-6">
        <div className="max-w-sm mx-auto px-4">
          <div className="space-y-4">
            
            {/* Mobile Products */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button 
                onClick={() => toggleSection('products')}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset rounded-t-lg"
              >
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                  {footerSections.products.title}
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openSections.products ? 'rotate-180' : ''
                }`} />
              </button>
              {openSections.products && (
                <div className="px-4 pb-4 space-y-2 border-t border-gray-100">
                  {footerSections.products.links.map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200 block py-2 border-b border-gray-50 last:border-b-0"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Shop */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button 
                onClick={() => toggleSection('shop')}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset rounded-t-lg"
              >
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                  {footerSections.shop.title}
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openSections.shop ? 'rotate-180' : ''
                }`} />
              </button>
              {openSections.shop && (
                <div className="px-4 pb-4 space-y-2 border-t border-gray-100">
                  {footerSections.shop.links.map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200 block py-2 border-b border-gray-50 last:border-b-0"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Support */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button 
                onClick={() => toggleSection('support')}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset rounded-t-lg"
              >
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                  {footerSections.support.title}
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openSections.support ? 'rotate-180' : ''
                }`} />
              </button>
              {openSections.support && (
                <div className="px-4 pb-4 space-y-2 border-t border-gray-100">
                  {footerSections.support.links.map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200 block py-2 border-b border-gray-50 last:border-b-0"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Connect - Always Visible */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-4 border-b-2 border-red-400 pb-2 inline-block">
                {footerSections.connect.title}
              </h3>
              <div className="space-y-4">
                {footerSections.connect.info.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-red-100 rounded-lg">
                      <item.icon className="w-4 h-4 text-red-500" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-700 text-sm mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className={`text-sm transition-colors duration-300 hover:underline ${
                            item.type === 'email' 
                              ? 'text-red-500 hover:text-red-600' 
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-600 text-sm">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;