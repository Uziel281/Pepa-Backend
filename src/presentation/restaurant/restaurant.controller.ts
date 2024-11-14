import { Request, Response } from "express";
import { RestaurantRepository } from "../../domain/repository/restaurant.repository";
import { RestaurantEntity } from "../../domain/entity/restaurant.entity";

export class RestaurantController {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  public getAllRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurants = await this.restaurantRepository.getRestaurants();
      res.status(200).json(restaurants);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  public getRestaurantById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const restaurant = await this.restaurantRepository.findById(id);
      if (!restaurant) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      res.status(200).json(restaurant);
    } catch (error) {
      res.status(500).json({ message: "Error fetching restaurant", error });
    }
  };

  public createRestaurant = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const restaurantData: RestaurantEntity = req.body;
      console.log(restaurantData);
      const newRestaurant = await this.restaurantRepository.createRestaurant(
        restaurantData
      );
      res.status(201).json(newRestaurant);
    } catch (error) {
      res.status(500).json({ message: "Error creating restaurant", error });
    }
  };

  public updateRestaurant = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const restaurantData: RestaurantEntity = req.body;
      restaurantData.restaurant_id = id;
      const updatedRestaurant =
        await this.restaurantRepository.updateRestaurant(restaurantData);
      if (!updatedRestaurant) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      res.status(200).json(updatedRestaurant);
    } catch (error) {
      res.status(500).json({ message: "Error updating restaurant", error });
    }
  };

  public logicalDeleteRestaurant = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const deletedRestaurant =
        await this.restaurantRepository.logicalDeleteById(id);
      if (!deletedRestaurant) {
        res.status(404).json({ message: "Restaurant not found" });
        return;
      }
      res.status(200).json(deletedRestaurant);
    } catch (error) {
      res.status(500).json({ message: "Error deleting restaurant", error });
    }
  };
}
