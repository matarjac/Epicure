import React, { useEffect, useState } from "react";
import "./chefsCards.css";
import ChefCard from "../chefCard/ChefCard";
import { useSelector, useDispatch } from 'react-redux';
import IChefCard from "../../../types/interfaces/IChefCard";
import { Istore } from "../../../types/interfaces/Istore";

const ChefsCards: React.FC = () => {
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch("getAll")
    // },[chefs]);

    const chefsData: IChefCard[] = useSelector((state: Istore) => state.chefs.value);
    const [chefs, setChefs] = useState<IChefCard[]>(chefsData);

    const handleDeleteChef = (id: string) => {
        const filteredChefs = chefs.filter((chef: IChefCard) => { return chef._id !== id });
        setChefs(filteredChefs);
        window.location.reload();
    }
    return (
        <div id="chefs-cards-container">
            {chefs.map((chef: IChefCard, index) => (<ChefCard
                name={chef.name}
                img={chef.img}
                id={chef._id}
                key={index}
                filterChefs={handleDeleteChef} />
            ))}
        </div>
    );
}

export default ChefsCards;