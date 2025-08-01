"use client";

import React, { useState } from "react";
import { useCart } from "../CartContext/cartcontext";

const CheckoutPage = () => {
  const { cartItems, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "United Arab Emirates",
    city: "",
    address: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  const [payment, setPayment] = useState("bank");

  const DUBAI_CITIES = [
    "Dubai Marina", "Deira", "Jumeirah", "Bur Dubai", "Al Barsha",
    "Business Bay", "Downtown Dubai", "Palm Jumeirah", "Al Quoz", "JLT",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculatedTotal = totalPrice < 111 ? totalPrice + 30 : totalPrice;
  const shippingCharge = totalPrice < 111 ? 30 : 0;

  const handleSubmit = async () => {
    const { firstName, lastName, phone, email, country, city, address, orderNotes } = formData;
    const fullName = `${firstName} ${lastName}`.trim();

    // 1. Save to Google Sheet
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwOMjR68fV8TGpFw-lWbczPF_5JGAjcTNTFT0hSWk_Z5y8rlsmdXMv7z1B2C6nQW-o/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          country,
          city,
          address,
          orderNotes
        })
      });
    } catch (error) {
      console.error("Failed to send data to Google Sheets", error);
      alert("Order not submitted. Please try again.");
      return;
    }

    // 2. Send WhatsApp Message
    const whatsappNumber = "971508016258";
    const message = `
🏍️ *New Order Received*

👤 Name: ${fullName}
📞 Phone: ${phone}
📧 Email: ${email}
🌍 Country: ${country}
🌆 City: ${city}
🏠 Address: ${address}
📝 Notes: ${orderNotes}
💳 Payment: ${payment === "bank" ? "Bank Transfer" : "Cash on Delivery"}

📋 *Order Summary:*
${cartItems.map(item => `* ${item.flavour} × ${item.quantity} = AED ${(item.price * item.quantity).toFixed(2)}`).join("\n")}

Subtotal: AED ${totalPrice.toFixed(2)}
Shipping: AED ${shippingCharge.toFixed(2)}
*Total: AED ${calculatedTotal.toFixed(2)}*
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First name *" value={formData.firstName} onChange={handleInputChange} className="border border-red-400 rounded p-2" required />
            <input type="text" name="lastName" placeholder="Last name *" value={formData.lastName} onChange={handleInputChange} className="border border-red-400 rounded p-2" required />
            <input type="text" name="country" disabled value={formData.country} className="col-span-1 md:col-span-2 border border-gray-300 rounded p-2 bg-gray-100" />
            <select name="city" value={formData.city} onChange={handleInputChange} className="col-span-1 md:col-span-2 border border-gray-300 rounded p-2" required>
              <option value="">Select a city</option>
              {DUBAI_CITIES.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <input type="text" name="address" placeholder="House number and street name" value={formData.address} onChange={handleInputChange} className="col-span-1 md:col-span-2 border border-gray-300 rounded p-2" required />
            <input type="text" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleInputChange} className="border border-red-400 rounded p-2" required />
            <input type="email" name="email" placeholder="Email address *" value={formData.email} onChange={handleInputChange} className="border border-red-400 rounded p-2" required />
            <textarea name="orderNotes" placeholder="Notes about your order" value={formData.orderNotes} onChange={handleInputChange} className="col-span-1 md:col-span-2 border border-gray-300 rounded p-2 h-24" />
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Your Order</h2>
          <div className="space-y-2">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.slug} className="flex justify-between items-center text-sm">
                  <span>{item.flavour} × {item.quantity}</span>
                  <span className="font-medium">AED {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in cart.</p>
            )}
            <hr className="my-2" />
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>AED {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>AED {shippingCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2 text-base">
              <span>Total</span>
              <span>AED {calculatedTotal.toFixed(2)}</span>
            </div>
            {totalPrice < 111 && (
              <p className="text-xs text-gray-600 mt-1">Add 111.00 AED to cart and get free shipping!</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow border border-gray-200 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        <div className="space-y-3 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="bank" checked={payment === "bank"} onChange={() => setPayment("bank")} className="accent-blue-600" />
            Credit Card Machine/Bank Transfer
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="cod" checked={payment === "cod"} onChange={() => setPayment("cod")} className="accent-blue-600" />
            Cash on delivery
          </label>
          <p className="text-xs text-gray-600 mt-2">
            Your personal data will be used to process your order, support your experience
            throughout this website, and for other purposes described in our {" "}
            <a href="#" className="underline">privacy policy</a>.
          </p>
          <button onClick={handleSubmit} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;