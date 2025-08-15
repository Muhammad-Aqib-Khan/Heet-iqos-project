"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, Truck, Shield, Zap, Award } from "lucide-react";
import ProductCard from "../(components)/productcard/productcard";
import products from "../(components)/data/products";

export default function IlumaPrimePage() {
  // Filter all ILUMA products and sort: Prime first
  const ilumaProducts = products
    .filter(product => product.title.toLowerCase().includes("iluma"))
    .sort((a, b) => {
      if (a.title.toLowerCase().includes("prime") && !b.title.toLowerCase().includes("prime")) return -1;
      if (!a.title.toLowerCase().includes("prime") && b.title.toLowerCase().includes("prime")) return 1;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Premium Device
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                IQOS ILUMA
                <span className="block text-2xl lg:text-3xl font-normal mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  The Ultimate Experience
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience the pinnacle of heated tobacco technology with IQOS ILUMA. 
                Featuring the revolutionary SMARTCORE INDUCTION SYSTEM™, elegant design, 
                and premium materials for the ultimate tobacco experience.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">SMARTCORE Technology</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">Premium Materials</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">2-Year Warranty</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black backdrop-blur p-8">
                <img
                  src="/iluma/BlackDevice.png"
                  alt="IQOS ILUMA"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-lg font-bold">
                Premium Quality
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionary SMARTCORE Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              IQOS ILUMA features the world's first induction heating system for heated tobacco, 
              delivering an unparalleled experience with no blade and no cleaning required.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Blade Technology</h3>
              <p className="text-gray-600">
                Revolutionary bladeless design means no cleaning required and no risk of breaking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Design</h3>
              <p className="text-gray-600">
                Elegant aluminum body with premium finishes and sophisticated color options.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced Experience</h3>
              <p className="text-gray-600">
                Consistent taste, improved draw, and generous vapor with less lingering smell.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ILUMA Collection
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our exclusive range of ILUMA devices in premium colors and finishes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ilumaProducts.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                image={product.image}
                brand={product.brand}
                flavour={product.flavour}
                price={product.price}
                cutPrice={Math.round(product.price * 2.2)}
                basePath="/products"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technical Excellence
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SMARTCORE INDUCTION SYSTEM™</h3>
                  <p className="text-gray-600">
                    World's first induction heating system for heated tobacco, delivering precise temperature control and consistent experience.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Battery Performance</h3>
                  <p className="text-gray-600">
                    Up to 20 consecutive uses with fast charging capability. Full charge in just 135 minutes.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Materials</h3>
                  <p className="text-gray-600">
                    Anodized aluminum body with premium finish options including Obsidian Black, Gold Khaki, and Jade Green.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Features</h3>
                  <p className="text-gray-600">
                    LED status lights, vibration alerts, and auto-start functionality for seamless operation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8">
                <img
                  src="/iluma/GreenDevice.png"
                  alt="ILUMA Technical"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Experience Premium Excellence
          </h2>
          <p className="text-xl mb-8">
            Discover why IQOS ILUMA is the ultimate choice for discerning tobacco enthusiasts 
            who demand the very best in technology, design, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products/iqos-iluma-obsidian-black"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Shop ILUMA
            </Link>
            <Link 
              href="/Contactus"
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
