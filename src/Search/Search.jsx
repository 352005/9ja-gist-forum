import React from 'react';
import iconClose from '../images/icon-close.svg';

const Search = ()=>{
  return (
   <>
    <div className='header'>
     <img className="closeBtn" src={iconClose} alt='close-btn' role='button' />
     <p>Search</p>
    </div>
    
    <div className='searchDiv'>
     <input type='search' name='search' placeholder='Search with letters, keywords or topic...' />
    </div>
    
    <div className='suggestion'>
     <h2>Search suggestion</h2>
    </div>
   </>
  )
}

export default Search;