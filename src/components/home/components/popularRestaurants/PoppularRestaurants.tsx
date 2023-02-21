import React, { useEffect } from "react";
import "./popularRestaurants.css";
import RestaurantCard from "./reataurantCard/RestaurantCard";
import {IRestaurantCard} from "../../../../types/interfaces/IRestaurantCard";
import { useSelector,useDispatch } from "react-redux";
import { filterRestaurants } from "../../../../store/slices/restaurantsSlice";
import { Istore } from "../../../../types/interfaces/Istore";


const PopularRestaurants: React.FC = () => {
    const restaurantsData = useSelector((state:Istore)=>state.restaurants.value);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(filterRestaurants('all'));
    }, [])

      return (
          <div className="populars-container">
              <h2>popular restaurant in epicure:</h2>
              <div className="popular-cards-container">
                {restaurantsData.slice(0,3).map((item:IRestaurantCard)=>{
                    return <RestaurantCard img={item.img} name={item.name} chef={item.chef} rating={item.rating}/>
                })}
                </div>
          </div>
      );
    }
    
export default PopularRestaurants;