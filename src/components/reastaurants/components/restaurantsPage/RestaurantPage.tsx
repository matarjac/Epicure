import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../navbar/Navbar";
// import HeroRestaurantPage from "./hero/HeroRestaurantPage";
import { useSelector } from "react-redux";
import { Istore } from "../../../../types/interfaces/Istore";
import { useDispatch } from "react-redux";
import { filterRestaurants } from "../../../../store/slices/restaurantsSlice";
import IRestaurantCard from "../../../../types/interfaces/IRestaurantCard";
import "./restaurantPage.css";
import { current } from "@reduxjs/toolkit";
import Footer from "../../../home/components/footer/Footer";


const RestaurantPage: React.FC = ()=>{
    const { id } = useParams();
    // const dispatch = useDispatch();
    const restaurantsData = useSelector((state:Istore)=>state.restaurants.value);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(filterRestaurants('all'));
    }, [])
    const currentRest = restaurantsData.filter((rest)=>rest.id==id)[0];
    console.log(currentRest);
    // useEffect(()=>{
    //     dispatch(filterRestaurants('all'));
    // },[]);

    return(

        <div className="restaurant-page">
            <Navbar/>
            <div id="restaurant-details-hero">
                <img id="rest-hero-img" src={currentRest.img} alt="" />
                <h1>{currentRest.name}</h1>
                <span>{currentRest.chef}</span>
                <span>{currentRest.openHour}</span>
            </div>
            <div className="dishes-category-buttons-container">
                <button>Breakfast</button>
                <button>Launch</button>
                <button>Dinner</button>
            </div>
            <div>
                {/* Render dishes */}
            </div>
            <Footer/>
        </div>
    )
}

export default RestaurantPage;