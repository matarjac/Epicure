import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import IChefCard from "../../types/interfaces/IChefCard";

export const fetchChefs: any = createAsyncThunk(
    "chefs/fetchChefs",
    async () => {
        try {
            const response = await axios.get("http://localhost:8000/chefs/");
            return response.data;
        }
        catch (err) {
            console.log(err);
        }
    }
)

interface IChefState {
    initialValue: IChefCard[] ,
    value: IChefCard[] ,
    chefOfTheWeek: string
}

const initialState: IChefState = {
    initialValue: [],
    value: [],
    chefOfTheWeek: "Assaf Granit"
}

export const chefSlice = createSlice({
    name: "chefs",
    initialState,
    reducers: {
        filterChefs: (state, action) => {
            const filterType = action.payload;
            switch (filterType) {
                case "all":
                    state.value = state.initialValue;
                    break;

                case "new":
                    state.value = state.initialValue;
                    state.value = state.value.filter(
                        (chef: IChefCard) => chef.isNew === true
                    );
                    break;
                case "most viewed":
                    state.value = state.initialValue;
                    state.value = state.value.filter(
                        (chef: IChefCard) => chef.mostViewed === true
                    );
                    break;
                case "chef of the week":
                    state.value = state.initialValue;
                    state.value = state.value.filter(
                        (chef: IChefCard) => chef.name === state.chefOfTheWeek
                    );
                    break;
                default:
                    state.value = state.initialValue;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChefs.pending, (state, action) => { })
            .addCase(fetchChefs.fulfilled, (state, action) => {
                state.value = action.payload;
                state.initialValue = action.payload;
                console.log(state.value);
                console.log(state.initialValue);
            })
            .addCase(fetchChefs.rejected, (state, action) => {
                console.log(action.payload.message)
            })
    }
})

export const { filterChefs } = chefSlice.actions;
export default chefSlice.reducer;