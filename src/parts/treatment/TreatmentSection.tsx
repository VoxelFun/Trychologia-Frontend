import React from "react";
import styled from "styled-components";
import { Treatment } from "../../data/Treatment";

export interface TreatmentSectionProps {
    treatment: Treatment;
}

export default abstract class TreatmentSection extends React.PureComponent<TreatmentSectionProps> {

    render() {
        const {treatment} = this.props;

        return (
            <div>
                {treatment.label}
                {this.Content()}
            </div>
        );
    }

    abstract Content(): JSX.Element;

}

export const TreatmentComp = {
    Paragraph: styled.p`

    `,
};