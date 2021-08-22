import { VisitInfo } from "../../data/Company";
import { CollectionUtils } from "../../utils/CollectionUtils";
import { HashMap } from "../../utils/Delegate";
import { Spot, SpotType } from "../model-ui/Spot";
import { SpotsHolder } from "../model-ui/SpotsHolder";
import { SafeVisit } from "../model/SafeVisit";
import { SafeVisitsHolder } from "../model/SafeVisitsHolder";
import { SafeWeekSchedule } from "../model/SafeWeekSchedule";
import { Day } from "./Day";
import { Hour } from "./Hour";

export class VisitsScheduler {
    public spotsTimes: string[] = [];

    private start: number;
    private end: number;
    private visitsHolders: HashMap<number, SafeVisitsHolder>;
    public spotsHolders: HashMap<number, SpotsHolder>;

    public get WeekScheduleId() {
        return this.weekSchedule.id;
    }
    
    constructor(private weekSchedule: SafeWeekSchedule) {
        const daySchedules = weekSchedule.daySchedules.filter(daySchedule => daySchedule.active);
        this.start = CollectionUtils.min(daySchedules, daySchedule => daySchedule.start);
        this.end = CollectionUtils.max(daySchedules, daySchedule => daySchedule.end);
        this.visitsHolders = weekSchedule.visitsHolders;
        this.spotsHolders = {};
    }

    public getFreeVisits(dayNumber: number, amount: number) {
        const end = new Hour(this.end);
        const day = new Day(dayNumber);
        const dayNow = Day.now;
        const hourNow = Hour.now;

        const spotsHolders: SpotsHolder[] = [];
        for(let i = 0; i < amount; i++) {
            
            if(this.spotsHolders[day.getValue()]) {
                spotsHolders.push(this.spotsHolders[day.getValue()]);
                day.add(1);
                continue;
            }

            const visitsHolderParser = new VisitsHolderParser(this.visitsHolders[day.getValue()]);
            const daySchedule = this.weekSchedule.daySchedules[day.getWeekday()];
            const spotsHolder = new SpotsHolder(day.getValue());
            
            const spots: Spot[] = [];
            const current = new Hour(this.start);
            const times: string[] | undefined = this.spotsTimes.length ? undefined : [];

            while(current.isBefore(end)) {
                const time = current.toMinutes();
                let spotType: SpotType;


                if(!daySchedule.active || dayNow.getValue() > day.getValue() || dayNow.getValue() === day.getValue() && current.isBefore(hourNow) || daySchedule.start > time || daySchedule.end <= time){
                    spotType = SpotType.UNAVAILABLE;
                } else {
                    spotType = visitsHolderParser.getSpotType(time);
                }

                spots.push(new Spot(spotsHolder, time, spotType));
                if(times)
                    times.push(current.toText());
                current.addMinutes(VisitInfo.DURATION);
            }

            spotsHolder.setSpots(spots);
            spotsHolders.push(spotsHolder);
            this.spotsHolders[day.getValue()] = spotsHolder;
            day.add(1);

            if(times)
                this.spotsTimes = times;
        }

        return spotsHolders;
    }

}

class VisitsHolderParser {
    private id: number = 0;
    private end: boolean;

    get visit(): SafeVisit {
        return this.visitsHolder.visits[this.id];
    }

    constructor(private visitsHolder: SafeVisitsHolder) {
        this.end = visitsHolder === undefined || !visitsHolder.visits.length;
    }
    
    getSpotType(minutes: number): SpotType {
        if(this.end || this.visit.start > minutes)
            return SpotType.FREE;
        if(this.visit.end <= minutes) {
            this.read();
            return this.getSpotType(minutes);
        }
        //@ts-ignore
        return this.visit.type || SpotType.UNAVAILABLE;
    }

    private read() {
        this.end = ++this.id === this.visitsHolder.visits.length;
    }
}