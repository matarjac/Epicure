import { createSlice } from "@reduxjs/toolkit";
import finalData from "../../dataFinal.json"

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: {
        value: finalData.restaurants,
        chefOfTheWeek: finalData.chefOfTheWeek
    },
    reducers:{
        filterRestaurants: (state, action) =>{
            const filterType = action.payload;
            switch (filterType){
                case "all":
                    state.value = finalData.restaurants;
                    break;
                case "new":
                    state.value = finalData.restaurants;
                    state.value = state.value.filter(
                        (restaurant) => restaurant.isNew === true
                    );
                    break;
                case "most popular":
                    state.value = finalData.restaurants;
                    state.value = state.value.filter(
                        (restaurant) => restaurant.isPopular === true
                    );
                    break;
                case "open now":
                    let timeNow:Date = new Date;
                    const currentHour = timeNow.getHours();
                    state.value = finalData.restaurants;
                    state.value = state.value.filter(
                        (restaurant) => restaurant.openHour <= currentHour && restaurant.closeHour > currentHour
                    );
                    break;
                case "chef of the week":
                    state.value = finalData.restaurants;
                    state.value = state.value.filter(
                        (restaurant) => restaurant.chefID == state.chefOfTheWeek
                    );
                    break;
                default:
                    state.value = state.value;
            }
        }

    }
});

export const { filterRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;