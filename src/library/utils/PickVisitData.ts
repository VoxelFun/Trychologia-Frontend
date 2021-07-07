import { Spot } from "../model-ui/Spot";
import { VisitMeta } from "../model/VisitMeta";

export interface PickVisitData {
    visitMeta: VisitMeta;
    spot: Spot;
    key: {
        ctrl: boolean;
        shift: boolean;
    }
}