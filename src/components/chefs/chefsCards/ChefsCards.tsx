import React from "react";
import "./chefsCards.css";
import ChefCard from "../chefCard/ChefCard";
import {useSelector} from 'react-redux';
import IChefCard from "../../../types/interfaces/IChefCard";
import { Istore } from "../../../types/interfaces/Istore";

const ChefsCards: React.FC = ()=>{

    const chefsData = useSelector(
        (state: Istore) => state.chefs.value);
        
    return(

        <div id="chefs-cards-container">
            {chefsData.map((chef:IChefCard, index)=>( <ChefCard 
            name={chef.name}
            img= {chef.img}
            key={index}/>
            ))}
        </div>  
    );
}

export default ChefsCards;