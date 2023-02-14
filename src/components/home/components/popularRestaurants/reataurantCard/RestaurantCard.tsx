import React from "react";
import "./restaurantCard.css";
import {IRestaurantCard} from '../../../../../types/interfaces/IRestaurantCard'


const RestaurantCard: React.FC<IRestaurantCard> = (props:IRestaurantCard) => {
    const data: IRestaurantCard = props;
    console.log(`./public/Assets/ratings/${data.rating}-rating.svg`);
      return (
          <div className="card-container">
              <img id="restaurant-image" src={data.img} alt="" />
              <span id="restaurant-name">{data.name}</span>
              <span id="chef-name">{data.chef}</span>
              {/* <div id="ratings"> */}
              <img id="rating-image" src={`./Assets/ratings/${data.rating}-rating.svg`} alt="" />
              {/* </div> */}
          </div>

      )
    }

export default RestaurantCard;