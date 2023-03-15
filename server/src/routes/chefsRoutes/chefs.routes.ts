import express from "express";
import { getAllChefs, deleteChef } from "../../controllers/chefsControllers/chefs.controllers";

const router = express.Router();
router.get("/", getAllChefs);
router.delete("/delete", deleteChef);

export default router;