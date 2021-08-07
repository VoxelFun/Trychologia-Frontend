import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class InfuzjaTlenowa extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                    Wykorzystanie hiperbarycznego tlenu w medycynie znane jest od dawna, jednak najnowsze doniesienia mówiące o skuteczności wykorzystania tlenu w zabiegach hamujących wypadanie włosów sprawiają, że zabiegi infuzji tlenowej stają się coraz popularniejsze w gabinetach trychologicznych oraz kosmetologicznych. Zabiegi te, są całkowicie bezbolesne oraz nieinwazyjne, stanowią więc alternatywę dla zabiegów ingerujących w naruszenie bariery naskórkowej. Ponadto, skóra po infuzji tlenowej nie wymaga okresu rekonwalescencji, jak również nie odnotowano żadnych niepożądanych efektów występujących po zabiegu, zatem są one całkowicie bezpieczne.
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                    Infuzja tlenowa opiera się na intensywnym wtłaczaniu substancji aktywnych w głąb skóry (umieszczonych w dozowniku urządzenia) pod wpływem tlenu. Mechanizm ten polega na rozluźnianiu się połączeń korneocytów naskórka w skutek nakierowania na niego strumienia tlenu pod ciśnieniem. Dzięki temu procesowi substancje aktywne mogą łatwiej przenikać przez powierzchowne warstwy naskórka.
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}