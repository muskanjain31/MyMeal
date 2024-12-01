import React from 'react';
import { useParams } from 'react-router-dom';

const RollDetail = () => {
  const { id } = useParams(); // Get the roll ID from the URL

  // Example roll details, replace with actual data fetching logic
  const rollDetails = {
    1: { name: 'Soya Chaap Sandwich', description: 'Delicious soya chaap sandwich...', price: '£450.00', imgSrc: 'https://img.freepik.com/free-photo/close-up-boiled-egg-tomatoes-sandwich_23-2148590168.jpg' },
    2: { name: 'Chowmein Sandwich', description: 'Tasty chowmein sandwich...', price: '£400.00', imgSrc: 'https://img.freepik.com/free-photo/close-up-avocado-toast-plate_23-2148893591.jpg' },
    // Add more roll details as needed
  };

  const roll = rollDetails[id];

  if (!roll) {
    return <div>Roll not found</div>;
  }

  return (
    <div>
      <h1>{roll.name}</h1>
      <img src={roll.imgSrc} alt={roll.name} />
      <p>{roll.description}</p>
      <p>Price: {roll.price}</p>
    </div>
  );
};

export default RollDetail;
