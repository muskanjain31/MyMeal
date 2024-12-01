import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Logo1 from '../../assets/Logo1.png';
import './Sandwich.css';

const Sandwich = () => {
  return (
    <>
  <div className="bg-container">
  <img
          src='https://img.freepik.com/free-photo/sweet-sandwich_144627-34981.jpg?t=st=1721135823~exp=1721139423~hmac=328b5446525993e1b6e249c4e81b9ae5a4dbe4846d743b68c4f2683f8c0c91b8&w=996'
          alt="bg"
          className="bg"
        />
        <div className="bg-overlay"></div>
        <div className="bg-text">
          <h2>Healthy Sandwich</h2>
          <p>A healthy sandwich is the foundation of any good lunch. Make it tasty, make it funny!</p>
        </div>
      </div>
      <div className="container">
      <Sidebar />
      <MainContent />
    </div>
    </>
  );
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Details />
      <Advertisement />
    </div>
  );
}

const Details = () => {
  const foodCategories = ['Salad', 'Sandwiches', 'Wraps', 'Drinks', 'Vegetable', 'Oats'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleRadioChange = (category) => {
      setSelectedCategory(category); // Update selected category state
      // Navigate to different paths based on selected category
      switch (category) {
        case 'Salad':
            navigate('/Salad');
            break;
        case 'Sandwiches':
            navigate('/sandwich');
            break;
        case 'Wraps':
            navigate('/wraps');
            break;
        case 'Drinks':
            navigate('/Drinks');
            break;
        case 'Vegetable':
            navigate('/Vegetables');
            break;
        case 'Oats':
            navigate('/Oats');
            break;
        default:
            navigate('/');
            break;
    }
  };
    return (
        <div className="filter-container">
            <div className="logo-container">
                <img src={Logo1} alt="Logo" className="logo" />
                My<span className='brand-text'>Meal</span>
            </div>
            <div className="categories-container">
                {foodCategories.map((category, index) => (
                    <div key={index} className="category-item">
                        <label>
                            <input
                                type="radio"
                                value={category}
                                checked={selectedCategory === category}
                                onChange={() => handleRadioChange(category)}
                            /> {category}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}


const Advertisement = () => {
  return (
    <div className="advertisement">
      <h3>Advertisement</h3>
      <img src="https://img.freepik.com/free-photo/close-up-boiled-egg-tomatoes-sandwich_23-2148590168.jpg?t=st=1721088650~exp=1721092250~hmac=d5325dd10c4a19fff8b3a30262967257862808b518d8e39c1fba0bed4cc6b869&w=900" alt="Advertisement" />
    </div>
  );
}

const MainContent = () => {
  return (
    <div className="main-content">
        <div className='box'>  <RollsList /></div>
      <BestSellingProducts />
    </div>
  );
}



const RollsList = () => {
  return (
    <>
    <h2 className='Name'>Sandwiches</h2>
    <div className="rolls-list">
     <RollItem 
        name="Soya Chaap Sandwich"
        description="Soya chaap."
        originalPrice="£500.00"
        discountedPrice="£450.00"
        imgSrc="https://img.freepik.com/free-photo/close-up-boiled-egg-tomatoes-sandwich_23-2148590168.jpg?t=st=1721088650~exp=1721092250~hmac=d5325dd10c4a19fff8b3a30262967257862808b518d8e39c1fba0bed4cc6b869&w=900"
      />
      <RollItem 
        name="Chowmein Sandwich"
        description="Chowmein roll and noodle .."
        originalPrice="£450.00"
        discountedPrice="£400.00"
        imgSrc="https://img.freepik.com/free-photo/close-up-avocado-toast-plate_23-2148893591.jpg?t=st=1721088601~exp=1721092201~hmac=cc80755360298c972284d9891a868c6baf264269d25fda16c7c494e3d05c6dc5&w=360"
      />
       <RollItem 
        name="Soya Chaap Sandwich"
        description="Soya chaap."
        originalPrice="£500.00"
        discountedPrice="£450.00"
        imgSrc="https://img.freepik.com/free-photo/close-up-boiled-egg-tomatoes-sandwich_23-2148590168.jpg?t=st=1721088650~exp=1721092250~hmac=d5325dd10c4a19fff8b3a30262967257862808b518d8e39c1fba0bed4cc6b869&w=900"
      />
   <RollItem 
        name="Chili Soya Sandwich"
        description="Soya Manchurian and Soya "
        originalPrice="£390.00"
        discountedPrice="£300.00"
        imgSrc="https://img.freepik.com/free-photo/high-angle-sandwiches-with-greens-cucumber_23-2148893624.jpg?t=st=1721088581~exp=1721092181~hmac=f9d32ce0e0f19d031da85c76846810814580d8bcc36d09fbdfc452b0fb796065&w=900"
      />
     
    </div>
    </>
  );
}

const RollItem = ({id, name, description, originalPrice, discountedPrice, imgSrc }) => {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
    };
    const handleRollClick = () => {
      navigate(`/roll/${id}`); 
    };

    return (
      <>
    <div className="roll-item" onClick={handleRollClick}>
    <div className="img-frame">
            <img src={imgSrc} alt={name} />
          </div>
          <div className="roll-content">
            <div className="roll-details1">
              <h4>{name}</h4>
              <p>{description}</p>
             <div className="price">
              <p><strike>{originalPrice}</strike> <div className='price1'>{ discountedPrice} </div></p>
              </div> 
            </div>
            <div className = "roll-details">
              <div className = "quantity-counter">
                {/* <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button> */}
                <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
                {/* <button onClick={() => setQuantity(quantity + 1)}>+</button> */}
              </div>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        </>
      );
    }

   
   
  

const BestSellingProducts = () => {
  return (
    <div className="best-selling">
      <h3>Best Selling Products</h3>
      <BestSellerItem 
        name="Chili Soya Roll"
        originalPrice="£390.00"
        discountedPrice="£300.00"
        imgSrc="https://img.freepik.com/free-photo/close-up-boiled-egg-tomatoes-sandwich_23-2148590168.jpg?t=st=1721088650~exp=1721092250~hmac=d5325dd10c4a19fff8b3a30262967257862808b518d8e39c1fba0bed4cc6b869&w=900"
      />
      {/* Add more BestSellerItem components as needed */}
    </div>
  );
}

const BestSellerItem = ({ name, originalPrice, discountedPrice, imgSrc }) => {
  return (
    <div className="best-seller-item">
      <img src={imgSrc} alt={name} />
      <div className="product-details">
        <h4>{name}</h4>
        <p><strike>{originalPrice}</strike> {discountedPrice}</p>
        <button>Order Now</button>
      </div>
    </div>
  );
}
const RollsList1 = () => {
  const rolls = [
    { id: 1, name: 'Soya Chaap Sandwich', description: 'Soya chaap.', originalPrice: '£500.00', discountedPrice: '£450.00', imgSrc: 'https://img.freepik.com/free-photo/close-up-boiled-egg-tomatoes-sandwich_23-2148590168.jpg' },
    { id: 2, name: 'Chowmein Sandwich', description: 'Chowmein roll and noodle.', originalPrice: '£450.00', discountedPrice: '£400.00', imgSrc: 'https://img.freepik.com/free-photo/close-up-avocado-toast-plate_23-2148893591.jpg' },
    // Add more rolls as needed
  ];

  return (
    <>
      <h2 className='Name'>Sandwiches</h2>
      <div className="rolls-list">
        {rolls.map(roll => (
          <RollItem 
            key={roll.id} 
            id={roll.id} 
            name={roll.name} 
            description={roll.description} 
            originalPrice={roll.originalPrice} 
            discountedPrice={roll.discountedPrice} 
            imgSrc={roll.imgSrc} 
          />
        ))}
      </div>
    </>
  );
};

export default Sandwich;
