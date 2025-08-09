"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

export default function LilSolidEzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">Coming Soon</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-current" />))}
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">IQOS LIL SOLID EZ</h1>
            <p className="text-xl text-white/90 mb-8">Easy-to-use heated tobacco device with solid performance</p>
            <Link href="/Contactus" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Notified
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
