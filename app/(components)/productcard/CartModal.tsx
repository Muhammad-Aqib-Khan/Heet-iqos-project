"use client";

import { useCart } from "../../CartContext/cartcontext";
import { X } from "lucide-react";
import React from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price since it's not provided by the context
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.slug} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.flavour || item.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.flavour}</h4>
                  <p className="text-sm text-gray-600">{item.brand}</p>
                  <p className="text-sm font-semibold">Rs. {item.price}</p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.slug)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="border-t pt-4">
              <p className="text-right font-semibold">
                Total: Rs. {totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
