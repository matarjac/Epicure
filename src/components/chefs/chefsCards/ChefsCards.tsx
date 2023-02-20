import React from "react";
import "./chefsCards.css";
import chefsData from "../../../chefs-data.json";
import ChefCard from "../chefCard/ChefCard";
import {useSelector} from 'react-redux';
import IChefCard from "../../../types/interfaces/IChefCard";

const ChefsCards: React.FC = ()=>{

    const chefsData = useSelector(
        (state:any)=> state.chefs.value);
        
    return(

        <div id="chefs-cards-container">
            {chefsData.map((chef:IChefCard)=>( <ChefCard 
            name={chef.name}
            img= {chef.img}/>
            ))}
        </div>  
    );
}

export default ChefsCards;