import express from "express"
import restaurants from "./restaurantsRoutes/restaurants.routes";

const router = express.Router();

router.use("/api/restaurants", restaurants);

export default router;