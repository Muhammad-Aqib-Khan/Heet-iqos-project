"use client";

import { useCart } from "../CartContext/cartcontext";
import React, { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, getTotalPrice } = useCart();
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");

  const shippingCost = shippingMethod === "standard" ? 30 : 50;
  const total = getTotalPrice() + shippingCost;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Billing Form */}
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-xl font-semibold">Billing Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input placeholder="First name" className="border p-2 rounded" required />
          <input placeholder="Last name" className="border p-2 rounded" required />
          <input placeholder="Country/Region" value="United Arab Emirates" disabled className="border p-2 rounded" />
          <select className="border p-2 rounded">
            <option>Select a city</option>
            <option>Dubai</option>
            <option>Abu Dhabi</option>
            <option>Sharjah</option>
          </select>
          <input placeholder="Street address" className="border p-2 rounded col-span-2" required />
          <input placeholder="Phone" className="border p-2 rounded" required />
          <input placeholder="Email address" className="border p-2 rounded" required />
        </div>
        <textarea placeholder="Order notes (optional)" className="border p-2 rounded w-full" rows={3}></textarea>
      </div>

      {/* Order Summary */}
      <div className="border rounded p-4 bg-gray-50 space-y-4">
        <h2 className="text-lg font-semibold">Your Order</h2>
        {cartItems.map((item) => (
          <div key={item.slug} className="flex justify-between items-center border-b py-2 text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span>AED {(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <div className="pt-2 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>AED {getTotalPrice().toFixed(2)}</span>
          </div>

          {/* Shipping Options */}
          <div className="space-y-1">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={shippingMethod === "standard"}
                onChange={() => setShippingMethod("standard")}
              />
              Standard Shipping (30.00 AED)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={shippingMethod === "express"}
                onChange={() => setShippingMethod("express")}
              />
              Express Shipping (50.00 AED)
            </label>
          </div>

          <div className="flex justify-between font-bold text-base">
            <span>Total</span>
            <span>AED {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment */}
        <div className="pt-4">
          <h3 className="text-sm font-medium mb-2">Payment Method</h3>
          <div className="space-y-2 text-sm">
            <label className="flex gap-2 items-center">
              <input type="radio" name="payment" defaultChecked /> Credit Card / Bank Transfer
            </label>
            <label className="flex gap-2 items-center">
              <input type="radio" name="payment" /> Cash on Delivery
            </label>
          </div>
        </div>

        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition">
          Place Order
        </button>
      </div>
    </div>
  );
}
