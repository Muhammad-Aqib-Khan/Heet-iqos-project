"use client";
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "./CartModal";
import { useCart } from "../../CartContext/cartcontext";

const CartItem = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex items-center space-x-2">
      <button
        className="relative flex items-center space-x-2 hover:opacity-80 transition-opacity"
        onClick={() => setCartOpen(true)}
        aria-label="Open cart"
      >
        {/* Square box with ShoppingCart icon inside */}
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-2 border-gray-300 rounded flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700" />
          
          {totalQuantity > 0 && (
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
              {totalQuantity}
            </div>
          )}
        </div>

        {/* Text beside the icon */}
        <div className="text-right hidden sm:flex flex-col items-start">
          <div className="text-xs lg:text-sm font-medium text-gray-700">SHOPPING CART</div>
          <div className="text-sm lg:text-base font-bold text-gray-900">
            Dhs. {totalPrice.toFixed(2)}
          </div>
        </div>
      </button>

      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default CartItem;
