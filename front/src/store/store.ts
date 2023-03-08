import {configureStore} from "@reduxjs/toolkit";
import restaurantsReducer from "./slices/restaurantsSlice" ;
import chefsReducer from "./slices/chefsSlice";
import dishesReducer from "./slices/dishesSlice";


export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        chefs: chefsReducer,
        dishes: dishesReducer
    }
});