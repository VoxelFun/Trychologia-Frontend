import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class MezoterapiaIglowa extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Jest to jedna z najskuteczniejszych technik wykonywania mezoterapii. Opiera się na procedurach przeprowadzania zabiegu, jaką wprowadził oraz rozpowszechnił Dr Michael Pistor.
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                Mezoterapia igłowa skóry głowy polega na śródskórnych nakłuciach z jednoczesnym podaniem medycznego preparatu o silnych właściwościach stymulujących mieszki włosowe. Mezoterapia pobudza i regeneruje mieszki włosowe, przeciwdziała wypadaniu włosów oraz inicjuje ich odrost. Dodatkowo polepsza kondycję skóry głowy i włosów oraz powoduje zwiększone nawilżenie naskórka. 
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                Ampułki które wykorzystujemy podczas zabiegu mezoterapii  zawierają czynniki wzrostu oraz białka biomimetyczne, które stymulują odrost włosów, powodują zwiększenie ich grubości oraz gęstości, a także przeciwdziałają łysieniu o różnej etiologii zarówno w przypadku  kobiet jak i  mężczyzn. 
                </TreatmentComp.Paragraph>
                <TreatmentComp.Paragraph>
                Ilość zabiegów w serii oraz odpowiednie odstępy czasu pomiędzy zabiegami są dobierane indywidualnie w zależności od zaawansowania problemu podczas badania trychologicznego.
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}