import styled from "styled-components";
import { ScreenSize } from "../../data/Page";

interface SectionContainerProps {
    odd?: boolean;
}

export const SectionContainer = styled.div<SectionContainerProps>`
    padding: 4em 2em;
    background: ${props => props.odd ? props.theme.primary : props.theme.grey};
    width: 100%;

    @media (max-width: ${ScreenSize.lg}) {
        padding: 2em 1em;
    }

    @media (max-width: ${ScreenSize.md}) {
        padding: 1em 1em;
    }
`;

export const SectionHeader = styled.p`
    font-weight: bold;
    font-size: 3em;
`;

export const SectionBody = styled.div`
    /* padding: 4em 2em;

    @media (max-width: ${ScreenSize.lg}) {
        padding: 2em 1em;
    }

    @media (max-width: ${ScreenSize.md}) {
        padding: 1em 0.5em;
    } */
`;