"use client";
import React from "react";
import { useCart } from "../../CartContext/cartcontext";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const router = useRouter();

  if (!open) return null;

  const handleBuyNow = () => {
    router.push("/checkout");
    onClose();
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* CART DRAWER */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-xl overflow-y-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold hover:text-red-400">Shopping cart</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.slug} className="flex items-start gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.flavour}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="font-semibold text-sm">{item.flavour}</div>
                  <div className="text-xs text-gray-500">{item.brand}</div>
                  <div className="flex items-center mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.slug)}
                      className="px-2 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.slug)}
                      className="px-2 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-sm font-bold">AED {item.price}</div>
                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="text-gray-400 hover:text-red-600 ml-1"
                  aria-label="Remove item"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t mt-4">
          <div className="flex justify-between font-medium mb-4 text-sm">
            <span>Subtotal:</span>
            <span>{totalPrice.toFixed(2)} AED</span>
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="bg-black text-white py-2 rounded hover:bg-gray-900"
              onClick={handleBuyNow}
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
            <button
              className="bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
              onClick={onClose}
            >
              Add More Flavours
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
