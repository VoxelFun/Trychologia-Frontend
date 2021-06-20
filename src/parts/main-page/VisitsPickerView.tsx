import styled from "styled-components";
import VisitsPicker from "../visit/VisitsPicker";
import { SectionBody, SectionContainer, SectionHeader } from "./Section";

export default function VisitsPickerView() {
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
                <VisitsPicker admin={false}/>
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