import { Request, Response } from "express";
import { getChefs } from "../../services/chefsServices/chefs.services";

export const getAllChefs = async (req: Request, res: Response) => {
    try {
        const chefs = await getChefs();
        console.log(chefs);
        return res
            .status(200)
            .json(chefs)
    }
    catch (err: any) {
        console.log(err);
        throw err;
    }

}

export default getAllChefs;