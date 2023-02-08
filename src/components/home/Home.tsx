import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './home.css';
import Navbar from "../navbar/Navbar";
import Hero from "./components/Hero/Hero";

const Home:React.FC = ()=>{
    return(
        <div>
            <Navbar/>
            <Hero/>
        </div>
    );
}

export default Home;