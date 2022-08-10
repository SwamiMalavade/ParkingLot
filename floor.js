import { Slot } from './slot.js';

export class Floor{
    slots = [];
    constructor(numberOfSlots){
        for(let i=0; i<numberOfSlots; i++){
            const currentSlot = new Slot();
            this.slots.push(currentSlot)
        }
    }
    
    parkVehicle = (vehicleNumber) => {
        let isVehicleParked = false;
        for(let i=0; i<this.slots.length; i++){
            currentObj = this.slots[i];
            if(currentObj.isEmpty()){
                currentObj.parkVehicle(vehicleNumber);
                isVehicleParked = true;
                break;
            }
        }
        return isVehicleParked;
    }

    unparkVehicle = (vehicleNumber) => {
        let isVehicleUnparked = false;
        for(let i=0; i<this.slots.length; i++){
            currentObj = this.slots[i];
            if(currentObj == vehicleNumber){
                currentObj.unparkVehicle();
                isVehicleUnparked = true;
                break;
            }
        }
        return isVehicleUnparked
    }
    
}