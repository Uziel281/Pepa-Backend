import { DishDataSource } from "../../domain/datasource/dish.datasource";
import { DishEntity } from "../../domain/entity/dish.entity";
import { DishRepository } from "../../domain/repository/dish.repository";

export class DishRepositoryImpl implements DishRepository {
  constructor(private readonly data_source: DishDataSource) {}

  getDishes(): Promise<DishEntity[]> {
    return this.data_source.getDishes();
  }

  findById(id: number): Promise<DishEntity> {
    return this.data_source.findById(id);
  }

  logicalDeleteById(id: number): Promise<DishEntity> {
    return this.data_source.logicalDeleteById(id);
  }

  updateDish(dish: DishEntity): Promise<DishEntity> {
    return this.data_source.updateDish(dish);
  }

  createDish(dish: DishEntity): Promise<DishEntity> {
    return this.data_source.createDish(dish);
  }
}
