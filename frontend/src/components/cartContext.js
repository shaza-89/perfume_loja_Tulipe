import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (Perfume, qty) => {
    const exists = cart.find((p) => p._id === Perfume._id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === exists.id ? { ...p, qty: p.qty ? p.qty + qty : qty } : p
        )
      );
    } else {
      setCart([...cart, { ...Perfume, qty }]);
    }
  };

  // Log the updated cart whenever the cart state changes
  useEffect(() => {
  }, [cart]);

  const removeFromCart = (id) => {
   
    setCart(cart.filter((Perfume) => Perfume._id !== id));
  };
  const updateCartQty = (Perfume, qty) => {
    setCart((cart) =>
      cart.map((p) =>
        p._id === Perfume._id ? { ...p, qty: qty } : p
   )
);
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,updateCartQty }}>
      {children}
    </CartContext.Provider>
);
};