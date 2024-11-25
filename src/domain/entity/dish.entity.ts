import { DishInterface } from "../interface/dish.interface";

export class DishEntity implements DishInterface {
  dish_id?: number; 
  description?: string | null; 
  availability?: string | null; 
  name?: string | null; 
  price?: number | null;
  category?: string | null; 
  available?: boolean | null; 
  image_url?: string | null; 
  promotional_price?: number | null; 
  restaurant_id?: number | null; 
 
  constructor( 
    dish_id?: number, 
    description?: string | null, 
    availability?: string | null, 
    name?: string | null, 
    price?: number | null, 
    category?: string | null, 
    available?: boolean | null, 
    image_url?: string | null, 
    promotional_price?: number | null, 
    restaurant_id?: number | null 
  ) { 
    this.dish_id = dish_id; 
    this.description = description; 
    this.availability = availability; 
    this.name = name; 
    this.price = price; 
    this.category = category; 
    this.available = available; 
    this.image_url = image_url; 
    this.promotional_price = promotional_price; 
    this.restaurant_id = restaurant_id; 
  } 
} 
 