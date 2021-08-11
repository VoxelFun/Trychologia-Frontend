import React from "react";
import styled from "styled-components";
import { Treatment } from "../../data/Treatment";
import { Card } from "../styled/Card";

export interface TreatmentSectionProps {
    treatment: Treatment;
}

export default abstract class TreatmentSection extends React.PureComponent<TreatmentSectionProps> {

    render() {
        const {treatment} = this.props;

        return (
            <div>
                <Card.Header>{treatment.label}</Card.Header>
                <Card.Body>
                    {this.Content()}
                </Card.Body>
            </div>
        );
    }

    abstract Content(): JSX.Element;

}

export const TreatmentComp = {
    Paragraph: styled.p`
        text-indent: 2em;
    `,
};