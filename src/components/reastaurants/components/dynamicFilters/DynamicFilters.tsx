import React from "react";
import { useState } from "react";
import "./dynamicFilters.css";
import ModalPriceRange from "./priceRangeModal/ModalPriceRange";

const DynamicFilters: React.FC = ()=>{
    const [showComponent, setShowComponent] = useState(false);
    const handleClick = ()=>{
        setShowComponent(!showComponent);
    }
    return(
        <div id="filters-buttons-container">
            {/* <button className="dynamic-filter" onClick={handleClick}>Price Range <img src="./Assets/dynamic-filter-btn-drop-symbol.svg" alt="" 
            /></button>
            <ModalPriceRange/>
            <button className="dynamic-filter">Distance <img src="./Assets/dynamic-filter-btn-drop-symbol.svg" alt="" 
            /></button>
            {showComponent&&<ModalDistance/>}
            <button className="dynamic-filter">Rating <img src="./Assets/dynamic-filter-btn-drop-symbol.svg" alt="" 
            /></button>
            {showComponent&&<ModalRating/>} */}
        </div>
    );
}

export default DynamicFilters;