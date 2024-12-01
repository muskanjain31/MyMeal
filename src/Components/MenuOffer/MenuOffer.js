import React from 'react';
import './MenuOffer.css'; // Assuming you have a CSS file for styling

function MenuOffer() {
  return (
    <div className="box2">
      <div className="menu-section">
        <div className="featured-food">
          <h2>Offers</h2>
          <div className="food-carousel">
            <div className="food-item">
              <img src="https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-instagram-post-template_106176-2072.jpg?t=st=1721043857~exp=1721047457~hmac=281e19364ac04399737bac7e7f452911001b4b28dde4b5c218217ce434420eac&w=740" alt="Food 1" />
            </div>
            <div className="food-item">
              <img src="https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-template_106176-358.jpg?t=st=1721043897~exp=1721047497~hmac=abd6df13275b3a7ed5c957c818bcc8d0119e204bb84a35ae67a17916d37afe28&w=740" alt="Food 2" />
            </div>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <div className="menu">
          <h2>Our Menu</h2>
          <ul className="menu-list">
            <li className="menu-list2">Classic Nachos <span>$499.00</span></li>
            <li>Nachos Grande <span>$249.00</span></li>
            <li className="menu-list2">Avocado Shell Stuffed <span>$150.00</span></li>
            <li>Stuffed Mushroom <span>$199.00</span></li>
            <li className="menu-list2">Baked Potato Jackets <span>$99.00</span></li>
            <li>Mexican Taco <span>$899.00</span></li>
            <li className="menu-list2">Tex-Mex Chicken <span>$1250.00</span></li>
            <li>Quesadillas Acapulco <span>$399.00</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuOffer;
