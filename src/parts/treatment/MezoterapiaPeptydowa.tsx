import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class MezoterapiaPeptydowa extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Wykorzystywany podczas tej mezoterapii igłowej preparat peptydowy, jest jednym z  najnowszych i najbardziej efektywnych rodzajów mezoterapii owłosionej skóry głowy.
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                Iniekcje wykonywane koktajlem peptydowym cechują się innowacyjną formuła, która umożliwia uzyskanie szybkich i długotrwałych efektów. Preparat po podaniu utrzymuje się aż do 14 dni po wykonaniu zabiegu co czyni go innowacyjnym w porównaniu z innymi rodzajami mezoterapii. Mezoterapia peptydowa doskonale sprawdza się w przypadku reaktywnego wypadania włosów, wzmożonej utraty włosów po infekcji COVID-19 czy w przypadku zawansowanego przerzedzenia włosów. 
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}