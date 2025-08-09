"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, Truck, Shield } from "lucide-react";
import ProductCard from "../(components)/productcard/productcard";
import products from "../(components)/data/products";

export default function HeetsClassicPage() {
  // Filter products for HEETS Classic (Kazakhstan products)
  const heetsClassicProducts = products.filter(product => 
    product.brand === "Heets" || product.title.toLowerCase().includes("heets")
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
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
                  Popular Choice
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                HEETS Classic
                <span className="block text-2xl lg:text-3xl font-normal mt-2">
                  Kazakhstan Collection
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience the finest HEETS Classic flavors from Kazakhstan. Each pack contains 20 premium tobacco sticks, 
                expertly crafted for use with IQOS heating devices. Discover authentic tobacco taste without the smoke.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Truck className="w-5 h-5" />
                  <span className="text-sm">Fast 2-3 Hour Delivery</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">100% Authentic</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur">
                <img
                  src="/classicKazakhstan/HEETS-Amber-Selection.png"
                  alt="HEETS Classic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
                Up to 32% OFF
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose HEETS Classic?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HEETS Classic represents the perfect balance of tradition and innovation, 
              offering authentic tobacco taste with modern heating technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Tobacco</h3>
              <p className="text-gray-600">
                Carefully selected tobacco blends from Kazakhstan, known for their rich flavor and quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Heat-Not-Burn</h3>
              <p className="text-gray-600">
                Advanced heating technology that warms tobacco instead of burning it, reducing harmful chemicals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Ash or Smoke</h3>
              <p className="text-gray-600">
                Enjoy a cleaner experience with no ash, less smell, and no secondhand smoke.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              HEETS Classic Collection
            </h2>
            <p className="text-lg text-gray-600">
              Explore our complete range of HEETS Classic flavors, each offering a unique taste experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {heetsClassicProducts.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                image={product.image}
                brand={product.brand}
                flavour={product.flavour}
                price={product.price}
                cutPrice={Math.round(product.price * 1.4)}
                basePath="/products"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Experience the Difference
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                HEETS Classic from Kazakhstan combines traditional tobacco craftsmanship with modern technology. 
                Each stick is designed to work perfectly with IQOS devices, delivering consistent flavor and satisfaction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Reduced Harmful Chemicals</h4>
                    <p className="text-gray-400 text-sm">Up to 95% reduction in harmful chemicals compared to cigarettes*</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Authentic Taste</h4>
                    <p className="text-gray-400 text-sm">Real tobacco taste without compromise</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Convenient & Clean</h4>
                    <p className="text-gray-400 text-sm">No ash, less smell, more convenience</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-6">
                *Average reductions in levels of a range of harmful chemicals compared to cigarettes
              </p>
            </div>
            
            <div className="relative">
              <img
                src="/Banner3.png"
                alt="IQOS Device"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of satisfied customers who have switched to HEETS Classic for a better tobacco experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products/heets-amber-selection"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop HEETS Classic
            </Link>
            <Link 
              href="/Contactus"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
