"use client";
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "./CartModal";
import { useCart } from "../../CartContext/cartcontext";

const CartItem = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, totalPrice } = useCart();
  const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="flex items-center space-x-2">
      <button
        className="relative flex items-center space-x-2 hover:opacity-80 transition-opacity"
        onClick={() => setCartOpen(true)}
        aria-label="Open cart"
      >
        <div className="relative w-10 h-10 border-2 border-gray-300 rounded flex items-center justify-center">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {totalQuantity > 0 && (
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
              {totalQuantity}
            </div>
          )}
        </div>
        <div className="hidden sm:flex flex-col items-start">
          <span className="text-sm font-medium text-gray-700">
            Shopping cart
          </span>
          <span className="text-base font-bold text-gray-900">
            AED {totalPrice.toFixed(2)}
          </span>
        </div>
      </button>
      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default CartItem;
