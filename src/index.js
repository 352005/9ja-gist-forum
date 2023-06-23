import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Login/Form';
import Register from './Register/Register';
import CreatePassword from './ForgotPassword/CreatePassword';
import Home from './Home/Home';
import Layout from './Layout';
import NotFound from './NotFound/NotFound';
import ComingSoon from './NotFound/ComingSoon';
import Search from './Search/Search';

const App = ()=>{
  return(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>} />
  <Route path='login' element={<Form/>} />
  <Route path='discuss' element={<ComingSoon/>} />
  <Route path='register' element={<Register/>} />
  <Route path='search' element={<Search/>} />
  <Route path='create-password' element={<CreatePassword/>} />
  <Route path='*' element={<NotFound/>} />
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
