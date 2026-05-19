import React from 'react';
import { useState } from 'react';

function Header() {
  const [btnName, setBtnName] = useState("Login");
  return (
   
    <div className='header'>
      <div className='logo-image'>
        <img src='logo.png' alt='Logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className='login-btn' onClick={() => {
            setBtnName(prevName => prevName === "Logout" ? "Login" : "Logout");
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header