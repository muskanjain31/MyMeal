import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Logo1 from '../../assets/Logo1.png';
import '../Sandwich/Sandwich.css';

const Drinks = () => {
  return (
    <>
  <div className="bg-container">
  <img
          src='https://img.freepik.com/free-photo/sweet-Drinks_144627-34981.jpg?t=st=1721135823~exp=1721139423~hmac=328b5446525993e1b6e249c4e81b9ae5a4dbe4846d743b68c4f2683f8c0c91b8&w=996'
          alt="bg"
          className="bg"
        />
        <div className="bg-overlay"></div>
        <div className="bg-text">
          <h2>Healthy Drinks</h2>
          <p>A healthy Drinks is the foundation of any good lunch. Make it tasty, make it funny!</p>
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
      <img src="https://img.freepik.com/free-photo/view-delicious-milkshake-drink-with-bananas_23-2150822921.jpg?t=st=1721219239~exp=1721222839~hmac=9c5c8a84b2e1119d310da02eb01c640ef643eacc0403311ae612c0cb2072b254&w=900" />
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
    <h2 className='Name'>Drinks</h2>
    <div className="rolls-list">
     <RollItem 
        name="Soya Chaap Drinks"
        description="Soya chaap."
        originalPrice="£500.00"
        discountedPrice="£450.00"
        imgSrc="https://img.freepik.com/free-photo/high-angle-green-smoothie-with-seeds_23-2148574187.jpg?t=st=1721219283~exp=1721222883~hmac=803b932fbed61f3d4366c0b94c7ae4ab917fee9520d7d1fddd19bfd8646e96f8&w=360"
      />
      <RollItem 
        name="Chowmein Drinks"
        description="Chowmein roll and noodle .."
        originalPrice="£450.00"
        discountedPrice="£400.00"
        imgSrc="https://img.freepik.com/free-photo/view-delicious-milkshake-drink-with-bananas_23-2150822921.jpg?t=st=1721219239~exp=1721222839~hmac=9c5c8a84b2e1119d310da02eb01c640ef643eacc0403311ae612c0cb2072b254&w=900"
      />
       <RollItem 
        name="Soya Chaap Drinks"
        description="Soya chaap."
        originalPrice="£500.00"
        discountedPrice="£450.00"
        imgSrc="https://img.freepik.com/free-photo/high-angle-avocado-smoothie-with-seeds_23-2148574211.jpg?t=st=1721219361~exp=1721222961~hmac=b455ecfc581822d362c9517f8e7b91be5188ccb23abfa11d9ad7ce0ab4419d69&w=740"
      />
   <RollItem 
        name="Chili Soya Drinks"
        description="Soya Manchurian and Soya "
        originalPrice="£390.00"
        discountedPrice="£300.00"
        imgSrc="https://img.freepik.com/free-photo/high-angle-green-smoothie-with-seeds_23-2148574187.jpg?t=st=1721219283~exp=1721222883~hmac=803b932fbed61f3d4366c0b94c7ae4ab917fee9520d7d1fddd19bfd8646e96f8&w=360"
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
        imgSrc="https://img.freepik.com/free-photo/high-angle-avocado-smoothie-with-seeds_23-2148574211.jpg?t=st=1721219361~exp=1721222961~hmac=b455ecfc581822d362c9517f8e7b91be5188ccb23abfa11d9ad7ce0ab4419d69&w=740"
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

export default Drinks;
