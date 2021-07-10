import Layout from "../parts/Layout";
import AboutStaffMember from "../parts/about/AboutStaffMember";
import {CardDeck} from "react-bootstrap";
import { useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { WaitingOverlay } from "../components/WaitingOverlay";

export default function AboutPage() {
    const staffMembers = useContext(CustomerContext).state.safeStaffMembers;
    return (
        <Layout>
            {staffMembers !== undefined ? (
                <CardDeck>
                    {staffMembers.map(staffMember => (
                        <AboutStaffMember staffMember={staffMember}/>
                    ))}
                </CardDeck>
            ) : (
                <WaitingOverlay/>
            )}
        </Layout>
    );
}