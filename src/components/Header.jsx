import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [btnName, setBtnName] = useState("Login");
  //If no defendency  array => runs on every render
  // if defendency array is empty => runs only on first render just once

  useEffect(() => {
    console.log("Header component mounted");
  },[]); 
  return (
   
    <div className='header'>
      <div className='logo-image'>
        <img src='logo.png' alt='Logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
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