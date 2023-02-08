import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './home.css';
import Navbar from "../navbar/Navbar";

const Home:React.FC = ()=>{
    return(
        <div>
            <Navbar/>
        </div>
    );
}

export default Home;