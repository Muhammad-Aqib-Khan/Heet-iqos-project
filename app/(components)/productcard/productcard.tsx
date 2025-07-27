"use client";
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "../../CartContext/cartcontext";

interface ProductCardProps {
  slug: string;
  image: string;
  brand: string;
  flavour: string;
  flavourStyle?: string;
  price: number;
  cutPrice: number;
  basePath: string;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  image,
  brand,
  flavour,
  flavourStyle = "",
  price,
  cutPrice,
  basePath,
  discount,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const { addToCart } = useCart();

  // Calculate discount percentage automatically
  const calculatedDiscount = cutPrice > price ? Math.round(((cutPrice - price) / cutPrice) * 100) : 0;
  const displayDiscount = discount || calculatedDiscount;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ slug, image, brand, flavour, price, quantity });
    setMessage(`Added ${quantity} x ${flavour} to cart`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <Link
      href={`${basePath}/${slug}`}
      className="group bg-white rounded-lg shadow hover:-translate-y-2 transition-transform"
    >
      <div className="flex flex-col items-center p-3 border border-gray-200 bg-gray-50 h-full">
        <div className="relative w-full h-24 sm:h-28 md:h-32 overflow-hidden rounded-md">
          <img
            src={image}
            alt={flavour}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
          {displayDiscount > 0 && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
              {displayDiscount}% OFF
            </div>
          )}
        </div>

        <h2 className={`mt-2 text-sm font-semibold text-center ${flavourStyle}`}>
          {flavour}
        </h2>
        <p className="text-xs text-gray-600 text-center">{brand}</p>

        <div className="mt-1 flex gap-1 justify-center items-center text-sm">
          <span className="text-teal-600 font-bold">AED {price}</span>
          <span className="line-through text-red-400 text-xs">AED {cutPrice}</span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-1">
          <button
            aria-label="Decrease quantity"
            onClick={(e) => {
              e.preventDefault();
              setQuantity(Math.max(1, quantity - 1));
            }}
            className={`border px-2 py-1 rounded text-xs ${
              quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            aria-label="Increase quantity"
            onClick={(e) => {
              e.preventDefault();
              setQuantity(quantity + 1);
            }}
            className="border px-2 py-1 rounded text-xs hover:bg-gray-200"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-3 w-full flex items-center justify-center gap-1 bg-teal-600 text-white rounded-md py-1 text-sm hover:bg-teal-700"
        >
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>

        {message && (
          <p className="text-green-600 text-xs mt-2 transition-opacity">
            {message}
          </p>
        )}

        <div className="flex justify-center text-yellow-400 text-sm mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
