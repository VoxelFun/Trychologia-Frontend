import { useContext, useState } from "react";
import styled from "styled-components";
import { CustomerContext } from "../../contexts/CustomerContext";
import { VisitMeta } from "../../library/model/VisitMeta";
import { CustomerVisitCreator } from "../visit/CustomerVisitCreator";
import CustomerVisitsPicker from "../visit/CustomerVisitsPicker";
import { SectionBody, SectionContainer, SectionHeader } from "./Section";

export default function VisitsPickerView() {
    const customerContext = useContext(CustomerContext);
    const [visitMeta, setVisitMeta] = useState<VisitMeta | undefined>(undefined);
    const staffMember = customerContext.state.safeStaffMembers?.[0];

    return (
        <SectionContainer>
            <SectionHeader>
                <LeftHeader>
                    Umów wizytę
                </LeftHeader>
                <RightHeader>
                    Cena wizyty: 80zł
                </RightHeader>
            </SectionHeader>
            <SectionBody>
                <CustomerVisitsPicker
                    staffMember={staffMember}
                    onPickVisit={setVisitMeta}
                />
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