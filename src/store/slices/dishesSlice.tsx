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
                case "all":
                    state.value = finalData.dishes;
                    break;
                    
                case "popular":
                    state.value = finalData.dishes;
                    state.value = state.value.filter(
                        dish=>dish.isPopular === true
                    )
                    break;
                case "breakfast":
                    state.value = finalData.dishes;
                    state.value = state.value.filter(
                        dish=>dish.category === "breakfast"
                    )
                    break;
                case "launch":
                    state.value = finalData.dishes;
                    state.value = state.value.filter(
                        dish=>dish.category === "launch"
                    )
                    break;
                case "dinner":
                    state.value = finalData.dishes;
                    state.value = state.value.filter(
                        dish=>dish.category === "dinner"
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