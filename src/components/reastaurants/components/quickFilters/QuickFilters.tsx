import React from "react";
import "./quickFilters.css";

const QuickFilters:React.FC = ()=>{
    return(
        <div id="quick-filters-container">
            <button className="quick-filter">All</button>
            <button className="quick-filter">New</button>
            <button className="quick-filter">Most Popular</button>
            <button className="quick-filter">Open Now</button>
            <button className="quick-filter">Map View</button>
        </div>
    );
}

export default QuickFilters;