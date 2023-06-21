import React from 'react';
import { Link } from 'react-router-dom';
import MenuNav from './MenuNav';
import Topic from './Topic';
import Footer from './Footer';
import introBackground from '../images/20230609_154356.jpg';
import community from '../images/social-network-connections_1010-422.webp';
import knowledge from '../images/college-project-concept-illustration_114360-13751.webp';
import information from '../images/customer-service-guide-abstract-concept_335657-3033.webp';
import './home.css'

const Home = ()=>{
  return (
    <>
    <MenuNav />
    <div className='intro'>
    <img className='background' src={introBackground} alt='background'/>
    <div className='introText'>
    <h2 className='green'>Wasup 9ja</h2>
    <p>Welcome to our community! <br/>We're excited to bring Nigerians together to share ideas, discuss pressing issues, and connect with each other. Whether you're looking to join a lively debate or simply want to catch up with like-minded individual, this is the place for you.</p>
    <p>So come on in, introduce yourself, and let's get started.</p>
    </div>
    <div className="joinUs1">
    <button><Link to="/registration">Sign Up</Link></button>
    </div>
  </div>
  <Topic />
  
  <div className='offer'>
  <h2 className='green'>Why join us?</h2>
  <div>
  <img src={community} alt='community'/>
  <p><b>Join a Nigerian community</b></p>
  <p>Join a community with like-minded people to share ideas, insights, information and other things that you both understand</p>
  </div>
  
  <div>
  <img src={knowledge} alt='knowledge'/>
  <p><b>Share knowledge</b></p>
  <p>Share and gain knowledge from different people from different places</p>
  </div>
  
  <div>
  <img src={information} alt='information'/>
  <p><b>Get informed</b></p>
  <p>Get information on the new happenings around the country and the world</p>
  </div>
  </div>
  <Footer />
    </>
  )
}

export default Home;