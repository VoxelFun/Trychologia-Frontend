import { DaySchedule } from "../model/DaySchedule";
import { Hour } from "../utils/Hour";

export class UiDaySchedule {
    id: number;
    start: string;
    end: string;
    active: boolean;

    constructor(daySchedule: DaySchedule) {
        this.id = daySchedule.id;
        this.start = new Hour(daySchedule.start).toText();
        this.end = new Hour(daySchedule.end).toText();
        this.active = daySchedule.active;
    }

    toDaySchedule(): DaySchedule {
        return {
            id: this.id,
            start: Hour.fromText(this.start).toMinutes(),
            end: Hour.fromText(this.end).toMinutes(),
            active: this.active
        };
    }
}
