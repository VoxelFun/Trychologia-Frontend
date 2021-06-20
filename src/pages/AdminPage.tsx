import React, { PureComponent } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import WeekSchedulerCard from "../parts/admin/WeekScheduleCard";

const DAYS_AMOUNT = 5;

interface Props {
    
}

interface State {
    
}

class VisitsPicker extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    render() {
        const {} = this.props;
        const {} = this.state;

        return (
            <Container>
                <WeekSchedulerCard/>
            </Container>
        );
    }

}

export default (VisitsPicker);