import {configureStore} from "@reduxjs/toolkit";
import restaurantsReducer from "./slices/restaurantsSlice" ;
import chefsReducer from "./slices/chefsSlice";

export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        chefs: chefsReducer
    }
});