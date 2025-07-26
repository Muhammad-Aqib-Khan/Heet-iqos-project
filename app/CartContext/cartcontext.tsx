"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  slug: string;
  image: string;
  brand: string;
  flavour: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  increaseQuantity: (slug: string) => void;
  decreaseQuantity: (slug: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.slug === item.slug);
      if (existing) {
        return prev.map(i =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (slug: string) => {
    setCartItems(prev => prev.filter(i => i.slug !== slug));
  };

  const increaseQuantity = (slug: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (slug: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.slug === slug && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
