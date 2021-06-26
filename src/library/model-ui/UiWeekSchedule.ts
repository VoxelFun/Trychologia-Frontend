import { WeekSchedule } from "../model/WeekSchedule";
import { UiDaySchedule } from "./UiDaySchedule";

export class UiWeekSchedule {
    id: number;
    daySchedules: UiDaySchedule[];

    constructor(weekSchedule: WeekSchedule) {
        this.id = weekSchedule.id;
        this.daySchedules = weekSchedule.daySchedules.map(daySchedule => (
            new UiDaySchedule(daySchedule)
        ));
    }

    toWeekSchedule(): WeekSchedule {
        return {
            id: this.id,
            daySchedules: this.daySchedules.map(daySchedule => (
                daySchedule.toDaySchedule()
            ))
        };
    }
}