import { DaySchedule, DummyDaySchedule } from "./DaySchedule";

export type WeekSchedule = {
    daySchedules: Array<DaySchedule | undefined>;
};

export const DummyWeekSchedule : WeekSchedule = {
    daySchedules: [
        DummyDaySchedule,
        DummyDaySchedule,
        DummyDaySchedule,
        DummyDaySchedule,
        DummyDaySchedule,
        undefined,
        undefined
    ]
};