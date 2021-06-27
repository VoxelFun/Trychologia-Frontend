import { HashMap } from "../../utils/Delegate";
import { VisitsHolder } from "../model/VisitsHolder";
import { WeekSchedule } from "../model/WeekSchedule";
import { UiDaySchedule } from "./UiDaySchedule";

export class UiWeekSchedule {
    id: number;
    daySchedules: UiDaySchedule[];
    visitsHolders: HashMap<number, VisitsHolder>;

    constructor(weekSchedule: WeekSchedule) {
        this.id = weekSchedule.id;
        this.daySchedules = weekSchedule.daySchedules.map(daySchedule => (
            new UiDaySchedule(daySchedule)
        ));
        this.visitsHolders = weekSchedule.visitsHolders;
    }

    toWeekSchedule(): WeekSchedule {
        return {
            id: this.id,
            daySchedules: this.daySchedules.map(daySchedule => (
                daySchedule.toDaySchedule()
            )),
            visitsHolders: this.visitsHolders
        };
    }
}