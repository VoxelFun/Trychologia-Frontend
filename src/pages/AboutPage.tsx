import Layout from "../parts/Layout";
import AboutStaffMember from "../parts/about/AboutStaffMember";
import { useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { WaitingOverlay } from "../components/WaitingOverlay";
import { CardsContainer } from "../parts/styled/Card";

export default function AboutPage() {
    const staffMembers = useContext(CustomerContext).state.safeStaffMembers;
    return (
        <Layout>
            <div>
                {staffMembers !== undefined ? (
                    <CardsContainer xl={2}>
                        {staffMembers.map(staffMember => (
                            <AboutStaffMember staffMember={staffMember}/>
                        ))}
                    </CardsContainer>
                ) : (
                    <WaitingOverlay/>
                )}
            </div>
        </Layout>
    );
}