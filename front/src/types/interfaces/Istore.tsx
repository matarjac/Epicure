import IChefCard from "./IChefCard"
import IRestaurantCard from "./IRestaurantCard";
import IDishCard from "./IDishCard";
import IUserState from "./IUserState";

export interface Istore {
    restaurants: Irestaurant,
    chefs: IChef,
    dishes: Idish,
    user: IUserState
}

interface IChef {
    value: IChefCard[] ,
    chefOfTheWeek: string
}

interface Idish {
    value: IDishCard[]
}

interface Irestaurant {
    value: IRestaurantCard[],
    chefOfTheWeek: number
}
