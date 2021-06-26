import { Col, Row } from "react-bootstrap";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { DayLabel } from "../../data/Date";
import { UiDaySchedule } from "../../library/model-ui/UiDaySchedule";

interface Props {
    dayId: number;
    daySchedule: UiDaySchedule;
    updateDaySchedule: (update: (daySchedule: UiDaySchedule) => void) => void;
}

export default function DayScheduleCard(props: Props) {
    return (
        <Row>
            <Col>
                <Form.Check
                    type="switch"
                    id={`${props.dayId}`}
                    label={DayLabel[props.dayId]}
                    checked={props.daySchedule.active}
                    onChange={() => props.updateDaySchedule(daySchedule => daySchedule.active = !daySchedule.active)}
                />
            </Col>
            <Col>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Od</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={props.daySchedule.start}
                        onChange={(e) => props.updateDaySchedule(daySchedule => daySchedule.start = e.target.value)}
                        disabled={!props.daySchedule.active}
                        placeholder="HH:mm"
                        htmlSize={2}
                    />
                </InputGroup>
            </Col>
            <Col>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Do</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={props.daySchedule.end}
                        onChange={(e) => props.updateDaySchedule(daySchedule => daySchedule.end = e.target.value)}
                        disabled={!props.daySchedule.active}
                        placeholder="HH:mm"
                        htmlSize={2}
                    />
                </InputGroup>
            </Col>
        </Row>
    );
}