import { Day } from "../utils/Day";
import { Spot } from "./Spot";

export class SpotsHolder {
    public day: Day;

    constructor(dayNumber: number, public spots: Spot[]) {
        this.day = new Day(dayNumber);
    }
}