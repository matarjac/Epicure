import React from "react";
import { useState } from "react";
import "./modalPriceRange.css";


const ModalPriceRange:React.FC = ()=>{
    const [value1, setValue1] = useState("12");
    return(
        <div id="price-modal" className="modal-div-container">
            <span className="modal-title">Price Range Selected</span>
            <span className="modal-detail">12 - 350</span>
            <div className="slidecontainer">
                <div>
                    <span>{value1}</span>
                    <span>4</span>
                </div>
                <input type="range" min="12" max="350" value={value1}  className="slider" id="myRange" 
                onChange={(event)=>{setValue1(event.target.value)}}/>
            </div>
        </div>
    )
}

export default ModalPriceRange;
