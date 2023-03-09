import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import IChefCard from "../../types/interfaces/IChefCard";

const getAllChefs = axios.get('http://localhost:8000/chefs')
const { data } = await getAllChefs;

export const chefsSlice = createSlice({
    name: "chefs",
    initialState: {
        value: data,
        chefOfTheWeek: 2
    },
    reducers: {
        filterChefs: (state, action) => {
            const filterType = action.payload;
            switch (filterType) {
                case "all":
                    state.value = data;
                    break;
                case "new":
                    state.value = data;
                    state.value = state.value.filter(
                        (chef:IChefCard) => chef.isNew === true
                    );
                    break;
                case "most viewed":
                    state.value = data;
                    state.value = state.value.filter(
                        (chef:IChefCard) => chef.mostViewed === true
                    );
                    break;
                case "chef of the week":
                    state.value = state.value;
                    state.value = state.value.filter(
                        (chef:IChefCard) => chef.id == state.chefOfTheWeek
                    );
                    break;
                default:
                    state.value = state.value;
            }
        }
    }
})

export const { filterChefs } = chefsSlice.actions;
export default chefsSlice.reducer;

