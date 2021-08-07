import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class PradyDArsonvala extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Zabieg darsonwalizacji polega na wykorzystaniu prądu o długości fali od 100 do                 600 m, i częstotliwość drgań wynosząca od 300 – 500 kHz. Jest to prąd chrakteryzujący się wysokim napięciem, ale niskim natężeniem, zatem jest całkowicie bezpieczny. Zabieg ten wykonywany jest za pomocą elektrod próżniowych lub elektrod zawierających gaz szlachetny. Podczas kontaktu ze skórą wytwarza się wyładowanie elektryczne i w efekcie powstanie ozonu, o silnych właściwościach antybakteryjnych, odkażających, czy dezynfekujących. Darsonwalizacja powoduje ograniczenie łupieżu, normalizuje pracę gruczołów łojowych, jak również wywiera terapeutyczny efekt w przypadku leczenia zapalenia mieszków włosowych czy innych stanów zapalnych owłosionej skóry głowy. 
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}