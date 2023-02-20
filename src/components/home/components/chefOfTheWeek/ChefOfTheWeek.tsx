import React from "react";
import './chefOfTheWeek.css';
import { useDispatch, useSelector } from "react-redux";
import {filterRestaurants} from "../../../../store/slices/restaurantsSlice";
import { useEffect } from "react";
import { filterChefs } from "../../../../store/slices/chefsSlice";
import IRestaurantCard from "../../../../types/interfaces/IRestaurantCard";

const ChefOfTheWeek: React.FC = ()=>{
    const dispatch = useDispatch();
    const restaurantsData = useSelector((state:any)=> state.restaurants.value);
    const chefData = useSelector((state:any) => state.chefs.value);

    useEffect(()=>{
        dispatch(filterRestaurants("chef of the week"));
        dispatch(filterChefs("chef of the week"));

    },[])


    // restaurantsData.filter((rest:IRestaurantCard)=> rest.id === chefData[0].id);
    return (
        <div id="chef-of-the-week-section">
            <p className="chef-of-the-week-titles">Chef of the week:</p>
            <div id="chefs-description">
                <div id="chef-image-container">
                    <img src={chefData[0].img} alt="" />
                    <span>{chefData[0].name}</span>
                </div>
                <p>Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.</p>
            </div>
            <p className="chef-of-the-week-titles chefs-restaurants-title">{chefData[0].name}’s Restaurants</p>
            <div id="chefs-restaurants">
                {restaurantsData.slice(0,3).map((rest:IRestaurantCard)=>(
                    <div className="week-restaurant-card">
                    <img src={rest.img} alt="" />
                    <span>{rest.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChefOfTheWeek;