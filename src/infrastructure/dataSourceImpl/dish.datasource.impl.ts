import { PrismaClient } from "@prisma/client";
import { DishDataSource } from "../../domain/datasource/dish.datasource";
import { DishEntity } from "../../domain/entity/dish.entity";

export class DishDataSourceImpl implements DishDataSource {
  private prisma = new PrismaClient();
  async getDishes(): Promise<DishEntity[]> {
    return await this.prisma.dish.findMany({
      where: { available: true },
    });
  }
  async findById(id: number): Promise<DishEntity> {
    const dish = await this.prisma.dish.findUnique({ where: { dish_id: id } });
    if (!dish) {
      throw new Error("Method not implemented.");
    }
    return dish;
  }
  async logicalDeleteById(id: number): Promise<DishEntity> {
    const dish = await this.prisma.dish.update({
      where: { dish_id: id },
      data: { available: false }, // Cambia el estado disponible a falso
    });
    return dish;
  }
  async updateDish(dish: DishEntity): Promise<DishEntity> {
    const updatedDish = await this.prisma.dish.update({
      where: { dish_id: dish.dish_id },
      data: {
        description: dish.description,
        availability: dish.availability,
        name: dish.name,
        price: dish.price,
        category: dish.category,
        available: dish.available,
        image_url: dish.image_url,
        promotional_price: dish.promotional_price,
        restaurant_id: dish.restaurant_id,
      },
    });
    return updatedDish;
  }
  async createDish(dish: DishEntity): Promise<DishEntity> {
    const newDish = await this.prisma.dish.create({
      data: {
        description: dish.description,
        availability: dish.availability,
        name: dish.name,
        price: dish.price,
        category: dish.category,
        available: dish.available,
        image_url: dish.image_url,
        promotional_price: dish.promotional_price,
        restaurant_id: dish.restaurant_id,
      },
    });
    return newDish;
  }
}
