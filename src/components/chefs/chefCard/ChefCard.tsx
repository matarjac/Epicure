import React from "react";
import "./chefCard.css";

interface Ichef{
    name: string,
    img: string
}

const ChefCard: React.FC<Ichef> = (props:Ichef) => {
    const data: Ichef = props;
    return(
        <div className="chef-card-container">
            <img src={data.img} alt="" />
            <span>{data.name}</span>
        </div>
    );
}

export default ChefCard;