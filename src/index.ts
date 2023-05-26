import { Restaurant } from "./Restaurant";

const restaurant = Restaurant.getInstance();
restaurant.open();

restaurant.getOrder('Classic', 'Without', false);
restaurant.getOrder('Vegetarian', 'Without', false);
restaurant.getOrder('Kings', 'Ketchup', true);
restaurant.getOrder('Vegetarian', 'Ketchup', false);
restaurant.getOrder('Vegetarian', 'Ketchup', true);
restaurant.getOrder('Classic', 'Garlic', false);
restaurant.getOrder('Kings', 'Garlic', false);
restaurant.getOrder('Classic', 'Ketchup', true);
restaurant.getOrder('Vegetarian', 'Garlic', false);


restaurant.close();
restaurant.getOrder('Classic', 'Ketchup', false);
restaurant.getOrder('Kings', 'Garlic', true);

