import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Chefs from './components/chefs/Chefs';
import Restaurants from './components/reastaurants/Restaurants';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chefs' element={<Chefs/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
