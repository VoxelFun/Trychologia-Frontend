import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { ScreenSize } from "../../data/Page";

export const CardsContainer = styled(Row)`
    
`;

const CardContainer = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, .125);
    box-shadow: 3px 3px rgba(0, 0, 0, .125);
    border-radius: .25rem;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.white};
    display: table;

    padding: 4em 2em;
    @media (max-width: ${ScreenSize.lg}) {
        padding: 2em 1em;
    }

    @media (max-width: ${ScreenSize.md}) {
        padding: 1em 0.5em;
    }
`;

interface ContainerProps {
    children: any,
    md?: number,
    className?: string
}

export const Card = {
    Container(props: ContainerProps) {
        return (
            <Col style={{padding: ".25rem"}} {...props}>
                <CardContainer>
                    {props.children}
                </CardContainer>
            </Col>
        );
    },
    Header: styled.div`
        margin-bottom: .75rem;
        font-size: 1.25rem;
    `,
    Body: styled.div`
        
    `,
    Footer: styled.div`
        display: table-row;
        vertical-align: bottom;
    `,
};