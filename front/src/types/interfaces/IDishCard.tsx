import FoodType from './FoodType'

interface IDishCard {
    name: string,
    restaurantID?: number,
    id: number,
    ingredients: string,
    foodType: string[],
    img: string,
    price?: number,
    isPopular?: boolean,
    category?: string,
    onClick: () => void
}

export default IDishCard;
