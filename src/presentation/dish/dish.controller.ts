import { Request, Response } from "express";
import { DishRepository } from "../../domain/repository/dish.repository";
import { DishEntity } from "../../domain/entity/dish.entity";

export class DishController {
  constructor(private readonly dishRepository: DishRepository) {}

  public getAllDishes = async (req: Request, res: Response): Promise<void> => {
    try {
      const dishes = await this.dishRepository.getDishes();
      res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json({ message: "Error fetching dishes", error });
    }
  };

  public getDishById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const dish = await this.dishRepository.findById(id);
      if (!dish) {
        res.status(404).json({ message: "Dish not found" });
        return;
      }
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json({ message: "Error fetching dish", error });
    }
  };

  public createDish = async (req: Request, res: Response): Promise<void> => {
    try {
      const dishData: DishEntity = req.body;
      const newDish = await this.dishRepository.createDish(dishData);
      res.status(201).json(newDish);
    } catch (error) {
      res.status(500).json({ message: "Error creating dish", error });
    }
  };

  public updateDish = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const dishData: DishEntity = req.body;
      dishData.dish_id = id;
      const updatedDish = await this.dishRepository.updateDish(dishData);
      if (!updatedDish) {
        res.status(404).json({ message: "Dish not found" });
        return;
      }
      res.status(200).json(updatedDish);
    } catch (error) {
      res.status(500).json({ message: "Error updating dish", error });
    }
  };

  public logicalDeleteDish = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const deletedDish = await this.dishRepository.logicalDeleteById(id);
      if (!deletedDish) {
        res.status(404).json({ message: "Dish not found" });
        return;
      }
      res.status(200).json(deletedDish);
    } catch (error) {
      res.status(500).json({ message: "Error deleting dish", error });
    }
  };
}
