import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (index >= 0) {
      cart[index].quantidade += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantidade: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (index >= 0) {
      cart[index].quantidade -= 1;

      if (cart[index].quantidade === 0) {
        cart.splice(index, 1);
      }

      setCart([...cart]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
