import React from "react";
import "./modalDishBox.css";

const ModalDishBox: React.FC = ()=>{
    return(
        <div className="modal-background">
            <div className="modal-dish-box-container">
                <img src="" alt="" />
                <h1>Pad ki</h1>
                <span id="ingredients"></span>
            </div>
        </div>
    )
} 

export default ModalDishBox;