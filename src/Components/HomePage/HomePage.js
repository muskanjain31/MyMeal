import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css'; // Import CSS file for styling

import img1 from '../../assets/image_prev_ui (19).png';
import img2 from '../../assets/image_prev_ui (20).png';
import img3 from '../../assets/image_prev_ui (21).png';
import img4 from '../../assets/image_prev_ui (22).png';
import img5 from '../../assets/image_prev_ui (25).png';
import img6 from '../../assets/image_prev_ui (23).png';

const HomePage = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (category) => {
    if (category === 'Sandwiches') {
      navigate('/sandwich');
    }
    else if (category === 'Wraps') {
      navigate('/wraps');
    }
    else if (category === 'Oats') {
      navigate('/Oats');
    }
    else if (category === 'Vegetables') {
      navigate('/Vegetables');
    }
    else if (category === 'Salad') {
      navigate('/Salad');
    }
    else if (category === 'Drinks') {
      navigate('/Drinks');
    }
  };

  return  (
    <div className="slider-container">
      <h2 className="slider-title">Categories</h2>
      <div className='main-box'>
        <Slider {...settings}>
          <div className="image-box-wrapper">
            <div className="image-box" onClick={() => handleImageClick('Salad')}>
              <img src={img2} alt="Salad" />
              <p>Salad</p>
            </div>
          </div>
          <div className="image-box-wrapper">
            <div className="image-box" onClick={() => handleImageClick('Sandwiches')}>
              <img src={img3} alt="Sandwiches" />
              <p>Sandwiches</p>
            </div>
          </div>
          <div className="image-box-wrapper">
            <div className="image-box" onClick={() => handleImageClick('Drinks')}>
              <img src={img1} alt="Drinks" />
              <p>Drinks</p>
            </div>
          </div>
          <div className="image-box-wrapper">
            <div className="image-box" onClick={() => handleImageClick('Wraps')}>
              <img src={img4} alt="Wraps" />
              <p>Wraps</p>
            </div>
          </div>
          <div className="image-box-wrapper">
            <div className="image-box" onClick={() => handleImageClick('Vegetables')}>
              <img src={img5} alt="Vegetables"/>
              <p>Vegetables</p>
            </div>
          </div>
          <div className="image-box-wrapper">
            <div className="image-box" onClick={() => handleImageClick('Oats')}>
              <img src={img6} alt="Oats" />
              <p>Oats</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
