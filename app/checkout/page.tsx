"use client";

import React, { useState } from "react";
import { useCart } from "../CartContext/cartcontext";
import toast, { Toaster } from "react-hot-toast";

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();

  const initialForm = {
    firstName: "",
    lastName: "",
    country: "United Arab Emirates",
    city: "",
    address: "",
    phone: "",
    email: "",
    orderNotes: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [payment, setPayment] = useState("bank");

  const DUBAI_CITIES = [
    "Dubai Marina", "Deira", "Jumeirah", "Bur Dubai", "Al Barsha",
    "Business Bay", "Downtown Dubai", "Palm Jumeirah", "Al Quoz", "JLT",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (method: string) => {
    setPayment(method);
    if (method === "bank") {
      toast("💳 Bank Transfer and card payment method is coming soon .");
    }
  };

  const calculatedTotal = totalPrice < 111 ? totalPrice + 30 : totalPrice;
  const shippingCharge = totalPrice < 111 ? 30 : 0;

  const handleSubmit = async () => {
    const fullName = `${formData.firstName} ${formData.lastName}`;
    const { phone, email } = formData;

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.city || !formData.address) {
      toast.error("Please fill all required fields.");
      return;
    }

    const whatsappNumber = "971508016258";
    const message = `
🏍️ *New Order Received*

👤 Name: ${fullName}
📞 Phone: ${phone}
📧 Email: ${email}
🌍 Country: ${formData.country}
🌆 City: ${formData.city}
🏠 Address: ${formData.address}
📝 Notes: ${formData.orderNotes}
💳 Payment: ${payment === "bank" ? "Bank Transfer" : "Cash on Delivery"}

📋 *Order Summary:*
${cartItems.map(item => `• ${item.flavour} × ${item.quantity} = AED ${(item.price * item.quantity).toFixed(2)}`).join("\n")}

Subtotal: AED ${totalPrice.toFixed(2)}
Shipping: AED ${shippingCharge.toFixed(2)}
*Total: AED ${calculatedTotal.toFixed(2)}*`.trim();

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");

    try {
      await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email }),
      });

      toast.success("✅ Order placed successfully!");
      setFormData(initialForm);
      clearCart();
    } catch (err) {
      console.error("Error:", err);
      toast.error("❌ Failed to submit order.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-100 min-h-screen">
      <Toaster />
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
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow border border-gray-200 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        <div className="space-y-3 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="bank" checked={payment === "bank"} onChange={() => handlePaymentChange("bank")} className="accent-blue-600" />
            Credit Card Machine/Bank Transfer
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="cod" checked={payment === "cod"} onChange={() => handlePaymentChange("cod")} className="accent-blue-600" />
            Cash on delivery
          </label>
          <button onClick={handleSubmit} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
