"use client";
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "./CartModal"; // Adjust path as needed
import { useCart } from "../../CartContext/cartcontext"; // Adjust path as needed

const CartItem = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex items-center space-x-2">
      <button
        className="relative flex items-center space-x-2 hover:opacity-80 transition-opacity"
        onClick={() => setCartOpen(true)}
        aria-label="Open cart"
      >
        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-2 border-gray-300 rounded flex items-center justify-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 border border-gray-400 rounded-sm"></div>
        {totalQuantity > 0 && (
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
            {totalQuantity}
            </div>
        )}
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-xs lg:text-sm font-medium text-gray-700">SHOPPING CART</div>
          <div className="text-sm lg:text-base font-bold text-gray-900">
            Dhs. {totalPrice.toFixed(2)}
          </div>
        </div>
      </button>
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default CartItem;
