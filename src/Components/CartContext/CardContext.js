// src/CartContext.js

import React, { createContext, useState } from 'react';

const CardContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (recipe) => {
    setCart((prevCart) => [...prevCart, recipe]);
  };

  return (
    <CardContext.Provider value={{ cart, addToCart }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
