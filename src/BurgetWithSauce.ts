import { Burger } from "./Burger";

//! Базов декоратор клас
export class BurgerWithSauce implements Burger {
    protected burger: Burger;

    
    constructor(burger: Burger) {
        this.burger = burger;
    }

    public cookingRecipe(): void {
        return this.burger.cookingRecipe();
    }
}

export class BurgerWithKetchup extends BurgerWithSauce {
    public cookingRecipe(): void {
        super.cookingRecipe();
        console.log('Putting Ketchup on the Burger');
    }
}

export class BurgerWithGarlicSauce extends BurgerWithSauce {
    public cookingRecipe(): void {
        super.cookingRecipe();
        console.log('Putting Garlic Sauce on the Burger');
    }
}