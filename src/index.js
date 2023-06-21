import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Login/Form';
import Register from './Register/Register';
import CreatePassword from './ForgotPassword/CreatePassword';
import Home from './Home/Home';
import Layout from './Layout';
import ComingSoon from './Coming-soon/Coming';

const App = ()=>{
  return(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>} />
  <Route path='login' element={<Form/>} />
  <Route path='register' element={<Register/>} />
  <Route path='create-password' element={<CreatePassword/>} />
  <Route path='*' element={<ComingSoon/>} />
  </Route>
  </Routes>
  </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
