import React from "react";
import "./restaurantCard.css";
import {IRestaurantCard} from '../../../../../types/interfaces/IRestaurantCard';
import { Link, useNavigate } from "react-router-dom";
import { ICard } from "../../../../../types/interfaces/ICard";


const RestaurantCard: React.FC<ICard> = (props:ICard) => {
    const data: ICard = props;
    const navigation = useNavigate();

      return (
                <div className="card-container" onClick={()=>{navigation(`${data.location}${data.id}`)}}>
                    <img id="restaurant-image" src={data.img} alt="" />
                    <span id="restaurant-name">{data.name}</span>
                    <span id="chef-name">{data.chef}</span>
                    <img id="rating-image" src={`./Assets/ratings/${data.rating}-rating.svg`} alt="" />
                </div>
      )
    }

export default RestaurantCard;