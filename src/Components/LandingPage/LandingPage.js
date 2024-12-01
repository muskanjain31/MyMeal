import React from 'react';
import img1 from '../../assets/carousel 1.jpg';
import img2 from '../../assets/carousel 2.jpg';
import img3 from '../../assets/carousel 3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Carousel from 'react-bootstrap/Carousel';
import './LandingPage.css';

function UncontrolledExample() {
  return (
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='First slide' />
          <Carousel.Caption className="caption-first">
            <h3>Healthy food options available<br/><span className='captionone'>carefully curated for you</span></h3>
            <p>Nourish your body with our wide range of <br/>healthy food options, carefully curated for you</p>
            <button className='btn-1'>Order Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Second slide' />
          <Carousel.Caption className="caption-second">
            <h3>Discover a world of nutritious choices<br/><span className='captionone'>All your favorite healthy foods in one place</span> 
            </h3>
            <p>Discover a world of nutritious choices—all your favorite healthy foods in one place</p>
            <button className='btn-2'>Order Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} alt='Third slide' />
          <Carousel.Caption className="caption-third">
            <h3>Wholesome Sandwiches<br/><span className='captionone'>Fresh, Nutritious, and Irresistibly Delicious</span> </h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button className='btn-3'>Order Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
}
export default UncontrolledExample;
