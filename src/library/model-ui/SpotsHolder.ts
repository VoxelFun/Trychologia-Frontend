import { Day } from "../utils/Day";
import { Spot } from "./Spot";

export class SpotsHolder {
    public day: Day;
    public spots: Spot[] = [];

    constructor(dayNumber: number) {
        this.day = new Day(dayNumber);
    }

    public setSpots(spots: Spot[]) {
        this.spots = spots;
    }
}