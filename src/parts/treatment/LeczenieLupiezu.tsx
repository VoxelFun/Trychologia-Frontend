import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class LeczenieLupiezu extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Zabieg przeznaczony dla osób zmagających się z łupieżem suchym bądź z łupieżem tłustym o podłożu łojotokowym. Istnieje wiele przyczyn powstawania łupieżu, do których  możemy zaliczy:  zaburzenia na tle  autoimmunologicznym, stres, niedobory witamin lub cynku, nieodpowiednia dieta, czy namnażanie się chorobotwórczej mikroflory. Jednak równie częstą przyczyną powstawania łupieżu jest nieodpowiednia pielęgnacja, stosowanie kosmetyków zawierających SLS-y, parabeny czy alkohole, które wysuszają i podrażniają skórę.
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                Podczas kuracji przeciwłupieżowej stosujemy odpowiednio skoncentrowane i dobrane preparaty trychologiczne, które w bezpieczny sposób usuwają nagromadzoną w nadmiernej ilości łuskę, nawilżają skórę, niwelują świąd, oraz normalizują proces keratynizacji naskórka, tak aby zminimalizować ryzko pojawienia się łupieżu w przyszłości. 
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}