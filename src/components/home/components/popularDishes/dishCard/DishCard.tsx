import React from "react";
import "./dishCard.css";
import IDishCard from '../../../../../types/interfaces/IDishCard'


const DishCard: React.FC<IDishCard> = (props:IDishCard) => {
    const data: IDishCard = props;
      return (
          <div className="card-container dish-card-container">
              <img id="dish-image" src={data.img} alt="" />
              <span id="dish-name">{data.name}</span>
              <div id="food-type-icons-container">

              {props.foodType.map((type)=>{
                  return <img id="type" src={type} alt="" />
              })}
              </div>
              <span id="dish-ingredients">{data.ingredients}</span>
              <div id="price-section"><img src="./Assets/line.svg" alt="" /><span>₪ {props.price}</span><img src="./Assets/line.svg" alt="" /></div>
          </div>
      )
    }

export default DishCard;