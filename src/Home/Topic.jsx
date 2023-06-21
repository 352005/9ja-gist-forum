import React from 'react';
import { Link }from 'react-router-dom';
import './topic.css';
import governmentImg from '../images/f8d7ed14b6315cf32e94d99b13db76b2.jpg';

const Topic = ()=>{
  return (
    <>
    <h2 className='header'>What do you want to talk about?</h2>
    <div className='government'>
    <i class="fa-solid fa-gavel icons"></i><p className='text'>Government</p>
    
    <div className='sample'>
    <p><b>Join us</b> as we talk about the latest happenings in the government sector of Nigeria</p>
    <Link to='/discuss'>Join the discussion  <i class="fa-solid fa-arrow-right"></i></Link>
    <img src={governmentImg} alt='government section' />
    </div>
    </div>
    
    <div className='government sport'>
    <i class="fa-solid fa-volleyball icons"></i><p className='text'>Sport</p>
    
    <div className='sample'>
    <p><b>Comment on</b> the latest discussions on football, basketball and all other sports</p>
    <Link to='/discuss'>Join the talk  <i class="fa-solid fa-arrow-right"></i></Link>
    <img src={governmentImg} alt='government section' />
    </div>
    </div>
    
    <div className='government entertain'>
    <i class="fa-solid fa-notes-medical icons"></i><p className='text'>Health</p>
    
    <div className='sample'>
    <p><b>Join us</b> on the important talk concerning life and health </p>
    <Link to='/discuss'>Add your views  <i class="fa-solid fa-arrow-right"></i></Link>
    <img src={governmentImg} alt='government section' />
    </div>
    </div>
    
    <div className='search'>
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type='search' name='search' placeholder='Search for more topics of interest' />
    </div>
    </>
  )
}

export default Topic;