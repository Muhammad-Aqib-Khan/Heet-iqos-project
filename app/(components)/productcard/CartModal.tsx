import { useCart } from "../../CartContext/cartcontext";
import { X } from "lucide-react";
import React from "react";
import Link from "next/link";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      {/* ✅ Background overlay (blurred) */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"
        onClick={onClose}
      ></div>

      {/* ✅ Cart drawer (clear) */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[90%] md:w-[400px] bg-white shadow-xl p-6 transition-transform duration-300 z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500 hover:text-black" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-[65vh] overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.slug} className="flex items-center gap-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.slug}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      className="px-2 border rounded text-xs"
                      onClick={() => decreaseQuantity(item.slug)}
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      className="px-2 border rounded text-xs"
                      onClick={() => increaseQuantity(item.slug)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm font-bold">AED {(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.slug)}
                    className="text-red-500 text-xs hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="pt-4 mt-4 border-t space-y-4">
            <p className="flex justify-between text-sm font-medium">
              <span>Subtotal:</span>
              <span>AED {getTotalPrice().toFixed(2)}</span>
            </p>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full text-center bg-black text-white py-2 rounded hover:bg-gray-900 transition"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
