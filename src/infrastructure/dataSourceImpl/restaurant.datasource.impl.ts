import { PrismaClient } from "@prisma/client";
import { RestaurantDataSource } from "../../domain/datasource/restaurant.datasource";
import { RestaurantEntity } from "../../domain/entity/restaurant.entity";

export class RestaurantDataSourceImpl implements RestaurantDataSource {
  private prisma = new PrismaClient();

  async getRestaurants(): Promise<RestaurantEntity[]> {
    return await this.prisma.restaurant.findMany({
      where: { status: 1 },
    });
  }

  async findById(id: number): Promise<RestaurantEntity> {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { restaurant_id: id },
    });
    if (!restaurant) {
      throw new Error("Restaurant not found");
    }
    return restaurant;
  }

  async logicalDeleteById(id: number): Promise<RestaurantEntity> {
    const restaurant = await this.prisma.restaurant.update({
      where: { restaurant_id: id },
      data: { status: 0 },
    });
    return restaurant;
  }

  async updateRestaurant(
    restaurant: RestaurantEntity
  ): Promise<RestaurantEntity> {
    const updatedRestaurant = await this.prisma.restaurant.update({
      where: { restaurant_id: restaurant.restaurant_id },
      data: {
        name: restaurant.name,
        category: restaurant.category,
        address: restaurant.address,
        status: restaurant.status,
        schedule: restaurant.schedule,
        description: restaurant.description,
        image_url: restaurant.image_url,
        rating: restaurant.rating,
      },
    });
    return updatedRestaurant;
  }

  async createRestaurant(
    restaurant: RestaurantEntity
  ): Promise<RestaurantEntity> {
    const newRestaurant = await this.prisma.restaurant.create({
      data: {
        name: restaurant.name,
        category: restaurant.category,
        address: restaurant.address,
        status: restaurant.status,
        schedule: restaurant.schedule,
        description: restaurant.description,
        image_url: restaurant.image_url,
        rating: restaurant.rating,
      },
    });
    return newRestaurant;
  }
}
