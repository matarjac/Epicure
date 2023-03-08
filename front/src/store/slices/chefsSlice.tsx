import {createSlice} from "@reduxjs/toolkit";
import finalData from "../../dataFinal.json";

export const chefsSlice = createSlice( {
    name: "chefs",
    initialState: {
        value: finalData.chefs,
        chefOfTheWeek: finalData.chefOfTheWeek
    },
    reducers:{
        filterChefs: (state, action) =>{
            const filterType = action.payload;
            switch (filterType){
                case "all":
                    state.value = finalData.chefs;
                    break;
                case "new":
                    state.value = finalData.chefs;
                    state.value = state.value.filter(
                        (restaurant) => restaurant.isNew === true
                    );
                    break;
                case "most viewed":
                    state.value = finalData.chefs;
                    state.value = state.value.filter(
                        (restaurant) => restaurant.mostViewed === true
                    );
                    break;
                case "chef of the week":
                    state.value = state.value;
                    state.value = state.value.filter(
                        (chef) => chef.id == state.chefOfTheWeek
                    );
                    break;
                default:
                    state.value = state.value;
            }
        }
    }
})

export const {filterChefs} = chefsSlice.actions;
export default chefsSlice.reducer;

