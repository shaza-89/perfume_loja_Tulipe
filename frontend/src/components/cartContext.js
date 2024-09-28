import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (Perfume) => {
    const exists = cart.find((Perfume) => Perfume.id);

    if (exists) {
      setCart(cart.map((Perfume) =>
       Perfume.id ? { ...Perfume, qty: Perfume.qty + 1 } : Perfume
      ));
    } else {
      setCart([...cart, { ...Perfume, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(Perfume=> Perfume.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};