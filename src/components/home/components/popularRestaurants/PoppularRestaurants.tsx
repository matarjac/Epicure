import React from "react";
import "./popularRestaurants.css";
import RestaurantCard from "./reataurantCard/RestaurantCard";
import IRestaurantCard from "../../../../types/interfaces/IRestaurantCard";
import data from "../../../../data.json";


const PopularRestaurants: React.FC = () => {
    const restaurantsToRender:IRestaurantCard[] = 
    [
        {
            "name": "Hasalon",
            "img": "https://static.wixstatic.com/media/6dd698_e1bea281cc964ac49794648e3496237d~mv2.jpg/v1/fit/w_2500,h_1330,al_c/6dd698_e1bea281cc964ac49794648e3496237d~mv2.jpg",
            "chef": "Eyal Shani",
            "rating": 4
        },
        {
            "name": "Nur",
            "img": "https://images.squarespace-cdn.com/content/v1/586e6d2ee6f2e1de113055c8/1625065126230-VAGJDTDXP1A27YTKQRF4/NUR_032317_dishes_Photographed_by_Paul_Wagtouicz_75.jpg?format=2500w",
            "chef": "Meir Adoni",
            "rating": 5
        },
        {
            "name": "Luchiano",
            "img": "./Assets/restaurants-images/tiger-lily.svg",
            "chef": "Meir Adoni",
            "rating": 4
        }

    ]
    console.log(restaurantsToRender);

      return (
          <div className="populars-container">
              <h2>popular restaurant in epicure:</h2>
              <div className="popular-cards-container">
                {restaurantsToRender.map((item)=>{
                    return <RestaurantCard img={item.img} name={item.name} chef={item.chef} rating={item.rating}/>
                })}
                </div>
          </div>
      );
    }

export default PopularRestaurants;