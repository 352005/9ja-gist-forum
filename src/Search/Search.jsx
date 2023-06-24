import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconClose from '../images/icon-close2.svg';
import './search.css';

const Search = ()=>{
  let navigate = useNavigate();
  const [showSuggestion,setShowSuggestion] = useState(false);
  const [valueEmpty,setValueEmpty] = useState({value: ''});
  
  const suggestion = (
    <div className='suggestion'>
     <p>Search suggestions</p>
    </div>
  )
  
  const func = (e)=>{
    setShowSuggestion(true);
    setValueEmpty({value: e.target.value});
  }
  
  return (
   <>
    <div className='searchHeader'>
     <img className="closeBtn" src={iconClose} alt='close-btn' role='button' onClick={() => navigate("/")} />
     <p>Search</p>
    </div>
    
    <div className='searchDiv'>
    <i class="fa-solid fa-magnifying-glass"></i>
     <input type='search' name='search' placeholder='Search with letters, keywords or topic...' onChange={func} />
    </div>
    
    {(showSuggestion && valueEmpty.value !== '')? suggestion : ''}
   </>
  )
}

export default Search;