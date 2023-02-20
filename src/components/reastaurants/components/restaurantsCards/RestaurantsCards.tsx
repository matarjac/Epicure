import React from "react";
import restaurantsData from "../../../../store/slices/restaurantsSlice";
import {IRestaurantCard} from "../../../../types/interfaces/IRestaurantCard";
import RestaurantCard from "../../../home/components/popularRestaurants/reataurantCard/RestaurantCard";
import "./restaurantsCards.css";
import {useSelector} from 'react-redux';


const RestaurantsCards:React.FC = ()=>{

    const restaurantsData = useSelector(
        (state:any) => state.restaurants.value);

    return(
        <div id="restaurants-cards-page">
            {restaurantsData.map((rest:IRestaurantCard)=>( <RestaurantCard 
                name={rest.name}
                img= {rest.img}
                chef= {rest.name}
                rating= {rest.rating} />
            ))}
        </div>
    );

}

export default RestaurantsCards;