import styled from "styled-components";
import { ScreenSize } from "../../data/Page";

interface SectionContainerProps {
    odd?: boolean;
}

export const SectionContainer = styled.div<SectionContainerProps>`
    padding: 4em 2em;
    background: ${props => props.odd ? props.theme.primary : props.theme.grey};

    @media (max-width: ${ScreenSize.lg}) {
        padding: 2em 1em;
    }

    @media (max-width: ${ScreenSize.md}) {
        padding: 1em 0.5em;
    }
`;

export const SectionHeader = styled.h5`
    font-weight: bold;
`;

export const SectionBody = styled.div`
    padding: 4em 2em;

    @media (max-width: ${ScreenSize.lg}) {
        padding: 2em 1em;
    }

    @media (max-width: ${ScreenSize.md}) {
        padding: 1em 0.5em;
    }
`;