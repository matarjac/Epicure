import { IChef, ChefModel } from "../../model/chefsModel/chef.model";

export const getChefs = async () => {
    try {
        const chefs: IChef[] = await ChefModel.find();
        console.log(chefs);
        return chefs;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

