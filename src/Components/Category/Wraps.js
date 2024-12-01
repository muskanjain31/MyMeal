import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Logo1 from '../../assets/Logo1.png';
import '../Sandwich/Sandwich.css';

const Wraps = () => {
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
          <h2>Healthy Wraps</h2>
          <p>A healthy Wraps is the foundation of any good lunch. Make it tasty, make it funny!</p>
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
                                checked={selectedCategory.includes(category)}
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
      <img src="https://img.freepik.com/free-photo/tortilla-with-added-ink-cuttlefish-with-chicken-vegetables_2829-10963.jpg?t=st=1721217530~exp=1721221130~hmac=04d194f5da727a0807fa765bfe304e64ac5e49d7ab454c964de3bdb8dae91ff0&w=900" />
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
    <h2 className='Name'>Wraps</h2>
    <div className="rolls-list">
     <RollItem 
        name="Soya Chaap Wraps"
        description="Soya chaap."
        originalPrice="£500.00"
        discountedPrice="£450.00"
        imgSrc="https://img.freepik.com/free-photo/shawarma-from-juicy-beef-lettuce-tomatoes-cucumbers-paprika-onion-pita-bread-with-spinach-diet-menu_2829-14466.jpg?t=st=1721217410~exp=1721221010~hmac=9fb7fc9dbb8ba7c00a967240276dd6f66dac6e1d16bba9ad581f4937f7b00478&w=900"
      />
      <RollItem 
        name="Chowmein Wraps"
        description="Chowmein roll and noodle .."
        originalPrice="£450.00"
        discountedPrice="£400.00"
        imgSrc="https://img.freepik.com/free-photo/burritos-wraps-with-chicken-vegetables-chicken-burrito-mexican-food_2829-6980.jpg?t=st=1721217498~exp=1721221098~hmac=35b1d19a438edfbd0231a024664955020b64027fe6c084cb24e3a7a4a35f8ed1&w=900"
      />
       <RollItem 
        name="Soya Chaap Wraps"
        description="Soya chaap."
        originalPrice="£500.00"
        discountedPrice="£450.00"
        imgSrc="https://img.freepik.com/free-photo/burritos-wraps-with-minced-beef-vegetables-wooden-surface_2829-8275.jpg?t=st=1721217475~exp=1721221075~hmac=94ce17eba1ed6d868506ed6cd7973876103bcaaacc23152e413f8407aa91ae68&w=900"
      />
   <RollItem 
        name="Chili Soya Wraps"
        description="Soya Manchurian and Soya "
        originalPrice="£390.00"
        discountedPrice="£300.00"
        imgSrc="https://img.freepik.com/free-photo/tortilla-with-added-ink-cuttlefish-with-chicken-vegetables_2829-10963.jpg?t=st=1721217530~exp=1721221130~hmac=04d194f5da727a0807fa765bfe304e64ac5e49d7ab454c964de3bdb8dae91ff0&w=900"
      />
     
    </div>
    </>
  );
}

const RollItem = ({ name, description, originalPrice, discountedPrice, imgSrc }) => {
    const [quantity, setQuantity] = useState(1);
  
    const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
    };
  

    return (
      <>
        <div className="roll-item">
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
        imgSrc="https://img.freepik.com/free-photo/shawarma-from-juicy-beef-lettuce-tomatoes-cucumbers-paprika-onion-pita-bread-with-spinach-diet-menu_2829-14466.jpg?t=st=1721217410~exp=1721221010~hmac=9fb7fc9dbb8ba7c00a967240276dd6f66dac6e1d16bba9ad581f4937f7b00478&w=900"
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

export default Wraps;
