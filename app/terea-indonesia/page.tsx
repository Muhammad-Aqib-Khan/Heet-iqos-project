"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, Truck, Shield, Leaf } from "lucide-react";
import ProductCard from "../(components)/productcard/productcard";
import products from "../(components)/data/products";

export default function TereaIndonesiaPage() {
  // Filter products for TEREA Indonesia
  const tereaIndonesiaProducts = products.filter(product => 
    product.slug.includes("indonesia") && product.brand === "TEREA"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white">
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
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  New Collection
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                TEREA Indonesia
                <span className="block text-2xl lg:text-3xl font-normal mt-2">
                  Exotic Flavors Collection
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover the exotic taste of Indonesia with TEREA's premium collection. 
                Designed exclusively for IQOS ILUMA devices, featuring unique Indonesian-inspired flavors 
                that capture the essence of the archipelago.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Truck className="w-5 h-5" />
                  <span className="text-sm">Same Day Delivery</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Leaf className="w-5 h-5" />
                  <span className="text-sm">Natural Flavors</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur">
                <img
                  src="/indonesia/apricity-indonesia.webp"
                  alt="TEREA Indonesia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-400 text-black px-4 py-2 rounded-lg font-bold">
                Limited Edition
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ILUMA Compatibility Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-yellow-400 text-xl">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> TEREA sticks are designed exclusively for IQOS ILUMA devices. 
                Do not use with previous IQOS generations as this may cause damage to your device.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Indonesian-Inspired Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              TEREA Indonesia brings the rich cultural heritage and exotic flavors of Indonesia 
              to your IQOS ILUMA experience through innovative SMARTCORE INDUCTION SYSTEM™.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌺</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Exotic Flavors</h3>
              <p className="text-gray-600">
                Unique Indonesian-inspired taste profiles including Apricity, Yugen, and Sienna varieties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">SMARTCORE Technology</h3>
              <p className="text-gray-600">
                Advanced induction heating system for improved draw, taste consistency, and generous vapor.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Tobacco</h3>
              <p className="text-gray-600">
                Carefully selected tobacco blends enhanced with natural Indonesian flavor essences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              TEREA Indonesia Collection
            </h2>
            <p className="text-lg text-gray-600">
              Experience the exotic taste of Indonesia with our premium TEREA collection.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tereaIndonesiaProducts.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                image={product.image}
                brand={product.brand}
                flavour={product.flavour}
                price={product.price}
                cutPrice={Math.round(product.price * 1.7)}
                basePath="/products"
              />
            ))}
          </div>
          
          {tereaIndonesiaProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Products coming soon...</p>
            </div>
          )}
        </div>
      </div>

      {/* Flavor Profiles */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover Indonesian Flavor Profiles
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apricity</h3>
              <p className="text-gray-700 mb-4">
                Warm and fruity tobacco blend with a light touch, capturing the gentle warmth of Indonesian sunshine.
              </p>
              <div className="flex items-center text-sm text-orange-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Warm • Fruity • Light
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yugen</h3>
              <p className="text-gray-700 mb-4">
                Floral and aromatic blend with a sophisticated finish, inspired by Indonesian botanical richness.
              </p>
              <div className="flex items-center text-sm text-purple-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Floral • Aromatic • Sophisticated
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sienna</h3>
              <p className="text-gray-700 mb-4">
                Robust and intense tobacco flavor with earthy undertones, reflecting Indonesia's rich soil.
              </p>
              <div className="flex items-center text-sm text-red-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Robust • Intense • Earthy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ILUMA Device Compatibility */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Designed for IQOS ILUMA
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                TEREA Indonesia sticks feature the innovative SMARTCORE INDUCTION SYSTEM™, 
                designed exclusively for IQOS ILUMA devices. Experience improved draw, 
                consistent taste, and generous vapor with every stick.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">No Blade, No Cleaning</h4>
                    <p className="text-gray-400 text-sm">ILUMA's bladeless design means no cleaning required</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Consistent Experience</h4>
                    <p className="text-gray-400 text-sm">Every stick delivers the same quality taste from first to last puff</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Enhanced Vapor</h4>
                    <p className="text-gray-400 text-sm">More generous vapor production with less lingering smell</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/iluma/ilumaprime.png"
                alt="IQOS ILUMA Device"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Experience Indonesian Excellence
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Discover the exotic flavors of Indonesia with TEREA's premium collection, 
            designed exclusively for IQOS ILUMA devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products/iqos-terea-apricity-indonesia"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop TEREA Indonesia
            </Link>
            <Link 
              href="/iluma"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              View ILUMA Devices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
