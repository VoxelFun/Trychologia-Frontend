import moment from "moment";


export class Day {

    public constructor(private value: number) {}

    public getValue(): number {
        return this.value;
    }

    public getWeekday(): number {
        const start = moment("1970-01-01", "YYYY-MM-DD");
        return start.add(this.value, "days").day() - 1;
    }

    public add(days: number): Day {
        this.value += days;
        return this;
    }

    public subtract(days: number): Day {
        this.value -= days;
        return this;
    }

    static get now(): Day {
        const start = moment("1970-01-01", "YYYY-MM-DD");
        const today = moment();
        return new Day(today.diff(start, "days"));
    } 

}