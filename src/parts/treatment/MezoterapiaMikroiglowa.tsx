import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class MezoterapiaMikroiglowa extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Mezoterapia mikroigłowa jest zabiegiem opierającym się na kontrolowanym nakłuwaniu skóry przy wykorzystaniu działania Dermapenu bądź Dermarollerów.
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                Technika mikronakłuwania skóry umożliwia w mechaniczny sposób przeznaskórkowe wprowadzanie składników aktywnych, a przy tym umożliwia przebudowę kolagenu oraz składników macierzy międzykomórkowej. 
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                W trakcie mikronakłuwania skóry tworzą się w niej mikropory, które umożliwiają intensywny, przeznaskórkowy transport składników aktywnych z zaaplikowanego wcześniej preparatu stymulującego wzrost włosów.  Na skutek mechanicznego mikrouszkodzenia skóry następuje inicjacja procesu zapalnego w obrębie tej tkanki. W wyniku uszkodzenia naczyń włosowatych oraz krwionośnych uwolnione zostają czynniki wzrostu, co skutkuje zwiększoną proliferacją komórek, aktywacją fibroblastów i komórek macierzystych w obrębie mieszka włosowego. 
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}