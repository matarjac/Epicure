import React from "react";
import "./popularDishes.css";
import DishCard from "./dishCard/DishCard";
import IDishCard from "../../../../types/interfaces/IDishCard";
import data from "../../../../data.json";
import FoodType from "../../../../types/interfaces/FoodType";


const PopularDishes: React.FC = () => {
    const dishesToRender:IDishCard[] = 
    [
        {
            "img": "./Assets/dishes/pad.svg",
            "name": "Pad Ki Mao",
            "foodType": [FoodType.spicy, FoodType.vegan],
            "ingredients": "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
            "price": 60
        },
        {
            "img": "./Assets/dishes/garbanzo.svg",
            "name": "Garbanzo Frito",
            "foodType": [],
            "ingredients": "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
            "price": 55
        },
        {
            "img": "./Assets/dishes/pizza.svg",
            "name": "Smoked Pizza",
            "foodType": [FoodType.vegitarian],
            "ingredients": "Basil dough, cashew 'butter', demi-glace,bison & radish",
            "price": 80
        }

    ]
    console.log(dishesToRender);

      return (
          <div className="populars-container">
              <h2>SIGNATURE DISH OF:</h2>
              <div className="popular-cards-container">
                {dishesToRender.map((item)=>{
                    return <DishCard img={item.img} name={item.name} foodType={item.foodType} ingredients={item.ingredients} price={item.price}/>
                })}
                </div>
          </div>
      );
    }

export default PopularDishes;