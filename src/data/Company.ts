import { VisitType } from "../library/model/Visit";


export const Company = {
    NAME: "TrychoMedical",
    ADDRESS: "Norberta Barlickiego 11/I, 44-100 Gliwice",
    PHONE: "+48 533 519 305",
    EMAIL: "klinika@open.mail"
};

export const VisitTypeLabel = {
    [VisitType.FREE]: "Wolna",
    [VisitType.CUSTOMER]: "Klient",
    [VisitType.TREATMENT]: "Zabieg",
    [VisitType.VACATION]: "Urlop",
};

export const VisitInfo = {
    DURATION: 30
};