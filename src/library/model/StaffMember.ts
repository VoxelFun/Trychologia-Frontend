import { WeekSchedule } from "./WeekSchedule";

export type StaffMember = {
    name: string;
    description: string;
    weekSchedules: WeekSchedule[];
};