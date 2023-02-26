import React, { useEffect } from "react";
import "./popularDishes.css";
import DishCard from "./dishCard/DishCard";
import IDishCard from "../../../../types/interfaces/IDishCard";
import { useSelector,useDispatch } from "react-redux";
import { filterDishes } from "../../../../store/slices/dishesSlice";
import { Istore } from "../../../../types/interfaces/Istore";


const PopularDishes: React.FC = () => {
    const dishesToRender = useSelector((state:Istore)=>state.dishes.value)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(filterDishes('popular'));
    },[])

      return (
          <div className="populars-container">
              <h2>SIGNATURE DISH OF:</h2>
              <div className="popular-cards-container">
                {dishesToRender.slice(0,3).map((item:IDishCard)=>{
                    return <DishCard id={item.id} img={item.img} name={item.name} foodType={item.foodType} ingredients={item.ingredients} onClick={()=>{}} price={item.price}/>
                })}
                </div>
          </div>
      );
    }

export default PopularDishes;