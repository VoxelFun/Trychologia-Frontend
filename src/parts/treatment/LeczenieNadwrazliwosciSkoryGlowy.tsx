import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class LeczenieNadwrazliwosciSkoryGlowy extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Zabieg przeznaczony jest dla osób borykających się z problematyczną i mało tolerancyjną skórą głowy.  Jest to skóra charakteryzująca się  uszkodzoną barierą ochronną, płytkim unaczynieniem widocznym podczas badania trychoskopowego, nadmierną reaktywnością zakończeń nerwowych czy suchością skóry. W przypadku skóry wrażliwej bardzo często występują objawy obiektywne takie jak: obrzęk, rumień, złuszczanie czy subiektywne takie jak: świąd, pieczenie czy uczucie ściągnięcia skóry. Preparaty wykorzystane podczas zabiegu zawierają miedzy innymi: pantenol, allantoinę czy ekstrakt z soi wywierający działanie kojące, jak również olej ze słodkich migdałów i awokado odbudowujący barierę lipidową. 
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}