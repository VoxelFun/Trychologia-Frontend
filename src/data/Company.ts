import { VisitType } from "../library/model/Visit";


export const Company = {
    NAME: "Klinika trychologiczna",
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

export interface StaffMember {
    name: string,
    description: string
}

export const VisitInfo = {
    DURATION: 30
};

export const StaffMembers: StaffMember[] = [
    {
        name: "Ewa Mielewska",
        description: "Swój chłop"
    },
    {
        name: "Pani X",
        description: "Tożsamość nieznana"
    },
];