import { VisitType } from "../library/model/Visit";

const PHONE = "533 519 305";

export const Company = {
    NAME: "TrychoMedical",
    ADDRESS: "Norberta Barlickiego 11/I, 44-100 Gliwice",
    PHONE: PHONE,
    FULL_PHONE: "+48 " + PHONE,
    EMAIL: "trychomedical@gmail.com"
};

export const VisitTypeLabel = {
    [VisitType.FREE as number]: "Wolna",
    [VisitType.CUSTOMER as number]: "Klient",
    [VisitType.TREATMENT as number]: "Zabieg",
    [VisitType.VACATION as number]: "Urlop",
};

export const VisitInfo = {
    DURATION: 30
};