import { Col, Row } from "react-bootstrap";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { DayLabel } from "../../data/Date";
import { UiDaySchedule } from "../../library/model-ui/UiDaySchedule";
import { DummyDaySchedule } from "../../library/model/DaySchedule";

interface Props {
    dayId: number;
    daySchedule: UiDaySchedule | undefined;
    setDaySchedule: (daySchedule: UiDaySchedule | undefined) => void;
}

export default function DayScheduleCard(props: Props) {
    console.log(props.dayId, props.daySchedule);
    return (
        <Row>
            <Col>
                <Form.Check
                type="switch"
                    id={`${props.dayId}`}
                    label={DayLabel[props.dayId]}
                    checked={props.daySchedule !== undefined}
                    onChange={() => props.setDaySchedule(!props.daySchedule ? new UiDaySchedule(DummyDaySchedule) : undefined)}
                />
            </Col>
            {props.daySchedule && (
                <Col>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Od</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={props.daySchedule.start}
                            onChange={(e) => props.daySchedule!.start = e.target.value}
                            placeholder="08:00"
                            htmlSize={2}
                        />
                    </InputGroup>
                </Col>
            )} 
            {props.daySchedule && (
                <Col>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Do</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={props.daySchedule.end}
                            onChange={(e) => props.daySchedule!.end = e.target.value}
                            placeholder="16:00"
                            htmlSize={2}
                        />
                    </InputGroup>
                </Col>
            )}
        </Row>
    );
}