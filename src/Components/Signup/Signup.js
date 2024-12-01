import React from 'react';
import './Signup.css'; // Importing CSS file for styling
import SignupPhoto from '../../assets/Signupphoto.jpg';

const Signup = ({ alreadySignedUp }) => {
  return (
    <div className="signup-container">
      <div className="signup">
        <div className="signup-left">
          <div className="company-info">
            <img src={SignupPhoto} alt="Company Photo" className="company-photo" />
          </div>
        </div>
        <div className="signup-right">
          <h2 className="signup-heading">Sign Up</h2>
          <form className="signup-form">
            <input type="text" placeholder="Full Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          {alreadySignedUp || <p className="login-text">Already signed up? <a href="/login">Login</a></p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
