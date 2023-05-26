import { BurgerWithKetchup } from "./BurgetWithSauce";
import { CookingPan, Grill, Toaster } from "./Kitchenware";

export class Cook {
    public cookClassicBurger(isMenu: boolean, sauce: string): void {
        const kitchenware = new CookingPan();

        kitchenware.startCookingBurger(sauce);

        if (isMenu) {
            console.log('Adding Medium Pepsi');
            console.log('Adding Medium Fries');
        }


    }

    public cookVegetarianBurger(isMenu: boolean, sauce: string): void {
        const kitchenware = new Toaster();
        
        kitchenware.startCookingBurger(sauce);

        if (isMenu) {
            console.log('Adding Small Pepsi');
            console.log('Adding Small Fries');
            console.log('Adding Small Onion Rings');
        }
    }

    public cookKingsBurger(isMenu: boolean, sauce: string): void {
        const kitchenware = new Grill();

        kitchenware.startCookingBurger(sauce);
        
        if (isMenu) {
            console.log('Adding Large Pepsi');
            console.log('Adding Large Fries');
            console.log('Adding Large Onion Rings');
        }
    }
}