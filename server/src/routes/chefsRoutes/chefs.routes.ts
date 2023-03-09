import express from "express";
import { getAllChefs } from "../../controllers/chefsControllers/chefs.controllers";

const router = express.Router();
router.get("/", getAllChefs);


export default router;