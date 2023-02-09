import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './home.css';
import Navbar from "../navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PopularRestaurants from './components/popularRestaurants/PoppularRestaurants';
import PopularDishes from "./components/popularDishes/PopularDishes";

const Home:React.FC = ()=>{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <PopularRestaurants/>
            <PopularDishes/>
        </div>
    );
}

export default Home;