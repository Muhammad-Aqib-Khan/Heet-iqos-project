"use client";
import React from "react";
import { useCart } from "../../CartContext/cartcontext";
import { useRouter } from "next/navigation";
import { X } from "lucide-react"; // or any icon you prefer

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const { cartItems, removeFromCart } = useCart();
  const router = useRouter();

  if (!open) return null;

  const handleBuyNow = () => {
    router.push("/checkout");
    onClose();
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.slug} className="flex items-center gap-3 border-b pb-2">
                <img src={item.image} alt={item.flavour} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold text-sm">{item.flavour}</div>
                  <div className="text-xs text-gray-500">{item.brand}</div>
                  <div className="text-xs">Qty: {item.quantity}</div>
                </div>
                <div className="font-bold text-teal-600 text-sm">AED {item.price}</div>
                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="ml-2 text-gray-400 hover:text-red-600"
                  aria-label="Remove item"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-2 mt-6">
          <button
            className="flex-1 bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
            onClick={handleBuyNow}
            disabled={cartItems.length === 0}
          >
            Buy Now
          </button>
          <button
            className="flex-1 bg-green-600 text-white rounded-md py-2 hover:bg-green-700"
            onClick={onClose}
          >
            Add More Flavours
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal; 