import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./slices/restaurantsSlice";
import chefsReducer from "./slices/chefsSlice";
import dishesReducer from "./slices/dishesSlice";
import userReducer from "./slices/userSlice";


const store = configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        chefs: chefsReducer,
        dishes: dishesReducer,
        user: userReducer
    }
});

// export default configureStore({
//     reducer: {
//         restaurants: restaurantsReducer,
//         chefs: chefsReducer,
//         dishes: dishesReducer,
//         user: userReducer
//     }
// });

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;

export default store;