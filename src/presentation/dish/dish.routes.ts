import { Router } from "express";
import { DishDataSourceImpl } from "../../infrastructure/dataSourceImpl/dish.datasource.impl";
import { DishRepositoryImpl } from "../../infrastructure/repositoryImpl/dish.repository.impl";
import { DishController } from "./dish.controller";

export class DishRoutes {
  static get routes() {
    const router = Router();
    const datasource = new DishDataSourceImpl();
    const repository = new DishRepositoryImpl(datasource);
    const controller = new DishController(repository);

    router.get("/", controller.getAllDishes);
    router.get("/:id", controller.getDishById);
    router.post("/", controller.createDish);
    router.put("/:id", controller.updateDish);
    router.put("/logical-delete/:id", controller.logicalDeleteDish);

    return router;
  }
}
