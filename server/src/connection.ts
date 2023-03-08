import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.TOKEN_SECRET;
const dbName = 'Epicure';

export const connectToDB = async () => {
    try {
        await connect(`${uri}${dbName}`);
    }
    catch (err) {
        console.log(err);
    }
}