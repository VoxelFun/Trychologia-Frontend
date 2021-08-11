import Layout from "../parts/Layout";
import AboutStaffMember from "../parts/about/AboutStaffMember";
import { useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { WaitingOverlay } from "../components/WaitingOverlay";
import { CardsContainer } from "../parts/styled/Card";
import { SectionContainer } from "../parts/main-page/Section";

export default function AboutPage() {
    const staffMembers = useContext(CustomerContext).state.safeStaffMembers;
    return (
        <Layout>
            <SectionContainer>
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