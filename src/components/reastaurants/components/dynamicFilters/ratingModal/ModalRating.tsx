import React from "react";
import "./modalRating.css";

const ModalRating = ()=>{
    return (
        <div className="modal-div-container">
            <span className="modal-title">Rating</span>
            <div className="rating-option">
                <input type="checkbox" id="rating1" name="rating1" value="1"/>
                <label htmlFor="rating1"><img src="./Assets/ratings/1-rating.svg" alt="" /></label>
            </div>
            <div className="rating-option">
                <input type="checkbox" id="rating2" name="rating2" value="2"/>
                <label htmlFor="rating2"><img src="./Assets/ratings/2-rating.svg" alt="" /></label>
            </div>
            <div className="rating-option">
                <input type="checkbox" id="rating3" name="rating3" value="3"/>
                <label htmlFor="rating3"><img src="./Assets/ratings/3-rating.svg" alt="" /></label>
            </div>
            <div className="rating-option">
                <input type="checkbox" id="rating4" name="rating4" value="4"/>
                <label htmlFor="rating4"><img src="./Assets/ratings/4-rating.svg" alt="" /></label>
            </div>
            <div className="rating-option">
                <input type="checkbox" id="rating5" name="rating5" value="5"/>
                <label htmlFor="rating5"><img src="./Assets/ratings/5-rating.svg" alt="" /></label>
            </div>
            
        </div>
    );
}

export default ModalRating;