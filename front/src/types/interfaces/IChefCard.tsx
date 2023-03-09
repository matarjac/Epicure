interface IChefCard{
    name: string,
    id?: number,
    isChefOfTheWeek?: boolean,
    img: string,
    isNew?: boolean,
    mostViewed?:boolean
}

export default IChefCard;