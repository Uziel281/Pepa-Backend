import { RestaurantDataSource } from "../../domain/datasource/restaurant.datasource";
import { RestaurantEntity } from "../../domain/entity/restaurant.entity";
import { RestaurantRepository } from "../../domain/repository/restaurant.repository";

export class RestaurantRepositoryImpl implements RestaurantRepository {
  constructor(private readonly data_source: RestaurantDataSource) {}

  getRestaurants(): Promise<RestaurantEntity[]> {
    return this.data_source.getRestaurants();
  }
  findById(id: number): Promise<RestaurantEntity> {
    return this.data_source.findById(id);
  }
  logicalDeleteById(id: number): Promise<RestaurantEntity> {
    return this.data_source.logicalDeleteById(id);
  }
  updateRestaurant(restaurant: RestaurantEntity): Promise<RestaurantEntity> {
    return this.data_source.updateRestaurant(restaurant);
  }
  createRestaurant(restaurant: RestaurantEntity): Promise<RestaurantEntity> {
    return this.data_source.createRestaurant(restaurant);
  }
}
