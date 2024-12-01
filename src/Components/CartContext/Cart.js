// src/Cart.js

import React, { useContext } from 'react';
import CardContext from './CardContext';
import RecipeCard from '../RecipeCard/RecipeCard';
import './CardContext.css';


const Cart = () => {
  const { cart } = useContext(CardContext);

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <RecipeCard key={index} recipe={item} inCart/>
            ))} 
          </div>
          <div className="cart-total">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
        </>     
      )}
    </div>
  );
};

export default Cart;
