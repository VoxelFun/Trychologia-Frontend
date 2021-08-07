import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class LeczenieLysienia extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Zabieg manualny mający na celu zahamowanie wypadania włosów i stymulacje ich wzrostu.  Wykorzystanie ekstraktów roślinnych, olejków eterycznych czy minerałów takich jak magnez, mangan, cynk czy kobalt, wpływa pozytywnie na przedłużenie fazy wzrostu włosa, a zastosowanie naturalnego inhibitora 5-alfa reduktazy powstrzymuje proces miniaturyzacji mieszków włosowych. Podczas kuracji wykonywany jest masaż limfatyczny owłosionej skóry głowy, który silnie pobudza mikrokrążenie, dzięki czemu mieszki i skóra głowy są lepiej dotlenione i odżywione. Zabiegi można również wykonywać w kuracji łączonej tzn. w połączeniu z zabiegami inwazyjnymi, pozwoli to na uzyskanie jeszcze lepszych efektów terapeutycznych. 
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}