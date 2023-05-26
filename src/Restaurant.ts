import { Cashier } from "./Cashier";
import { Cook } from "./Cook";
import { Order } from "./Order";
import { ClassicBurgerOrder, KingsBurgerOrder, VegetarianBurgerOrder } from "./Orders";

export class Restaurant {
    private static instance: Restaurant;
    private cook?: Cook;
    private cashier?: Cashier;
    public burgers: number = 0;

  private constructor() {}

  public static getInstance(): Restaurant {
    if (!Restaurant.instance) {
        Restaurant.instance = new Restaurant();
    }

    return Restaurant.instance;
  }

  public open(): void {
    this.cashier = new Cashier();
    this.cook = new Cook();
    this.burgers = 0;
  }

  public close(): void {
    this.cashier = undefined;
    this.cook = undefined;
    console.log(`Todays burgers: ${this.burgers}`);
  }

  public getOrder(burger: string, sauce: string, menu: boolean): void {
    if (!this.cook || !this.cashier) {
        console.log('Sorry the restaurant is closed');
        return;
    }

    let order: Order;

    switch (burger) {
        case 'Classic':
            order = new ClassicBurgerOrder(this.cook, menu, sauce);
            break;
        case 'Kings':
            order = new KingsBurgerOrder(this.cook, menu, sauce);
            break;
        case 'Vegetarian':
            order = new VegetarianBurgerOrder(this.cook, menu, sauce);
            break;
        default:
            console.log('We dont have such burger');
            return;
    }

    this.cashier.getOrderFromCustomer(order);
    
    setTimeout(() => {
        
    }, 1);

    this.cashier.startOrder();

    console.log('Here you go your burger, come again...\n');
    this.burgers++;
  }
}