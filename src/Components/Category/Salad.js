import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Logo1 from '../../assets/Logo1.png';
import '../Sandwich/Sandwich.css';

const Salad = () => {
  return (
    <>
  <div className="bg-container">
  <img
          src='https://img.freepik.com/free-photo/sweet-Salad_144627-34981.jpg?t=st=1721135823~exp=1721139423~hmac=328b5446525993e1b6e249c4e81b9ae5a4dbe4846d743b68c4f2683f8c0c91b8&w=996'
          alt="bg"
          className="bg"
        />
        <div className="bg-overlay"></div>
        <div className="bg-text">
          <h2>Healthy Salad</h2>
          <p>A healthy Salad is the foundation of any good lunch. Make it tasty, make it funny!</p>
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
      <img src="https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20128.jpg?t=st=1721218402~exp=1721222002~hmac=6bf5ca3fa9bc98f876f39351dce4c5faf092971d2a0263063d81ad7fde493cf2&w=900" />
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
    <h2 className='Name'>Salad</h2>
    <div className="rolls-list">
     <RollItem 
        name="Soya Chaap Salad"
        description="Soya chaap."
        originalPrice="£500.00"
        discountedPrice="£450.00"
        imgSrc="https://img.freepik.com/free-photo/salad-with-tomatoes-cheese-cilantro-sweet-sour-sauce-georgian-cuisine-healthy-food_2829-7017.jpg?t=st=1721218544~exp=1721222144~hmac=b151fafffb18902b40502b165f5bb5a08a455f4dc663c96823564ab8e40f3a22&w=900"
      />
      <RollItem 
        name="Chowmein Salad"
        description="Chowmein roll and noodle .."
        originalPrice="£450.00"
        discountedPrice="£400.00"
        imgSrc="https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20128.jpg?t=st=1721218402~exp=1721222002~hmac=6bf5ca3fa9bc98f876f39351dce4c5faf092971d2a0263063d81ad7fde493cf2&w=900"
      />
       <RollItem 
        name="Soya Chaap Salad"
        description="Soya chaap."
        originalPrice="£500.00"
        discountedPrice="£450.00"
        imgSrc="https://img.freepik.com/free-photo/healthy-salad-with-fish-baked-salmon-tomatoes-lime-lettuce-healthy-dinner_2829-4275.jpg?t=st=1721218582~exp=1721222182~hmac=9797642efab7423d521c5bd38d3b8da6511569d466689b2a553d1b26c5825975&w=900"
      />
   <RollItem 
        name="Chili Soya Salad"
        description="Soya Manchurian and Soya "
        originalPrice="£390.00"
        discountedPrice="£300.00"
        imgSrc="https://img.freepik.com/free-photo/fresh-salad-with-vegetables-tomatoes-red-onions-lettuce-quail-eggs-healthy-food-diet-concept-vegetarian-food_2829-20246.jpg?t=st=1721218598~exp=1721222198~hmac=683758b02fa9faeda44cff1ca2ff971a709a8c14e2f2063196c3d36a94669ad8&w=900"
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
        imgSrc="https://img.freepik.com/free-photo/salad-with-tomatoes-cheese-cilantro-sweet-sour-sauce-georgian-cuisine-healthy-food_2829-7017.jpg?t=st=1721218544~exp=1721222144~hmac=b151fafffb18902b40502b165f5bb5a08a455f4dc663c96823564ab8e40f3a22&w=900"
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

export default Salad;
