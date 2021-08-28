import Layout from "../parts/Layout";
import AboutStaffMember from "../parts/about/AboutStaffMember";
import { useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { WaitingOverlay } from "../components/WaitingOverlay";
import { Card, CardsContainer } from "../parts/styled/Card";
import { SectionContainer } from "../parts/main-page/Section";
import styled from "styled-components";

export default function AboutPage() {
    const staffMembers = useContext(CustomerContext).state.safeStaffMembers;
    return (
        <Layout>
            <SectionContainer>
                <CardsContainer>
                    <Card.Container>
                        <Card.Header>O nas</Card.Header>
                        <Card.Body>
                            <Paragraph>
                                Gabinet Trychologiczny TrychomMedical to specjaliści z zakresu Trychologii i regeneracji włosów w Gliwicach. Zajmujemy się wspomaganiem leczenia schorzeń owłosionej skóry głowy tj. łojotokowe zapalenie skóry, łupież, łuszczyca czy łysienie- zarówno reaktywne jak i androgenowe. Oferujemy skuteczne terapie hamujące wypadanie włosów oraz stymulujące w przypadku łysienia androgenowego, telogenowego, plackowatego, mechanicznego. Kuracje dobieramy indywidualnie podczas konsultacji i badania trychologicznego. Wykonujemy inwazyjne zabiegi biostymulujące takie jak mezoterapia czy karbosyterapia skóry głowy. W naszym gabinecie trychologicznym oferujemy, infuzję tlenową, oksybrazję oraz manualne zabiegi regenerujące skórę głowy i włosy. Trycholog w naszym gabinecie indywidualnie podchodzi do każdego  problemu dotyczącego skóry głowy jak i włosów - suchych lub zniszczonych.
                            </Paragraph>
                        </Card.Body>
                    </Card.Container>
                </CardsContainer>
                {staffMembers !== undefined ? (
                    <CardsContainer xs={1} xl={2}>
                        {staffMembers.map((staffMember, i) => (
                            <AboutStaffMember book={i === 0} staffMember={staffMember}/>
                        ))}
                    </CardsContainer>
                ) : (
                    <WaitingOverlay/>
                )}
            </SectionContainer>
        </Layout>
    );
}

const Paragraph = styled.p`
    text-indent: 2em;
`;