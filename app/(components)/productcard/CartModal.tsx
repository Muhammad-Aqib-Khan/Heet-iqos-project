"use client";

import React from "react";
import { X } from "lucide-react";
import { useCart } from "../../CartContext/cartcontext";
import { useRouter } from "next/navigation";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex justify-end bg-gray-40">
      {/* Slightly wider panel */}
      <div className="w-full max-w-[420px] p-6 h-full shadow-2xl border-l border-gray-300 relative bg-white">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">Shopping cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="overflow-y-auto space-y-3 max-h-[60vh] pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg border border-gray-200 shadow-sm"
                >
                  {/* Larger product image */}
                  <img
                    src={item.image}
                    alt={item.flavour}
                    className="w-25 h-16 object-cover rounded-md"
                  />

                  <div className="flex-1 text-sm">
                    <h4 className="font-medium">{item.flavour}</h4>
                    <p className="text-gray-600">{item.brand}</p>

                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="text-xs px-2 py-1 border rounded hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="text-xs px-2 py-1 border rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-semibold mt-1">
                      AED {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    className="text-red-500 hover:text-red-700 text-xs"
                    onClick={() => removeFromCart(item.slug)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4  border-t pt-4 sticky bottom-0 bg-white">
              <p className="flex justify-between font-semibold">
                <span>Subtotal:</span>
                <span>AED {totalPrice.toFixed(2)}</span>
              </p>
              <button
                onClick={() => {
                  onClose();
                  router.push("/checkout");
                }}
                className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
