import React from "react";
import './chefOfTheWeek.css';

const ChefOfTheWeek: React.FC = ()=>{
    return (
        <div id="chef-of-the-week-section">
            <p className="chef-of-the-week-titles">Chef of the week:</p>
            <div id="chefs-description">
                <div id="chef-image-container">
                    <img src="./Assets/eyal_shani.jpeg" alt="" />
                    <span>Yossi Shitrit</span>
                </div>
                <p>Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.</p>
            </div>
            <p className="chef-of-the-week-titles chefs-restaurants-title">Yossi’s Restaurants</p>
            <div id="chefs-restaurants">
                <div className="week-restaurant-card">
                    <img src="./Assets/kitchen-market.jpeg" alt="" />
                    <span>Onza</span>
                    </div>
                <div className="week-restaurant-card">
                    <img src="./Assets/onza.jpeg" alt="" />
                    <span>Kitchen Market</span>
                </div>
                <div className="week-restaurant-card">
                    <img src="./Assets/mashya.jpeg" alt="" />
                    <span>Mashya</span>
                </div>
            </div>
        </div>
    )
}

export default ChefOfTheWeek;