import React from "react";
import "./chefCard.css";
import axios from 'axios';
import IChefCard from "../../../types/interfaces/IChefCard";
import ChefsCards from "../chefsCards/ChefsCards";
import { filterChefs } from "../../../store/slices/chefsSlice";

interface Ichef {
    name: string,
    img: string,
    id: string,
    filterChefs: (id: string) => void
}

const ChefCard: React.FC<Ichef> = (props: Ichef) => {

    const handleDeleteChef = async (id: string) => {
        const body = { id: id };
        try {
            const response = await axios.delete(`http://localhost:8000/chefs/delete`, { data: body });
            props.filterChefs(id);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="chef-card-container">
            <img src={props.img} alt="" />
            <span>{props.name}</span>
            <button className="close-chef-btn" onClick={() => { handleDeleteChef(props.id) }}><img src="./Assets/close-btn.svg" alt="" /></button>
        </div>
    );
}

export default ChefCard;