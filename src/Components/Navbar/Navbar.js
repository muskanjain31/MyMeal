import React from 'react'
import Cart from '../../assets/image.png';
import Profile from '../../assets/image (5).png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo1 from '../../assets/Logo1.png';
import './Navbar.css';
import { Link } from 'react-router-dom';



function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
<Container fluid>
      <Navbar.Brand href="#home" className="navbar-brand">
          <img src={Logo1} alt="Logo" className="d-inline-block align-top" />
         My<span className='brand-text'>Meal</span>
        </Navbar.Brand>       
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link">Our Food</Nav.Link>
            <Nav.Link href="#link">Order Now</Nav.Link>            
            <Nav.Link as={Link} to="/cart">
              <img src={Cart}  alt="Cart" width="30"  height="30"  className="d-inline-block align-top"/>
            </Nav.Link>
            <Nav.Link href="#profile">
            <img src={Profile}  alt="profile" width="30"  height="30"  className="d-inline-block align-top"/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
}

export default BasicExample;