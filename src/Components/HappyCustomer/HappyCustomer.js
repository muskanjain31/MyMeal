import React, { useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../useIntersectionObserver';
import './HappyCustomer.css';

function HappyCustomers({ endCountCustomers, endCountDishes, endCountDrinks }) {
  const [customerCount, setCustomerCount] = useState(0);
  const [dishCount, setDishCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);

  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      const countUp = (endCount, setCount) => {
        if (typeof endCount !== 'number' || endCount < 1) {
          console.error("endCount must be a positive number");
          return;
        }

        const increment = Math.ceil(endCount / 100); // Adjust the speed of counting
        const timer = setInterval(() => {
          setCount(prevCount => {
            const newCount = prevCount + increment;
            if (newCount >= endCount) {
              clearInterval(timer);
              return endCount;
            }
            return newCount;
          });
        }, 20); // Adjust the interval speed in milliseconds

        return () => clearInterval(timer);
      };

      countUp(endCountCustomers, setCustomerCount);
      countUp(endCountDishes, setDishCount);
      countUp(endCountDrinks, setDrinkCount);
    }
  }, [isVisible, endCountCustomers, endCountDishes, endCountDrinks]);

  return (
    <div className="happy-customers" ref={ref}>
      <div className="overlay">
        <div className="counter-section">
          <h1>Happy Customers</h1>
          <h2>{customerCount}</h2>
        </div>
        <div className="counter-section">
          <h1>Dishes Served</h1>
          <h2>{dishCount}</h2>
        </div>
        <div className="counter-section">
          <h1>Total Number of Drinks</h1>
          <h2>{drinkCount}</h2>
        </div>
      </div>
    </div>
  );
}

export default HappyCustomers;

