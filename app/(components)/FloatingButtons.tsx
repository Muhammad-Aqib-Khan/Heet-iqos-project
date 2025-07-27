'use client';

import React from 'react';
import Link from 'next/link';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-2">
      
      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/971508016258"
        passHref
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative animate-bounce"
      >
        <span
          className="bg-gradient-to-br from-green-500 to-green-400 border-4 border-red-200 shadow-2xl rounded-full p-3 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-green-400/80 hover:shadow-lg"
        >
          {/* WhatsApp SVG icon (slightly smaller) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.419h-.001a9.87 9.87 0 0 1-4.988-1.358l-.357-.213-3.711.974.993-3.617-.232-.372a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.987c-.003 5.45-4.437 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.681a11.876 11.876 0 0 0 5.741 1.463h.005c6.554 0 11.889-5.335 11.892-11.892a11.821 11.821 0 0 0-3.473-8.413"/>
          </svg>
        </span>
        <span className="absolute right-16 bottom-1/2 translate-y-1/2 bg-white text-green-700 text-xs font-semibold px-2 py-1 rounded shadow-md hidden md:block group-hover:opacity-100 transition-opacity duration-300 opacity-0">
          Chat
        </span>
      </Link>

      {/* Arrow Up Floating Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="bg-gradient-to-br from-blue-500 to-blue-400 border-4 border-white text-white rounded-full shadow-xl p-3 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-blue-400/80 hover:shadow-lg group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="absolute right-16 bottom-1/2 translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
          Back to top
        </span>
      </button>
    </div>
  );
}
