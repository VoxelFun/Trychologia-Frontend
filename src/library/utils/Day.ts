import moment from "moment";
import 'moment/locale/pl';
import { StringUtils } from "../../utils/StringUtils";


export class Day {

    public constructor(private value: number) {}

    public static fromDate(date: Date) {
        const start = moment("1970-01-01", "YYYY-MM-DD");
        const end = moment(date);
        return new Day(end.diff(start, "days"));
    }

    public getValue(): number {
        return this.value;
    }

    public getWeekday(): number {
        return this.toDate().isoWeekday() - 1;
    }

    public add(days: number): Day {
        this.value += days;
        return this;
    }

    public subtract(days: number): Day {
        this.value -= days;
        return this;
    }

    public toDate() {
        const start = moment("1970-01-01", "YYYY-MM-DD");
        return start.add(this.value, "days");
    }

    public toMonthDay() {
        return this.toDate().format("DD.MM");
    }

    public toWeekDayName() {
        return this.toDate().format("dd");
    }

    public toText() {
        return this.toDate().format("dddd DD.MM.YYYY");
    }

    static get now(): Day {
        const today = new Date();
        return Day.fromDate(today);
    } 

}