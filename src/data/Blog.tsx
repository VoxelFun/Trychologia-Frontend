import React from "react";
import styled from "styled-components";

export interface Blog {
    id: string;
    title: string;
    text: JSX.Element;
    sources: string[];
}

const Paragraph = styled.p`
    text-indent: 2em;
`;

export const BlogTopics: Blog[] = [
    {
        id: "trycholog-jaka-jest-jego-rola",
        title: "Trycholog. Jaka jest jego rola?",
        text: (
            <>
            <Paragraph>
            Trychologia to dziedzina nauki, która dotyczy wszystkich aspektów włosów i owłosionej skóry głowy. Trycholodzy natomiast zajmują się wspomaganiem leczenia skóry głowy oraz włosów w obrębie głowy czy brody. Warto tutaj także podkreślić, że nie ma w Polsce specjalizacji medycznej „trycholog”. Zatem posługiwanie się terminologią „lekarz od włosów”, czy marketingowymi hasłami „dofinansowana wizyta” (które nie są zgodne z prawdą, gdyż konsultacje trychologiczne czy kosmetologiczne nie są w Polsce w żaden sposób refundowane) wprowadza klienta w błąd i może być źródłem nieporozumień.  Zatem udając się do trychologa udajesz się do specjalisty zajmującego profesjonalną pielęgnacją, a w niektórych przypadkach wspomaganiem leczenia obszaru skóry głowy i włosów. W Polsce nie ma niestety uregulowań prawnych mówiących o tym kto może posługiwać się tym terminem. W efekcie tego powstaje dużo nieporozumień i <b>zdarza się, że zawód ten jest niesprawiedliwie oceniany przez klientów, którzy są rozczarowani trafiając na „trychologa” po weekendowych kursach czy udając się do gabinetów, które zajmują się w głównej mierze sprzedażą wyjątkowych kosmetyków</b> (zazwyczaj jednej marki) i bardziej specjalizują się w praktykowanym przez lata, opatrzonym marketingowi hasłami handlu niż konkretnej pomocy osobie, która zdecydowała się na konsultację. Takie podejście powoduje rozczarowanie klienta, który oczekuje porady, szeroko rozumianej poprzez zmianę konkretnych nawyków pielęgnacyjnych, kosmetycznych czy żywieniowych.
            </Paragraph>
            <Paragraph>
            <b>Czy polecanie konkretnych marek szamponów, wcierek itp. jest złe?</b> Niezupełnie. Trycholodzy w głównej mierze polecają produkty i dermokosmetyki wiodącej marki, o opracowanych i sprawdzonych formułach, które zostały przetestowane i przynoszą realne korzyści w pielęgnacji owłosionej skóry głowy. Należy jednak pamiętać, że są to produkty profesjonalne, często bazujące na olejkach i ekstraktach roślinnych, co powoduje, że ich cena jest wyższa od standardowych produktów dostępnych w drogeriach czy aptekach.<b> Klienci korzystający z tych produktów w znakomitej większości są zadowoleni i chętnie do nich wracają niejednokrotnie wdrażając je do codziennej pielęgnacji.</b> Należy zdawać sobie sprawę, że nie każda osoba, która korzysta z usług gabinetu trychologicznego jest w stanie „pozwolić sobie” na taką pielęgnacje, choćby z przyczyn finansowych. Specjalista natomiast w moim odczuciu jest od tego, żeby doradzić klientowi inną zamienną pielęgnację dostosowaną do jego potrzeb, co niestety nie jest regułą w każdym gabinecie trychologicznym. 
            </Paragraph>
            <Paragraph>
           <b> Zatem, do jakiego specjalisty trychologa się udać?</b> Przed udaniem się do gabinetu trychologicznego należy dowiedzieć się, jakie wykształcenie posiada osoba wykonująca usługi trychologiczne, czy jest to ukierunkowane wykształcenie celujące w nauki medyczne.<b>Kosmetolog specjalizujący się w trychologii kosmetycznej, medycznej czy holistycznej, cechuje się szeroką wiedzą z zakresu fizjologii, dermatologii i farmakologii, dietetyki a także doświadczeniem z zakresu formuł i receptur kosmetycznych.</b> Pozwoli to na przeprowadzanie profesjonalnej konsultacji trychologicznej z wykorzystaniem trichoskopii, zleceniu niezbędnych badań, ewentualnym wprowadzeniu suplementacji, a także na dobranie odpowiednich produktów pielęgnacyjnych w oparciu o skład INCI. Oczywiście należy sobie zdawać sprawę, że w pewnym momencie rola trychologa się kończy i jeśli osoba odwiedzająca nasz gabinet zmaga się z poważnym schorzeniem dermatologicznym, które musi skończyć z leczeniem farmakologicznym, z pełną świadomością należy taką osobę skierować do lekarza dermatologa, bądź endokrynologa.
            </Paragraph>
            </>
        ),
        sources: [
            "https://onlinelibrary.wiley.com/doi/full/10.1046/j.1365-2230.2002.01081.x?sid=nlm%3Apubmed",
            "https://sklep.centrumzdrowegowlosa.pl/blog/trycholog-i-gabinety-trychologiczne-w-polsce-fakty-i-mity/",
        ]
    },
];

