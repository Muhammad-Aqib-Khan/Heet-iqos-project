"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, Zap, Shield, Award, ChevronRight } from "lucide-react";
import products from "../(components)/data/products";

export default function IlumaPage() {
  // Filter all ILUMA products
  const ilumaProducts = products.filter(product => 
    product.title.toLowerCase().includes("iluma")
  );

  const ilumaCategories = [
    {
      title: "ILUMA Prime",
      subtitle: "Premium Experience",
      description: "The ultimate IQOS experience with premium materials and elegant design",
      image: "/iluma/BlackDevice.png",
      price: "From AED 439",
      link: "/iluma-prime",
      badge: "Premium",
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "ILUMA One",
      subtitle: "Compact Excellence",
      description: "All-in-one design combining convenience with the same great technology",
      image: "/ilumaone/ilumapebble.jpg",
      price: "From AED 249",
      link: "/iluma-one",
      badge: "Popular",
      color: "from-blue-400 to-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                Revolutionary Technology
              </span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              IQOS ILUMA
              <span className="block text-3xl lg:text-4xl font-normal mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Future of Heated Tobacco
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Experience the world's first induction heating system for heated tobacco. 
              IQOS ILUMA features revolutionary SMARTCORE INDUCTION SYSTEM™ technology 
              with no blade and no cleaning required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/iluma-prime"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Explore ILUMA Prime
              </Link>
              <Link 
                href="/iluma-one"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Discover ILUMA One
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Technology */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Revolutionary SMARTCORE Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world's first induction heating system for heated tobacco, 
              delivering an unparalleled experience with unprecedented innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Blade Technology</h3>
                  <p className="text-gray-600">Revolutionary bladeless design eliminates the need for cleaning and reduces device maintenance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Safety</h3>
                  <p className="text-gray-600">Induction heating provides precise temperature control and enhanced safety features.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                <img
                  src="/iluma/ilumaprime.png"
                  alt="IQOS ILUMA Technology"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                SMARTCORE™
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consistent Experience</h3>
                  <p className="text-gray-600">Every TEREA stick delivers the same quality taste from first to last puff.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-lg">95%</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced Chemicals</h3>
                  <p className="text-gray-600">Up to 95% reduction in harmful chemicals compared to cigarettes*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your ILUMA Experience
            </h2>
            <p className="text-xl text-gray-600">
              Two exceptional devices, both featuring the same revolutionary technology, 
              designed for different lifestyles and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ilumaCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${category.color}`}>
                          {category.badge}
                        </span>
                      </div>
                      <p className="text-lg text-gray-600 mb-4">{category.subtitle}</p>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      <p className="text-2xl font-bold text-gray-900 mb-6">{category.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-32 h-32">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <Link
                      href={category.link}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all`}
                    >
                      Explore {category.title}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEREA Compatibility */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Designed for TEREA Sticks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              IQOS ILUMA devices work exclusively with TEREA tobacco sticks, 
              featuring innovative SMARTCORE technology for the ultimate heated tobacco experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why TEREA Sticks?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-2">SMARTCORE Integration</h4>
                    <p className="text-gray-300 text-sm">Each TEREA stick contains a metal heating element that works with ILUMA's induction system.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-2">No Residue</h4>
                    <p className="text-gray-300 text-sm">Bladeless heating means no tobacco residue in your device, keeping it clean.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Consistent Quality</h4>
                    <p className="text-gray-300 text-sm">Every stick delivers the same premium taste and vapor production.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/iqostereakazakhstan"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore TEREA Flavors
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img src="/kazakhstan/amber.webp" alt="TEREA Amber" className="w-24 h-24 mx-auto rounded-lg mb-3" />
                <p className="text-sm text-gray-300">TEREA Amber</p>
              </div>
              <div className="text-center">
                <img src="/kazakhstan/silver.webp" alt="TEREA Silver" className="w-24 h-24 mx-auto rounded-lg mb-3" />
                <p className="text-sm text-gray-300">TEREA Silver</p>
              </div>
              <div className="text-center">
                <img src="/Jpan/OasisPearl.jpg" alt="TEREA Oasis Pearl" className="w-24 h-24 mx-auto rounded-lg mb-3" />
                <p className="text-sm text-gray-300">TEREA Oasis Pearl</p>
              </div>
              <div className="text-center">
                <img src="/indonesia/apricity-indonesia.webp" alt="TEREA Apricity" className="w-24 h-24 mx-auto rounded-lg mb-3" />
                <p className="text-sm text-gray-300">TEREA Apricity</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Future Today
          </h2>
          <p className="text-xl mb-8">
            Join millions worldwide who have made the switch to IQOS ILUMA. 
            Discover revolutionary technology that's changing the way we experience tobacco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iluma-prime"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Shop ILUMA Prime
            </Link>
            <Link 
              href="/iluma-one"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Shop ILUMA One
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
