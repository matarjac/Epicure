import React from "react";
import restaurantsData from "../../../../restaurants-data.json";
import {IRestaurantCard} from "../../../../types/interfaces/IRestaurantCard";
import RestaurantCard from "../../../home/components/popularRestaurants/reataurantCard/RestaurantCard";
import "./restaurantsCards.css";


const RestaurantsCards:React.FC = ()=>{
    const data: IRestaurantCard[] = restaurantsData as IRestaurantCard[];
    return(
        <div id="restaurants-cards-page">
            {data.map((rest:IRestaurantCard)=>( <RestaurantCard 
                name={rest.name}
                img= {rest.img}
                chef= {rest.name}
                rating= {rest.rating} />
            ))}
        </div>
    );
}

export default RestaurantsCards;