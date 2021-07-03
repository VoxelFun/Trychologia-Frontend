import { VisitType } from "../model/Visit";
import { Hour } from "../utils/Hour";

export class Spot {
    public picked: boolean = false;

    constructor(private start: number, public spotType: SpotType) {
        
    }

    getColor() {
        if(this.picked) {
            return SpotColor.PICKED;
        } else {
            return SpotColor[this.spotType];
        }
    }

    togglePicked() {
        this.picked = !this.picked;
    }
}

export enum SpotType {
    UNAVAILABLE = -1, FREE, CUSTOMER
}

const SpotColor = {
    PICKED: "orange",
    [SpotType.UNAVAILABLE]: "red",
    [SpotType.FREE]: "green",
    [SpotType.CUSTOMER]: "blue",
};