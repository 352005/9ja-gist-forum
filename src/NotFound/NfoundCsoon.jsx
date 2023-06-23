import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/eafddbb57c78ab55c48a70d973219415_1.jpg';
import './notFound.css';

const NfoundCsoon = (props)=>{
  return (
    <>
    <div className={`notFound ${props.className}`}>
    <h1>{props.message}</h1>
    <img src={notFound} alt='A Nigerian map' />
    <p>{props.text}</p>
    <p className='link'><Link to='/'>Go Home</Link></p>
    </div>
    </>
  )
}

export default NfoundCsoon;