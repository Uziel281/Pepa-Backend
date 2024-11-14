import { Router } from "express";
import { RestaurantRoutes } from "./restaurant/restaurant.routes";
import { DishRoutes } from "./dish/dish.routes";

export class AppRoutes {
  static get routes() {
    const router = Router();

    router.use("/dishes", DishRoutes.routes);
    router.use("/restaurants", RestaurantRoutes.routes);

    return router;
  }
}
