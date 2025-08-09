"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Star, Clock, Battery, Thermometer } from "lucide-react";

export default function OriginalsDuoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
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
                  Classic Design
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                IQOS ORIGINALS DUO
                <span className="block text-2xl lg:text-3xl font-normal mt-2">
                  Reliable Performance
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience reliable heated tobacco technology with IQOS ORIGINALS DUO. 
                Featuring classic blade heating system, dual charging capability, 
                and proven performance trusted by millions worldwide.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Battery className="w-5 h-5" />
                  <span className="text-sm">Dual Charging</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Quick Heat-up</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Thermometer className="w-5 h-5" />
                  <span className="text-sm">Precise Heating</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur p-8">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">IQOS</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-400 text-white px-4 py-2 rounded-lg font-bold">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-8">🚀</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            IQOS ORIGINALS DUO Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're working on bringing you the complete IQOS ORIGINALS DUO experience. 
            This reliable heated tobacco device will feature dual charging capability, 
            classic blade heating technology, and the trusted performance you expect from IQOS.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dual Charging</h3>
              <p className="text-gray-600 text-sm">Two consecutive uses without waiting for recharge</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Heat-up</h3>
              <p className="text-gray-600 text-sm">Fast heating for immediate satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Precise Control</h3>
              <p className="text-gray-600 text-sm">Optimal temperature for consistent taste</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Want to be the first to know when IQOS ORIGINALS DUO becomes available? 
              Contact us to join our notification list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/Contactus"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/iluma"
                className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
              >
                Explore ILUMA Devices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
