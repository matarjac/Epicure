import finalData from "../../dataFinal.json";
import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: {
        value: finalData.dishes
    },
    reducers:{
        filterDishes: (state,action)=>{
            const filterType = action.payload;
            switch (filterType){
                case "popular":
                    state.value = state.value.filter(
                        dish=>dish.isPopular === true
                    )
                    break;
                default:
                    state.value = state.value;
            }
        }
    }
})

export const {filterDishes} = dishesSlice.actions;
export default dishesSlice.reducer;