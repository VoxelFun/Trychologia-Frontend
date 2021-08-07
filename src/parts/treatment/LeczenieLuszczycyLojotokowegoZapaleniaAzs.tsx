import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class LeczenieLuszczycyLojotokowegoZapaleniaAzs extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Łuszczyca,  łojotokowe zapalenie skóry czy atopowe zapalenie skóry są to choroby o podłożu autoimmunologicznym, genetycznym i środowiskowym. 
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                Kuracja wspomagająca w leczeniu tych dermatoz opiera  się na pielęgnacji skóry zarówno w okresie zmian aktywnych jak i w czasie remisji choroby. Składniki aktywne wykorzystywane podczas zabiegu to między innymi ichtiol wykazujący działanie antybakteryjne, przeciwgrzybicze, a także łagodzące uciążliwy świąd skóry. Piroktonian olaminy, który ogranicza łuszczenie się zmian występujących na skórze, poprzez normalizacje keratynizacji naskórka. Skoncentrowane substancje roślinne takie jak m.in.: olejek z szałwi, rumianek działający kojąco czy rozmaryn lekarski przyśpieszający regeneracje naskórka.  I wiele innych składników leczniczych o specjalnie skomponowanej recepturze i stężeniu.
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                Choroby o podłożu autoimmunologicznym wiążą się z naprzemiennie występującymi okresami progresji i wyciszenia, jednak odpowiednio dobra kuracja trychologiczną i pielęgnacja pozwala utrzymać skórę dotkniętą problemem w okresie remisji jak najdłużej, pomaga w wyciszeniu zmian zapalnych, a tym samym może polepszyć komfort życia.
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}