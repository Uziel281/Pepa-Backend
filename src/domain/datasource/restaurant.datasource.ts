import { RestaurantEntity } from "../entity/restaurant.entity";

export abstract class RestaurantDataSource {
  abstract getRestaurants(): Promise<RestaurantEntity[]>;
  abstract findById(id: number): Promise<RestaurantEntity>;
  abstract logicalDeleteById(id: number): Promise<RestaurantEntity>;
  abstract updateRestaurant(
    restaurant: RestaurantEntity
  ): Promise<RestaurantEntity>;
  abstract createRestaurant(
    restaurant: RestaurantEntity
  ): Promise<RestaurantEntity>;
}
