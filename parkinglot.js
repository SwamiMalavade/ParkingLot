import { Floor } from './floor';

export class ParkingLot{
    floors = [];
    constructor(numberOfFloors){
        for(i=0; i<numberOfFloors.length; i++){
            const currentObj = new Floor();
            this.floors.push(currentObj);
        }
    }

    parkCar = (vehicleNumber) =>{
        for(i=0; i<this.floors.length; i++){
            currentObj = this.floors[i];
            if(currentObj.isEmpty()){
                currentObj.parkVehicle(vehicleNumber);
            }
        }
        return "Vehicle Parked!"
    }

    unparkCar = (vehicleNumber) => {
        for(i=0; i<this.floors.length; i++){
            currentObj = this.floors[i];
            if(currentObj == vehicleNumber){
                currentObj.unparkVehicle(vehicleNumber);
            }
        }
        return "Vehicle not Found"
    }
}