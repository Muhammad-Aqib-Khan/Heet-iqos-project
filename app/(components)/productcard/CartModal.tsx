"use client";

import React, { useEffect, useRef } from "react";
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
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Keep hooks order stable; only act when open
  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = original || "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={[
        "fixed inset-0 z-[99999] transition-opacity",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Right drawer */}
      <div
        ref={panelRef}
        className={[
          "absolute right-0 top-0 h-[100dvh] w-[95%] xs:w-[92%] max-w-[420px] bg-white shadow-2xl",
          "transition-transform duration-300 ease-out overscroll-contain flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Top bar (gradient for consistency) */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-rose-500 to-pink-500">
          <span className="text-white font-semibold tracking-wide">SHOPPING CART</span>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white"
            aria-label="Close cart"
          >
            <X />
          </button>
        </div>

        {/* Content */}
        {cartItems.length === 0 ? (
          <div className="p-6 text-gray-500">Your cart is empty.</div>
        ) : (
          <>
            {/* Items list */}
            <div className="px-3 pt-3 overflow-y-auto grow">
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.slug}
                    className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl border border-gray-200 shadow-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.flavour}
                      className="w-16 h-16 rounded-md object-cover border"
                      loading="lazy"
                    />

                    <div className="flex-1 min-w-0 text-sm">
                      <h4 className="font-medium line-clamp-1">{item.flavour}</h4>
                      <p className="text-gray-600 line-clamp-1">{item.brand}</p>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                            className="text-xs px-2 py-1 border rounded hover:bg-gray-100 disabled:opacity-40"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="font-semibold tabular-nums">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                            className="text-xs px-2 py-1 border rounded hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <p className="font-semibold tabular-nums">
                          AED {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <button
                      className="text-red-500 hover:text-red-600 text-xs whitespace-nowrap"
                      onClick={() => removeFromCart(item.slug)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky footer */}
            <div className="border-t bg-white px-4 py-4">
              <div className="flex items-center justify-between text-[15px]">
                <span className="font-semibold">Subtotal</span>
                <span className="font-semibold tabular-nums">AED {totalPrice.toFixed(2)}</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  router.push("/checkout");
                }}
                className="mt-3 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 active:scale-[0.99]"
              >
                Checkout
              </button>

              <button
                onClick={onClose}
                className="mt-2 w-full border py-3 rounded-xl hover:bg-gray-50 active:scale-[0.99]"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
