import { Burger } from "./Burger";
import { ClassicBurger, KingsBurger, VegetarianBurger } from "./ConcreteBurgers";
import { Kitchen } from "./Kitchen";

export class Grill extends Kitchen {
    public getIngredientsForBurger(): Burger {
        return new KingsBurger();
    }
}

export class Toaster extends Kitchen {
    public getIngredientsForBurger(): Burger {
        return new VegetarianBurger();
    }
}

export class CookingPan extends Kitchen {
    public getIngredientsForBurger(): Burger {
        return new ClassicBurger();
    }
}