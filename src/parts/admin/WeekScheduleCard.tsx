
import React, { PureComponent, Component } from "react";
import { Button, Card, Collapse, Table } from "react-bootstrap";
import ApiCall from "../../library/api/ApiCall";
import { UiDaySchedule } from "../../library/model-ui/UiDaySchedule";
import { UiWeekSchedule } from "../../library/model-ui/UiWeekSchedule";
import { DummyWeekSchedule, WeekSchedule } from "../../library/model/WeekSchedule";
import DayScheduleCard from "./DayScheduleCard";

interface Props {
    weekSchedule: WeekSchedule;
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
            weekSchedule: new UiWeekSchedule(props.weekSchedule)
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
                                updateDaySchedule={(update) => this.updateDaySchedule(daySchedule, update)}
                            />
                        ))}
                        <Button onClick={() => this.save()}>
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

    save() {
        const {weekSchedule} = this.state;
        new ApiCall().updateWeekSchedule(weekSchedule.toWeekSchedule());
    }

    updateDaySchedule(daySchedule: UiDaySchedule, update: (daySchedule: UiDaySchedule) => void) {
        const {weekSchedule} = this.state;
        update(daySchedule);
        this.setState({weekSchedule: weekSchedule});
    }

}

export default (WeekSchedulerCard);