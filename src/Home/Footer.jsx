import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = ()=>{
  return (
    <>
  <footer id="footer">
    <div id="logo"></div>
    <div class="links">
    <p><Link to="/contact">Contact</Link></p>
    <p><Link to="/about">About</Link></p>
    <p><Link to="/faq">FAQ</Link></p>
    <p><Link to="/rules">Rules</Link></p>
  </div>
  
  <div class="joinUs">
    <button><Link to="/registration">Sign Up</Link></button>
  </div>
  <hr />
  
  <div class="text">
    <p>All right reserved</p>
    <p>©2023</p>
  </div>
</footer>
    </>
  )
}

export default Footer;