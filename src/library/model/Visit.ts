import { Customer } from "./Customer";
import { SafeVisit } from "./SafeVisit";

export type Visit = SafeVisit & {
    id: number;
    type: number;
    customer?: Customer;
};

export enum VisitType {
    UNAVAILABLE = -1, FREE, CUSTOMER
}