import { VisitType } from "../library/model/Visit";


export const Company = {
    NAME: "TrychoMedical",
    ADDRESS: "22-220 Gliwice, ul. Swojska 23/12",
    PHONE: "+48 921 821 021",
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