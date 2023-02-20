import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './navbar.css';

const Navbar:React.FC = ()=>{
    const navigation = useNavigate();
    return(
        <nav>
            <div id="navbar-container">
                <button onClick={()=>{navigation("/");}}><img className="logo" src="/Assets/logo.svg" alt="" /></button>
                <div id="navbar-buttons-container">
                    <div id="navbar-buttons-leftside-container">
                        <button className="navbar-button" id="" 
                        onClick={()=>{navigation("/restaurants");}}>Restaurants
                        </button>
                        <button className="navbar-button" id="" 
                        onClick={()=>{navigation("/chefs");}}>Chefs
                        </button>
                    </div>
                    <div id="navbar-buttons-rightside-container">
                        <form action="">
                            <input id="navbar-input" type="text" placeholder="Search for restaurant cuisine, chef" />
                        </form>
                        {/* <button className="navbar-button" id=""><img src="/Assets/search-icon.svg" alt="" /></button> */}
                        <button className="navbar-button" id=""><img src="/Assets/account-icon.svg" alt="" /></button>
                        <button className="navbar-button" id=""><img src="/Assets/cart-icon.svg" alt="" /></button>
                    </div>
                </div>
                <button id="humburger-menu">
                    <img src="./Assets/HAMBUR.svg" alt="" />
                </button>
            </div>
            <div id="buttons-side-menu">

            </div>
        </nav>
    );
}

export default Navbar;