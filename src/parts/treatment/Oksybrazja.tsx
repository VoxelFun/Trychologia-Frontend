import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class Oksybrazja extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Oksybrazja, inaczej nazywana mikrodermabrazją wodno-tlenową, polega na aplikacji strumienia 0,9% roztworu soli fizjologicznej połączonego ze sprężonym powietrzem, powodując przy tym bardzo delikatne złuszczanie warstwy rogowej naskórka. Sól fizjologiczna oraz tlen zapewniają w przypadku tej metody efekt złuszczający. Natomiast powietrze, które w trakcie zabiegu ulega rozprężeniu, powoduje efekt chłodzący minimalizując przy tym dyskomfort podczas zabiegu z jednoczesnym wzmacnianiem naczyń krwionośnych.  Zabieg ten jest szczególnie innowacyjną metodą oczyszczania skóry wrażliwej oraz skłonnej do reakcji alergicznych. Zalecany jest również osobom zmagającym się z zapaleniem mieszków włosowych,  przebiegającym z występowaniem wzmożonej ilości bakterii beztlenowych, które zostają dezaktywowane pod wpływem tlenu wprowadzanego w naskórek, łuszczycą w przypadku której nagromadzone w nadmiernej ilości komórki naskórka zostają w delikatny sposób złuszczone oraz w trakcie kuracji przeciwłupieżowej.
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}