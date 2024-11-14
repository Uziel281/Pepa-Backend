import { RestaurantInterface } from "../interface/restaurant.interace";

export class RestaurantEntity implements RestaurantInterface {
  restaurant_id?: number;
  category?: string | null;
  address?: string | null;
  status?: number | null;
  schedule?: string | null;
  name?: string | null;
  description?: string | null;
  image_url?: string | null;
  rating?: number | null;

  constructor(
    restaurant_id?: number,
    name?: string | null,
    category?: string | null,
    address?: string | null,
    status?: number | null,
    schedule?: string | null,
    description?: string | null,
    image_url?: string | null,
    rating?: number | null
  ) {
    this.restaurant_id = restaurant_id;
    this.category = category;
    this.address = address;
    this.status = status;
    this.schedule = schedule;
    this.name = name;
    this.description = description;
    this.image_url = image_url;
    this.rating = rating;
  }
}
