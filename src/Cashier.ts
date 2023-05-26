import { Order } from "./Order";

export class Cashier {
    private currentOrder?: Order;

    public getOrderFromCustomer(order: Order): void {
        this.currentOrder = order;
    }

    public startOrder(): void {
        if (this.currentOrder) {
            this.currentOrder.startPreparing();
        } else {
            console.log('Waiting for order...');
        }
    }
}