import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import HomePage from './Components/HomePage/HomePage';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import RecipeCard from './Components/RecipeCard/RecipeCard';
import recipes from './Components/recipes';
import { CartProvider } from './Components/CartContext/CardContext';
import Cart from './Components/CartContext/Cart';
import MenuOffer from './Components/MenuOffer/MenuOffer';
import Footer from './Components/Footer/Footer';
import HappyCustomers from './Components/HappyCustomer/HappyCustomer';
import Sandwich from './Components/Sandwich/Sandwich';
import Wraps from './Components/Category/Wraps';
import Oats from './Components/Category/Oats';
import Vegetables from './Components/Category/Vegetables';
import Drinks from './Components/Category/Drinks';
import Salad from './Components/Category/Salad';
import RollDetail from './Components/RollDetail'; // Import the RollDetail component



const Home = () => (
    <div className="App">
        <Navbar />
        <LandingPage/>
        <div className="container1">
         <HomePage /> 
         <h2 className='popular'>Popular Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))} 
        </div>
        <MenuOffer/>
        </div>
        <HappyCustomers 
        endCountCustomers={437} // Replace with your desired number
        endCountDishes={125}     // Replace with your desired number
        endCountDrinks={45}     // Replace with your desired number
      />        
      <Footer/>
        </div>
);
       
       const App = () => {
        return (
          <CartProvider>
          <Router>
            <Navbar />
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/sandwich" element={<Sandwich/>}/>
                <Route path="/wraps" element={<Wraps/>}/>
                <Route path="/Drinks" element={<Drinks/>}/>
                <Route path="/Vegetables" element={<Vegetables/>}/>
                <Route path="/Oats" element={<Oats/>}/>
                <Route path="/Salad" element={<Salad/>}/>
                <Route path="/roll/:id" element={<RollDetail />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      );
    };

export default App;

