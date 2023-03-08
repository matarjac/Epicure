import IChefCard from "./IChefCard"
import IRestaurantCard from "./IRestaurantCard";
import IDishCard from "./IDishCard";

export interface Istore{
    restaurants: Irestaurant,
    chefs: Ichef,
    dishes: Idish    
}

interface Ichef{
    value: IChefCard[],
    chefOfTheWeek: number
}

interface Idish{
    value: IDishCard[]
}

interface Irestaurant{
    value: IRestaurantCard[],
    chefOfTheWeek: number
}
