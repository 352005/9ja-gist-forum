import { useState } from 'react';
import { Link } from 'react-router-dom';
import iconHamburger from '../images/icon-hamburger.svg';
import logo from '../images/20230207_083335.png';
import iconClose from '../images/icon-close.svg';
import './menu.css';
import './nav.css';

const MenuNav = ()=>{
  const [menuClicked, setMenuClicked] = useState(false);
  
const menu = (
<div id="menu">
<img className="closeBtn" src={iconClose} alt='close-btn' role='button' onClick={ ()=> setMenuClicked(false)} />

<div className="list">
<div className="userLink">
<p><Link to="/">Home</Link></p>
<p><Link to="/discuss">Discuss</Link></p>
<p><Link to="/profile">Profile</Link></p>
</div>
  
<div className="infoLink">
<p><Link to="/faq">FAQ</Link></p>
<p><Link to="/contact">Contact Us</Link></p>
<p><Link to="/rules">Rules</Link></p>
</div>
  
<div className="buttons">
<button className='btn1'><Link to="/login">Login</Link></button>
 <button><Link to="/registration">Sign Up</Link></button>
</div>
</div>
</div>
 )
 
 return(
 <>
  <div id="navBar">
  <nav>
  <div className="menuBar1">
  <p><Link to="/">Home</Link></p>
  <p><Link to="/discuss">Discuss</Link></p>
  <p><Link to="/profile">Profile</Link></p>
  </div>
    
 <img className="menuBtn" src={iconHamburger} alt='menu-btn' role='button' onClick={ ()=> setMenuClicked(true)} />
 
 <img className="logo" src={logo} alt='logo' />
 
 <p className='navDiscuss'><Link to='/discuss'>Discuss  <i class="fa-solid fa-arrow-right fa-fade"></i></Link></p>
   
<div className="menuBar2">
 <p><Link to="/faq">FAQ</Link></p>
 <p><Link to="/contact">Contact Us</Link></p>
 <p><Link to="/rules">Rules</Link></p>
</div>
</nav>
</div>

 {menuClicked? menu : ''}
 </>
 )
}

export default MenuNav;