import React from "react";
import InfuzjaTlenowa from "../parts/treatment/InfuzjaTlenowa";
import Karboksyterapia from "../parts/treatment/Karboksyterapia";
import LeczenieLojotoku from "../parts/treatment/LeczenieLojotoku";
import LeczenieLupiezu from "../parts/treatment/LeczenieLupiezu";
import LeczenieLuszczycyLojotokowegoZapaleniaAzs from "../parts/treatment/LeczenieLuszczycyLojotokowegoZapaleniaAzs";
import LeczenieLysienia from "../parts/treatment/LeczenieLysienia";
import LeczenieNadwrazliwosciSkoryGlowy from "../parts/treatment/LeczenieNadwrazliwosciSkoryGlowy";
import MezoterapiaIglowa from "../parts/treatment/MezoterapiaIglowa";
import MezoterapiaMikroiglowa from "../parts/treatment/MezoterapiaMikroiglowa";
import MezoterapiaPeptydowa from "../parts/treatment/MezoterapiaPeptydowa";
import Oksybrazja from "../parts/treatment/Oksybrazja";
import PradyDArsonvala from "../parts/treatment/PradyDArsonvala";
import { TreatmentSectionProps } from "../parts/treatment/TreatmentSection";

export interface Treatment {
    id: string;
    label: string;
    render: (props: TreatmentSectionProps) => JSX.Element;
}

interface TreatmentGroup {
    id: string;
    label: string,
    members: Treatment[];
}

export const TreatmentGroups: TreatmentGroup[] = [
    {
        id: "manualne",
        label: "Manualne",
        members: [
            {
                id: "infuzja-tlenowa",
                label: "Infuzja tlenowa",
                render: props => <InfuzjaTlenowa {...props}/>,
            },
            {
                id: "prady-d-arsonvala",
                label: "Prądy D`Arsonvala",
                render: props => <PradyDArsonvala {...props}/>,
            },
            {
                id: "leczenie-lysienia",
                label: "Leczenie łysienia",
                render: props => <LeczenieLysienia {...props}/>,
            },
            {
                id: "leczenie-lojotoku",
                label: "Leczenie łojotoku",
                render: props => <LeczenieLojotoku {...props}/>,
            },
            {
                id: "leczenie-nadwrazliwosci-skory-glowy",
                label: "Leczenie nadwrażliwości skóry głowy",
                render: props => <LeczenieNadwrazliwosciSkoryGlowy {...props}/>,
            },
            {
                id: "leczenie-lupiezu",
                label: "Leczenie łupieżu",
                render: props => <LeczenieLupiezu {...props}/>,
            },
            {
                id: "leczenie-luszczycy-lojotokowego-zapalenia-azs",
                label: "Wspomaganie leczenia łuszczycy, łojotokowego zapalenia skóry i AZS",
                render: props => <LeczenieLuszczycyLojotokowegoZapaleniaAzs {...props}/>,
            },
        ]
    },
    {
        id: "iniekcyjne",
        label: "Iniekcyjne",
        members: [
            {
                id: "mezoterapia-mikroiglowa",
                label: "Mezoterapia mikroigłowa",
                render: props => <MezoterapiaMikroiglowa {...props}/>,
            },
            {
                id: "mezoterapia-iglowa",
                label: "Mezoterapia igłowa",
                render: props => <MezoterapiaIglowa {...props}/>,
            },
            {
                id: "mezoterapia-peptydowa",
                label: "Mezoterapia peptydowa",
                render: props => <MezoterapiaPeptydowa {...props}/>,
            },
            {
                id: "karboksyterapia",
                label: "Karboksyterapia",
                render: props => <Karboksyterapia {...props}/>,
            },
            {
                id: "oksybrazja",
                label: "Oksybrazja",
                render: props => <Oksybrazja {...props}/>,
            },
        ]
    },
];