import { DishEntity } from "../entity/dish.entity";

export abstract class DishRepository {
  abstract getDishes(): Promise<DishEntity[]>;
  abstract findById(id: number): Promise<DishEntity>;
  abstract logicalDeleteById(id: number): Promise<DishEntity>;
  abstract updateDish(dish: DishEntity): Promise<DishEntity>;
  abstract createDish(dish: DishEntity): Promise<DishEntity>;
}
