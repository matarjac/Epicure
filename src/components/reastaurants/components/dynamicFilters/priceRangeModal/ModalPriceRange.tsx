import React from "react";
import { useState } from "react";
import "./modalPriceRange.css";


const ModalPriceRange:React.FC = ()=>{
    const [value1, setValue1] = useState("12");
    return(
        <div id="modal-price-range">
            <span className="modal-title">Price Range Selected</span>
            <span className="modal-detail">12 - 350</span>
            <div id="slidecontainer">
                <div>
                    <span>{value1}</span>
                    <span></span>
                </div>
                <input type="range" min="12" max="350" value={value1}  className="slider" id="myRange" 
                onChange={(event)=>{setValue1(event.target.value)}}/>
            </div>
        </div>
    )
}

export default ModalPriceRange;
