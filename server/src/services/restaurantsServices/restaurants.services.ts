import { IRestaurant, RestaurantModel } from "../../model/restaurantsModel/restaurant.model";

export const getRestaurants = async () => {
    try {
        const restaurants: IRestaurant[] = await RestaurantModel.find();
        return restaurants;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}