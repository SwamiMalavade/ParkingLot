export class Slot{
    vehiclenumber= "";

    isEmpty= () => this.vehiclenumber == "";

    parkVehicle= (vehiclenumber) => this.vehiclenumber= vehiclenumber;

    unparkVehicle= () => this.vehiclenumber= "";

    hasVehicle= (vehiclenumber) => this.vehiclenumber== vehiclenumber;

}