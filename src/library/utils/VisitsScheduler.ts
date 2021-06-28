import { CollectionUtils } from "../../utils/CollectionUtils";
import { HashMap } from "../../utils/Delegate";
import { Spot } from "../model-ui/Spot";
import { SpotsHolder } from "../model-ui/SpotsHolder";
import { Visit, VisitType } from "../model/Visit";
import { VisitsHolder } from "../model/VisitsHolder";
import { WeekSchedule } from "../model/WeekSchedule";
import { Day } from "./Day";
import { Hour } from "./Hour";

const VISIT_DURATION = 30;

export class VisitsScheduler {
    private start: number;
    private end: number;
    
    constructor(private weekSchedule: WeekSchedule, private visitsHolders: HashMap<number, VisitsHolder>) {
        this.start = CollectionUtils.min(weekSchedule.daySchedules, daySchedule => daySchedule.start);
        this.end = CollectionUtils.max(weekSchedule.daySchedules, daySchedule => daySchedule.end);
    }

    public getFreeVisits(dayNumber: number, amount: number) {
        const end = new Hour(this.end);
        const day = new Day(dayNumber);

        const spotsHolders: SpotsHolder[] = [];
        for(let i = 0; i < amount; i++) {
            const spots: Spot[] = [];
            const current = new Hour(this.start);

            const visitsHolderParser = new VisitsHolderParser(this.visitsHolders[day.getValue()]);
            const daySchedule = this.weekSchedule.daySchedules[day.getWeekday()];

            while(current.isBefore(end)) {
                const time = current.toMinutes();
                let visitType: VisitType;

                if(daySchedule.start < time || daySchedule.end > time){
                    visitType = VisitType.UNAVAILABLE;
                } else {
                    visitType = visitsHolderParser.getSpotType(time);
                }

                spots.push(new Spot(time, visitType));
                current.addMinutes(VISIT_DURATION);
            }

            const spotsHolder = new SpotsHolder(spots);
            spotsHolders.push(spotsHolder);
            day.add(1);
        }

        return spotsHolders;
    }

}

class VisitsHolderParser {
    private id: number = 0;
    private end: boolean;

    get visit(): Visit {
        return this.visitsHolder.visits[this.id];
    }

    constructor(private visitsHolder: VisitsHolder) {
        this.end = visitsHolder === undefined || !visitsHolder.visits.length;
    }
    
    getSpotType(minutes: number): VisitType {
        if(this.end || this.visit.start < minutes)
            return VisitType.FREE;
        if(this.visit.end > minutes) {
            this.read();
            return this.getSpotType(minutes);
        }
        return this.visit.type;
    }

    private read() {
        this.id++;
    }
}