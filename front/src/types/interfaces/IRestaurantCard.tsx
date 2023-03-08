export interface IRestaurantCard {
    img: string,
    name: string,
    chef?: string,
    rating: number,
    id?: number,
    chefID?:number,
    isPopular?: boolean,
    isNew?: boolean,
    dishes?: number[],
    openHour: number,
    closeHour?: number
}

export default IRestaurantCard;