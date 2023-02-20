import FoodType from './FoodType'

interface IDishCard{
    name: string,
    id?: number,
    ingredients: string,
    foodType: string[],
    img: string,
    price?: number,
    isPopular?: boolean
}

export default IDishCard;
