import { Cook } from "./Cook";
import { Order } from "./Order";

export class ClassicBurgerOrder implements Order {
    private cook: Cook;
    private isMenu: boolean;
    private sauce: string;
    
    constructor(cook: Cook, isMenu: boolean, sauce = '') {
        this.cook = cook;
        this.isMenu = isMenu;
        this.sauce = sauce;
    }

    startPreparing(): void {
        this.cook.cookClassicBurger(this.isMenu, this.sauce);
    }
}

export class VegetarianBurgerOrder implements Order {
    private cook: Cook;
    private isMenu: boolean;
    private sauce: string;
    
    constructor(cook: Cook, isMenu: boolean, sauce = '') {
        this.cook = cook;
        this.isMenu = isMenu;
        this.sauce = sauce;
    }

    startPreparing(): void {
        this.cook.cookVegetarianBurger(this.isMenu, this.sauce);
    }
}

export class KingsBurgerOrder implements Order {
    private cook: Cook;
    private isMenu: boolean;
    private sauce: string;
    
    constructor(cook: Cook, isMenu: boolean, sauce = '') {
        this.cook = cook;
        this.isMenu = isMenu;
        this.sauce = sauce;
    }

    startPreparing(): void {
        this.cook.cookKingsBurger(this.isMenu, this.sauce);
    }
}