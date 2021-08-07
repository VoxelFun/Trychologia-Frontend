import TreatmentSection, { TreatmentComp } from "./TreatmentSection";

export default class LeczenieLojotoku extends TreatmentSection {

    Content(): JSX.Element {
        return (
            <>
                <TreatmentComp.Paragraph>
                Zabieg manualny mający na celu normalizacje pracy gruczołów łojowych, a w rezultacie zmniejszenie wydzielania sebum. Podczas zabiegu na skórę głowy nakłada się między innymi ekstrakt mający na celu złuszczenie powierzchownej warstwy naskórka i oczyszczenie ujść mieszków włosowych. Zalegająca w tych miejscach wydzielina często powoduje nadmierne przetłuszczanie włosów, powstawanie stanów zapalnych w obrębie owłosionej skory głowy, czy nawet wzmożone wypadanie włosów. Podczas zabiegu wykorzystywane są preparaty zawierające miedzy innymi olejki eteryczne z eukaliptusa o silnym działaniu antybakteryjnym, olejek z drzewa herbacianego o działaniu przeciwzapalnym, czy goździki wykazujące działanie antyseptyczne. Celem uzyskania jeszcze lepszego przeciwłojotokowego efektu zabieg można połączyć z darsonwalizacją owłosionej skóry głowy 
                </TreatmentComp.Paragraph>
            </>
        );
    }
    
}