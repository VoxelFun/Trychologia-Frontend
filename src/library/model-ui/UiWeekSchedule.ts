import { WeekSchedule } from "../model/WeekSchedule";
import { UiDaySchedule } from "./UiDaySchedule";

export class UiWeekSchedule {
    daySchedules: Array<UiDaySchedule | undefined>;

    constructor(weekSchedule: WeekSchedule) {
        this.daySchedules = weekSchedule.daySchedules.map(daySchedule => (
            daySchedule && new UiDaySchedule(daySchedule)
        ));
    }

    toWeekSchedule(): WeekSchedule {
        return {
            daySchedules: this.daySchedules.map(daySchedule => (
                daySchedule?.toDaySchedule()
            ))
        };
    }
}