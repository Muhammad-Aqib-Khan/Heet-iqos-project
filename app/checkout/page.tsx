"use client";

import { useCart } from "../CartContext/cartcontext";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

const DUBAI_CITIES = [
  "Dubai Marina",
  "Deira",
  "Jumeirah",
  "Bur Dubai",
  "Al Barsha",
  "Business Bay",
  "Downtown Dubai",
  "Palm Jumeirah",
  "Al Quoz",
  "JLT",
];

export default function Checkout() {
  const { cart, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    postalCode: "",
    phone: "",
    flavour: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const cartSummary = Array.isArray(cart)
    ? cart
        .map(
          (item: { name: string; quantity?: number; price: number }) =>
            `- ${item.name} x${item.quantity ?? 1} — ${item.price * (item.quantity ?? 1)} AED`
        )
        .join("%0A")
    : "";

  const calculatedTotal = typeof totalPrice === "number" && totalPrice < 200
    ? totalPrice + 30
    : totalPrice;
  const deliveryNote = totalPrice < 200 ? "Delivery Charges: 30 AED (Orders below 200 AED)" : "Free Delivery (Orders above 200 AED)";

  const handleSubmit = () => {
    const message = `Order Details:%0AName: ${formData.name}%0ACity: ${formData.city}%0AAddress: ${formData.address}%0APostal Code: ${formData.postalCode}%0APhone: ${formData.phone}%0AFlavour: ${formData.flavour}%0A%0AItems:%0A${cartSummary}%0A%0ATotal: ${calculatedTotal} AED (%0A${deliveryNote})`;
    const phoneNumber = "971508016258";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="text-center mb-4 text-sm font-medium text-red-600 bg-yellow-100 py-2 px-4 rounded">
        💵 Cash Only Payment Available
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />

        <select
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        >
          <option value="">Select City</option>
          {DUBAI_CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />

        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />

        <input
          type="text"
          name="flavour"
          placeholder="Flavour"
          value={formData.flavour}
          onChange={handleInputChange}
          className="w-full border rounded p-2"
        />

        <div className="text-center text-gray-700 text-sm">
          {deliveryNote}
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Cart Items</h2>
          <ul className="space-y-2">
            {Array.isArray(cart) && cart.map(
              (
                item: { name: React.ReactNode; quantity?: number; price: number },
                index: React.Key
              ) => (
                <li key={index} className="flex justify-between text-sm">
                  <span>
                    {item.name} x{item.quantity ?? 1}
                  </span>
                  <span>{item.price * (item.quantity ?? 1)} AED</span>
                </li>
              )
            )}
           
          </ul>
          <div className="mt-4 font-semibold text-right">
            Total: {calculatedTotal} AED
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Place Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
