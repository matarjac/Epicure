export interface IRestaurantCard {
    img: string,
    name: string,
    chef?: string,
    rating: number,
    id?: number,
    isPopular?: boolean,
    isNew?: boolean,
    dishes?: number[],
    openHour?: 16,
    closeHour?: 24,
}

export default IRestaurantCard;