import { VisitType } from "../model/Visit";
import { Hour } from "../utils/Hour";

export class Spot {
    constructor(private start: number, public visitType: VisitType) {
        
    }
}