import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class Karboksyterapia extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Zabieg karboksyterapii polega na śródskórnym podaniu określonej dawki medycznego dwutlenku węgla. Dwutlenek węgla występuje naturalnie w naszym organizmie jako efekt metabolizmu komórkowego, zatem zabieg jest całkowicie bezpieczny. Podanie dodatkowej dawki gazu  powoduje natychmiastowa poprawę mikrokrążenia w tkance poddanej zabiegowi poprzez rozszerzenie naczyń krwionośnych, dotlenienie skóry i jej odżywienie. W rezultacie następuje przebudowa macierzy międzykomórkowej skóry, a tym samym stymulacja mieszków włosowych. Wskazaniem do zabiegu jest chęć wzmocnienia włosów, poprawy ich gęstości, pobudzenie mieszków włosowych do wzrostu czy zatrzymanie wypadania włosów. 
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}