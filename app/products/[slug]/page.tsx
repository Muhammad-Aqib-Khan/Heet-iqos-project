import "use client";
import React, { useState } from "react";
import { useCart } from "@/app/CartContext/cartcontext";
import { useRouter } from "next/navigation";
import products from "@/app/(components)/data/products";
import Image from "next/image";

// Props define params as a Promise
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return <ClientProductPage product={product} />;
}

interface ClientProps {
  product: {
    slug: string;
    title: string;
    brand: string;
    flavour: string;
    price: number;
    image: string;
    description: string;
  };
}

function ClientProductPage({ product }: ClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setMessage(`Added ${quantity} x ${product.flavour} to cart`);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    router.push("/checkout");
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Image + Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-4 shadow rounded bg-white flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain max-h-[400px] w-auto"
          />
        </div>
        <div className="space-y-4 text-sm sm:text-base">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-500">(1 review)</span>
          </div>
          <p className="text-gray-700">{product.description}</p>
          <ul className="text-gray-600 list-disc pl-5 space-y-1">
            <li><strong>Flavour:</strong> {product.flavour}</li>
            <li><strong>Brand:</strong> {product.brand}</li>
          </ul>
          <div className="mt-4 space-y-3">
            <p className="text-2xl font-semibold text-red-600">AED {product.price}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="text-sm">Qty:</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border px-2 py-1 rounded text-sm hover:bg-gray-100"
                >-</button>
                <span className="text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border px-2 py-1 rounded text-sm hover:bg-gray-100"
                >+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded w-full sm:w-auto"
              >Add to Cart</button>
              <button
                onClick={handleBuyNow}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full sm:w-auto"
              >Buy Now</button>
            </div>
            {message && <p className="text-green-600 text-sm mt-2 transition-opacity">{message}</p>}
          </div>
          <div className="mt-6 space-y-2 text-gray-500 text-sm">
            <p>✅ In Stock</p>
            <p>🚚 Fast delivery in 2 hours</p>
            <p>💳 Payment: GPay, Apple Pay, COD</p>
            <p>⚠️ 18+ Only | Smoking harmful</p>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="mt-10 p-6 border rounded-lg bg-white shadow-md space-y-6">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
