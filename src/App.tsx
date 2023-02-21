import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Chefs from './components/chefs/Chefs';
import Restaurants from './components/reastaurants/Restaurants';
import RestaurantPage from './components/reastaurants/components/restaurantsPage/RestaurantPage';
import { idText } from 'typescript';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chefs' element={<Chefs/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/restaurants/:id' element={<RestaurantPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
