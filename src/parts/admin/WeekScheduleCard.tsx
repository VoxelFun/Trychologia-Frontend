
import React, { PureComponent, Component } from "react";
import { Button, Card, Collapse, Table } from "react-bootstrap";
import styled from "styled-components";
import { DayLabel } from "../../data/Date";
import { UiDaySchedule } from "../../library/model-ui/UiDaySchedule";
import { UiWeekSchedule } from "../../library/model-ui/UiWeekSchedule";
import { DaySchedule } from "../../library/model/DaySchedule";
import { DummyWeekSchedule, WeekSchedule } from "../../library/model/WeekSchedule";
import DayScheduleCard from "./DayScheduleCard";

interface Props {
    
}

interface State {
    isOpen: boolean;
    weekSchedule: UiWeekSchedule;
}

class WeekSchedulerCard extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: true,
            weekSchedule: new UiWeekSchedule(DummyWeekSchedule)
        };
    }

    render() {
        const {} = this.props;
        const {isOpen, weekSchedule} = this.state;

        return (
            <Card>
                <Card.Header onClick={() => this.toggleIsOpen()}>
                    Harmonogram
                </Card.Header>
                <Collapse in={isOpen}>
                    <Card.Body>
                        {weekSchedule.daySchedules.map((daySchedule, i) => (
                            <DayScheduleCard
                                key={i}
                                dayId={i}
                                daySchedule={daySchedule}
                                setDaySchedule={(daySchedule) => this.setDaySchedule(i, daySchedule)}
                            />
                        ))}
                        <Button>
                            Zapisz
                        </Button>
                    </Card.Body>
                </Collapse>
            </Card>
        );
    }

    toggleIsOpen() {
        this.setState({isOpen: !this.state.isOpen});
    }

    setDaySchedule(dayId: number, daySchedule: UiDaySchedule | undefined) {
        const {weekSchedule} = this.state;
        weekSchedule.daySchedules[dayId] = daySchedule;
        this.setState({weekSchedule: weekSchedule});
    }

}

export default (WeekSchedulerCard);