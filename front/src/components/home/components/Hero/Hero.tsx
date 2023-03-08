import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './hero.css';
import SearchHero from "./SearchHero";

const Hero:React.FC = ()=>{
    return(
        <div className="hero">
            <SearchHero/>
        </div>
    );
}

export default Hero;