import { Theme } from "../../data/Theme";
import { SpotsHolder } from "./SpotsHolder";

export class Spot {
    public picked: boolean = false;
    public edited: boolean = false;

    public get index() {
        return this.holder.spots.indexOf(this);
    }

    public get unpickable() {
        return this.spotType === SpotType.UNAVAILABLE;
    }

    constructor(public holder: SpotsHolder, public start: number, public spotType: SpotType) {
        
    }

    getColor() {
        if(this.picked) {
            return SpotColor.PICKED;
        } else {
            return SpotColor[this.spotType];
        }
    }

    isBefore(spot: Spot) {
        return this.start < spot.start;
    }

    sameHolder(spot: Spot) {
        return this.holder === spot.holder;
    }

    setType(spotType: SpotType) {
        this.spotType = spotType;
        this.edited = true;
    }

    togglePicked() {
        this.picked = !this.picked;
    }
}

export enum SpotType {
    UNAVAILABLE = -1, FREE, CUSTOMER
}

const SpotColor = {
    PICKED: Theme.accent,
    [SpotType.UNAVAILABLE]: Theme.grey,
    [SpotType.FREE]: Theme.primary,
    [SpotType.CUSTOMER]: "blue",
};