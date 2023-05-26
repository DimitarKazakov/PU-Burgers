import { Burger } from "./Burger";
import { BurgerWithGarlicSauce, BurgerWithKetchup } from "./BurgetWithSauce";

export abstract class Kitchen {
    public startCookingBurger(sauce: string): void { //! метод който ще вика логиката за създаване на бургетите от конкретния клас
        let burgerIngredienst = this.getIngredientsForBurger();
        switch (sauce) {
            case 'Ketchup':
                burgerIngredienst = new BurgerWithKetchup(burgerIngredienst);
                break;
            case 'Garlic':
                burgerIngredienst = new BurgerWithGarlicSauce(burgerIngredienst);
                break;
            default:
                break;
        }

        console.log('\nStarting preparation for cooking a burger');
        burgerIngredienst.cookingRecipe();
    }

    public abstract getIngredientsForBurger(): Burger; //! метод за създаването на бургерите
}