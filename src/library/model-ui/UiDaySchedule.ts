import { DaySchedule } from "../model/DaySchedule";
import { Hour } from "../utils/Hour";

export class UiDaySchedule {
    start: string;
    end: string;

    constructor(daySchedule: DaySchedule) {
        this.start = new Hour(daySchedule.start).toText();
        this.end = new Hour(daySchedule.end).toText();
    }

    toDaySchedule(): DaySchedule {
        return {
            start: Hour.fromText(this.start).toMinutes(),
            end: Hour.fromText(this.end).toMinutes()
        };
    }
}
