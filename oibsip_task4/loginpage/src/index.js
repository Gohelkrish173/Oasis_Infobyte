import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import LoginPage from './LoginPage';
import Home from './HomePage';
import Registor from './Registor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Registor' element={<Registor/>}/>
    </Routes>
  </BrowserRouter>
);
