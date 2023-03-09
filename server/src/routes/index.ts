import express from "express"
import restaurants from "./restaurantsRoutes/restaurants.routes";
import chefs from "./chefsRoutes/chefs.routes";
import dishes from "./dishesRoutes/dishes.routes";

const router = express.Router();

router.use("/restaurants", restaurants);
router.use("/chefs", chefs);
router.use("/dishes", dishes);

export default router;