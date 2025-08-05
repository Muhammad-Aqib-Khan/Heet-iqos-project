"use client";
import { useState } from "react";
import { useCart } from "@/app/CartContext/cartcontext"; // adjust path if needed
import { useRouter } from "next/navigation";
import products from "@/app/(components)/data/products";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      slug: product.slug,
      image: product.image,
      brand: product.brand || "Unknown Brand",
      flavour: product.title,
      price: product.price,
      quantity,
    });
    setMessage(`Added ${quantity} x ${product.title} to cart`);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleBuyNow = () => {
    addToCart({
      slug: product.slug,
      image: product.image,
      brand: product.brand || "Unknown Brand",
      flavour: product.title,
      price: product.price,
      quantity,
    });
    router.push("/checkout");
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <div className="border p-4 shadow rounded bg-white flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain max-h-[400px] w-auto"
          />
        </div>

        {/* Right: Product Details */}
        <div className="space-y-4 text-sm sm:text-base">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-500">(1 review)</span>
          </div>

          <p className="text-gray-700">{product.description}</p>

          {/* Feature List */}
          <ul className="text-gray-600 list-disc pl-5 space-y-1">
            <li><strong>Taste:</strong> Balanced and roasted</li>
            <li><strong>Aroma:</strong> Rich and nutty</li>
            <li><strong>Body:</strong> ★★★★☆</li>
            <li><strong>Intensity:</strong> ★★★★☆</li>
            <li><strong>Origin:</strong> Kazakhstan</li>
            <li><strong>Total Puffs:</strong> 14</li>
            <li><strong>Nicotine per Stick:</strong> 0.5 MG</li>
            <li><strong>Box Weight:</strong> 240g</li>
          </ul>

          {/* Price and Add to Cart */}
          <div className="mt-4 space-y-3">
            <p className="text-2xl font-semibold text-red-600">Rs. {product.price}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="text-sm">Qty:</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border px-2 py-1 rounded text-sm hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border px-2 py-1 rounded text-sm hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded w-full sm:w-auto"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full sm:w-auto"
              >
                Buy Now
              </button>
            </div>

            {message && (
              <p className="text-green-600 text-sm mt-2 transition-opacity">{message}</p>
            )}
          </div>

          {/* Extra Info */}
          <div className="mt-6 space-y-2 text-gray-500 text-sm">
            <p>✅ In Stock</p>
            <p>🚚 Fast Delivery in 2 Hours (UAE-wide)</p>
            <p>💳 Payment Options: Google Pay | Apple Pay | Cash/Card on Delivery</p>
            <p>⚠️ 18+ Only | Smoking is harmful to your health</p>
          </div>
        </div>
      </div>

      {/* Detailed Description Box */}
      <div className="mt-10 p-6 border rounded-lg bg-white shadow-md space-y-6">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-gray-700">
          Heets Amber Selection in Dubai is one of the most sought-after tobacco options for individuals who prefer a rich and smooth vaping experience...
        </p>

        <h3 className="text-xl font-semibold">What Makes Heets Amber Selection Unique?</h3>
        <div className="space-y-4 text-gray-700">
          <p><strong>Full-Bodied Tobacco Flavor:</strong> Heets Amber Selection is designed...</p>
          <p><strong>IQOS-Exclusive Design:</strong> Unlike regular cigarettes...</p>
          <p><strong>Premium Quality, Trusted Brand:</strong> Manufactured by Philip Morris...</p>
          <p><strong>Designed for Modern Vapers:</strong> IQOS and Heets products are ideal...</p>
        </div>

        <h3 className="text-xl font-semibold">Product Features and Specifications</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Flavor Profile:</strong> Full-bodied tobacco with a rich and smooth taste.</li>
          <li><strong>Usage:</strong> Compatible exclusively with IQOS devices.</li>
          <li><strong>Nicotine Strength:</strong> Balanced to deliver a satisfying experience.</li>
          <li><strong>Pack Size:</strong> 20 Heets sticks.</li>
          <li><strong>Compatibility:</strong> IQOS-only.</li>
        </ul>
      </div>
    </div>
  );
}
