

export const Company = {
    NAME: "Klinika trychologiczna",
    ADDRESS: "22-220 Gliwice, ul. Swojska 23/12",
    PHONE: "+48 921 821 021",
    EMAIL: "klinika@open.mail"
};

export interface StaffMember {
    name: string,
    description: string
}

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