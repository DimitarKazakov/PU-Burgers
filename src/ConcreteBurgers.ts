import { Burger } from "./Burger";

export class KingsBurger implements Burger {
    cookingRecipe(): void {
        console.log('Cooking Recipe for Kings Burger:');
        console.log('2 tablespoons butter, 1/4 cup mayonnaise, 2 tablespoons Dijon mustard');
        console.log('1-1/2 pounds ground beef');
        console.log('1/3 cup beef broth');
        console.log('6 hamburger buns, split');
        console.log('Shredded lettuce, sliced tomato and red onion');
        console.log('Make burger sauce from the ingredients');
        console.log('In a large bowl, combine beef, broth and 1-1/2 teaspoons hamburger seasoning');
        console.log('Grill burgers, covered, over medium heat 5-7 minutes on each side');
        console.log('Grill buns over medium heat, cut side down, for 30-60 seconds');
        console.log('Assemble your burger and serve');
    }
}

export class ClassicBurger implements Burger {
    cookingRecipe(): void {
        console.log('Cooking Recipe for Classic Burger:');
        console.log('1 cup sour cream, 1/3 cup ketchup, 1/4 sweet relish');
        console.log('8 slices black forest ham or your favorite cooked ham');
        console.log('4 thick-cut deli slices Muenster, Swiss or Gruyère cheese');
        console.log('Lettuce leaves, sliced tomatoes and thinly sliced red onion');
        console.log('Combine spices for burger sauce');
        console.log('On a patty take turns placing ham, cheese and lettuce');
        console.log('After finishing assembling it place it on a pan and heat it');
        console.log('Cut in half in triangle shape and serve');
    }
}

export class VegetarianBurger implements Burger {
    cookingRecipe(): void {
        console.log('Cooking Recipe for Vegetarian Burger:');
        console.log('1/2 red cabbage, grated');
        console.log('2 carrots, grated');
        console.log('100g radishes, sliced');
        console.log('60g halloumi, cut into 4 slices');
        console.log('2 small slices of fresh pineapple');
        console.log('1 Little Gem lettuce, divided into 4 lettuce cups, or 2 small seeded burger buns, cut in half, to serve (optional)');
        console.log('Heat the barbecue and put the ingredients');
        console.log('Assemble your burgers with the lettuce or buns. Start with a handful of the slaw, then add halloumi and pineapple.');
    }
}