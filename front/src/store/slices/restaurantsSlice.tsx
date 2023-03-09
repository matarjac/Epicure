import { createSlice } from "@reduxjs/toolkit";
import IRestaurantCard from "../../types/interfaces/IRestaurantCard";

const getAllRestaurants = fetch('http://localhost:8000/restaurants', { method: 'GET' })
    .then(response => response.json())
    .then((data) => { return data })
    .catch((err) => console.log(err));

const restaurantsList = await getAllRestaurants;

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: {
        value: restaurantsList,
        chefOfTheWeek: 3
    },
    reducers: {
        filterRestaurants: (state, action) => {
            const filterType = action.payload;
            switch (filterType) {
                case "all":
                    state.value = restaurantsList;
                    break;
                case "new":
                    state.value = restaurantsList;
                    state.value = state.value.filter(
                        (restaurant: IRestaurantCard) => restaurant.isNew === true
                    );
                    break;
                case "most popular":
                    state.value = restaurantsList;
                    state.value = state.value.filter(
                        (restaurant: IRestaurantCard) => restaurant.isPopular === true
                    );
                    break;
                case "open now":
                    let timeNow: Date = new Date;
                    const currentHour = timeNow.getHours();
                    state.value = restaurantsList;
                    state.value = state.value.filter(
                        (restaurant: IRestaurantCard) => restaurant.openHour <= currentHour && restaurant.closeHour > currentHour
                    );
                    break;
                case "chef of the week":
                    state.value = restaurantsList;
                    state.value = state.value.filter(
                        (restaurant: IRestaurantCard) => restaurant.chefID == state.chefOfTheWeek
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