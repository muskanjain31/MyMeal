// src/RecipeCard.js

import React, { useState, useContext } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import CardContext from '../../Components/CartContext/CardContext';
import './RecipeCard.css';

const RecipeCard = ({ recipe , inCart}) => {
  const [liked, setLiked] = useState(false);
  const {addToCart} = useContext(CardContext);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleAddToCart = () => {
    if (!inCart) {
      addToCart(recipe);
    }
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3 className="recipe-name">{recipe.name}</h3>
      <div className="recipe-info">
      <p className="recipe-price">${recipe.price}</p>
      <div className="recipe-actions">
        <button onClick={handleLike} className="like-button">
          <FaHeart color={liked ? 'red' : 'grey'} />
        </button>
        {!inCart && (
            <button onClick={handleAddToCart} className="cart-button">
              <FaCartPlus />
            </button>
          )}
      </div>
      </div>
    </div>
  );
};

export default RecipeCard;
