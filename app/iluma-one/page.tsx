"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, Truck, Shield, Zap, Battery, Smartphone } from "lucide-react";
import ProductCard from "../(components)/productcard/productcard";
import products from "../(components)/data/products";

export default function IlumaOnePage() {
  // Filter products for ILUMA One
  const ilumaOneProducts = products.filter(product => 
    product.title.toLowerCase().includes("iluma one")
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
                  Compact & Stylish
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                IQOS ILUMA One
                <span className="block text-2xl lg:text-3xl font-normal mt-2">
                  Compact Excellence
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover the perfect balance of style, portability, and performance with IQOS ILUMA One. 
                Featuring the same revolutionary SMARTCORE INDUCTION SYSTEM™ in a compact, 
                all-in-one design that fits your lifestyle.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Smartphone className="w-5 h-5" />
                  <span className="text-sm">Compact Design</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Battery className="w-5 h-5" />
                  <span className="text-sm">All-in-One</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm">SMARTCORE Tech</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur p-8">
                <img
                  src="/ilumaone/ilumapebble.jpg"
                  alt="IQOS ILUMA One"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-400 text-white px-4 py-2 rounded-lg font-bold">
                Best Value
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
              All-in-One Convenience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              IQOS ILUMA One combines the holder and charger in one compact device, 
              making it the perfect choice for those who value portability without compromising on performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compact Design</h3>
              <p className="text-gray-600">
                Sleek, pocket-friendly design that combines holder and charger in one elegant device.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SMARTCORE System</h3>
              <p className="text-gray-600">
                Same revolutionary bladeless induction heating technology as ILUMA Prime.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Long Battery Life</h3>
              <p className="text-gray-600">
                Up to 20 consecutive uses on a single charge with quick charging capability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ILUMA One Collection
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our vibrant collection of ILUMA One devices in various colors and special editions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ilumaOneProducts.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                image={product.image}
                brand={product.brand}
                flavour={product.flavour}
                price={product.price}
                cutPrice={Math.round(product.price * 2.8)}
                basePath="/products"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Comparison with Prime */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ILUMA One vs ILUMA Prime
            </h2>
            <p className="text-lg text-gray-600">
              Both devices feature the same SMARTCORE technology, but with different designs to suit your lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ILUMA One */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <img src="/ilumaone/ilumapebble.jpg" alt="ILUMA One" className="w-32 h-32 mx-auto object-contain mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">ILUMA One</h3>
                <p className="text-blue-600 font-semibold">All-in-One Design</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Compact all-in-one device</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">20 consecutive uses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">SMARTCORE induction heating</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Multiple color options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Perfect for on-the-go</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <span className="text-3xl font-bold text-blue-600">AED 249</span>
                <p className="text-sm text-gray-600">Starting price</p>
              </div>
            </div>
            
            {/* ILUMA Prime */}
            <div className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <img src="/iluma/BlackDevice.png" alt="ILUMA Prime" className="w-32 h-32 mx-auto object-contain mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">ILUMA Prime</h3>
                <p className="text-yellow-600 font-semibold">Premium Experience</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Separate holder & charger</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">20 consecutive uses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">SMARTCORE induction heating</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Premium aluminum body</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Luxury finishes</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <span className="text-3xl font-bold text-yellow-600">AED 439</span>
                <p className="text-sm text-gray-600">Starting price</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Variations */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Express Your Style
            </h2>
            <p className="text-lg text-gray-600">
              ILUMA One comes in a variety of colors and special editions to match your personality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="aspect-square rounded-xl bg-gray-200 p-4 mb-3">
                <img src="/ilumaone/ilumapebble.jpg" alt="Pebble Grey" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium">Pebble Grey</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-xl bg-yellow-100 p-4 mb-3">
                <img src="/ilumaone/BEIGE.jpg" alt="Pebble Beige" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium">Pebble Beige</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-xl bg-green-100 p-4 mb-3">
                <img src="/ilumaone/Green.jpg" alt="Moss Green" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium">Moss Green</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-xl bg-red-100 p-4 mb-3">
                <img src="/ilumaone/sunsetred.png" alt="Sunset Red" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium">Sunset Red</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-xl bg-blue-100 p-4 mb-3">
                <img src="/ilumaone/blue.png" alt="We Edition" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium">We Edition</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-xl bg-orange-100 p-4 mb-3">
                <img src="/ilumaone/orange.jpg" alt="Oasis Limited" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium">Oasis Limited</p>
            </div>
          </div>
        </div>
      </div>

      {/* Perfect For Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect For Every Lifestyle
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">On-the-Go</h3>
              <p className="text-gray-600">
                Compact design perfect for busy professionals who need convenience without compromise.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">First-Time Users</h3>
              <p className="text-gray-600">
                Simple, all-in-one design makes it the ideal choice for those new to IQOS technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Style Conscious</h3>
              <p className="text-gray-600">
                Multiple color options and sleek design to match your personal style and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Discover Compact Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the perfect balance of style, portability, and performance with IQOS ILUMA One. 
            Same great technology, more convenient design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products/iqos-iluma-one-pebble-grey"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop ILUMA One
            </Link>
            <Link 
              href="/iluma-prime"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Compare with Prime
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
