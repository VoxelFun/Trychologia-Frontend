import Layout from "../parts/Layout";
import { StaffMembers } from "../data/Company";
import AboutStaffMember from "../parts/about/AboutStaffMember";
import {CardDeck} from "react-bootstrap";

export default function AboutPage() {
    return (
        <Layout>
            <CardDeck>
                {StaffMembers.map(staffMember => (
                    <AboutStaffMember staffMember={staffMember}/>
                ))}
            </CardDeck>
            
        </Layout>
    );
}