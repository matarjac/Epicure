import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './hero.css';
import SearchHero from "./SearchHero";

const Hero:React.FC = ()=>{
    return(
        <div className="hero">
            {/* <img id="hidden-hero-bg-img" src="/public/Assets/hero-bg.svg" alt="" /> */}
            <SearchHero/>
        </div>
    );
}

export default Hero;