import { Day } from "../utils/Day";

export type VisitMeta = {
    day: number;
    start: number;
    end: number;
    weekSchedulerId: number;
};

export const VisitMeta = {
    toPrettyString(visitMeta: VisitMeta) {
        const date = new Day(visitMeta.day).toDate();
        date.add(visitMeta.start, "minutes");
        return date.format("HH:mm DD.MM.YYYY");
    }
}