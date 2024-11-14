import { Router } from "express";
import { RestaurantDataSourceImpl } from "../../infrastructure/dataSourceImpl/restaurant.datasource.impl";
import { RestaurantRepositoryImpl } from "../../infrastructure/repositoryImpl/restaurant.repository.impl";
import { RestaurantController } from "./restaurant.controller";

export class RestaurantRoutes {
  static get routes() {
    const router = Router();
    const datasource = new RestaurantDataSourceImpl();
    const repository = new RestaurantRepositoryImpl(datasource);
    const controller = new RestaurantController(repository);

    router.get("/", controller.getAllRestaurants);
    router.get("/:id", controller.getRestaurantById);
    router.post("/", controller.createRestaurant);
    router.put("/:id", controller.updateRestaurant);
    router.put("/logical-delete/:id", controller.logicalDeleteRestaurant);

    return router;
  }
}
