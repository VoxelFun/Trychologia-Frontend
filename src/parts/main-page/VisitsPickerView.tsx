import { useContext, useState } from "react";
import styled from "styled-components";
import { CustomerContext } from "../../contexts/CustomerContext";
import { VisitMeta } from "../../library/model/VisitMeta";
import { Card } from "../styled/Card";
import { CustomerVisitCreator } from "../visit/CustomerVisitCreator";
import CustomerVisitsPicker from "../visit/CustomerVisitsPicker";
import { SectionBody, SectionContainer, SectionHeader } from "./Section";

export default function VisitsPickerView() {
    const customerContext = useContext(CustomerContext);
    const [visitMeta, setVisitMeta] = useState<VisitMeta | undefined>(undefined);
    const staffMember = customerContext.state.safeStaffMembers?.[0];

    function onPickVisit(visitMeta: VisitMeta) {
        setVisitMeta(visitMeta);
        // document.getElementById('form')!.scrollIntoView({
        //     behavior: 'smooth'
        // });
    }

    return (
        <SectionContainer>
            <SectionHeader>
                <LeftHeader>
                    Umów wizytę
                </LeftHeader>
            </SectionHeader>
            <SectionBody>
                <Card.Container>
                    <Card.Body>
                        <CustomerVisitsPicker
                            staffMember={staffMember}
                            onPickVisit={onPickVisit}
                        />
                    </Card.Body>
                    <Card.Footer>
                        Cena wizyty: 80zł
                    </Card.Footer>
                </Card.Container>
                {staffMember && visitMeta && (
                    <CustomerVisitCreator
                        staffMemberName={staffMember.name}
                        visitMeta={visitMeta}
                    />
                )}
            </SectionBody>
        </SectionContainer>
    );
}

const LeftHeader = styled.div`
    float: left;
`;

const RightHeader = styled.div`
    float: right;
`;