import styled from "styled-components";
import { SectionContainer, SectionHeader } from "./Section";

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
        </SectionContainer>
    );
}

const LeftHeader = styled.div`
    float: left;
`;

const RightHeader = styled.div`
    float: right;
`;