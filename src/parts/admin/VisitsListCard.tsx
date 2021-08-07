
import React, { PureComponent, Component } from "react";
import { Row } from "react-bootstrap";
import { Button, Card, Col, Collapse, Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { VisitTypeLabel } from "../../data/Company";
import { Visit, VisitType } from "../../library/model/Visit";
import { VisitsHolder } from "../../library/model/VisitsHolder";
import { Day } from "../../library/utils/Day";
import { Hour } from "../../library/utils/Hour";
import { HashMap } from "../../utils/Delegate";

interface Props {
    visitsHolders: HashMap<number, VisitsHolder>;
}

interface State {
    isOpen: boolean;
}

class VisitsListCard extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    render() {
        const {visitsHolders} = this.props;
        const {isOpen} = this.state;

        return (
            <Card>
                <Card.Header onClick={() => this.toggleIsOpen()}>
                    Wizyty
                </Card.Header>
                <Collapse in={isOpen}>
                    <div>
                        <Card.Body>
                            <Content>
                                <ListGroup>
                                    {Object.keys(visitsHolders).map((dayId: string) => {
                                        const visitHolder = visitsHolders[parseInt(dayId)];
                                        return (
                                            <>
                                                <ListGroup.Item variant="secondary">
                                                    {new Day(parseInt(dayId)).toText()}
                                                </ListGroup.Item>
                                                {visitHolder.visits.map(visit => (
                                                    <VisitView visit={visit}/>
                                                ))}
                                            </>
                                        );
                                    })}
                                </ListGroup>
                            </Content>
                        </Card.Body>
                    </div>
                </Collapse>
            </Card>
        );
    }

    toggleIsOpen() {
        this.setState({isOpen: !this.state.isOpen});
    }

}

interface VisitViewProps {
    visit: Visit;
}

function VisitView(props: VisitViewProps): JSX.Element {
    return (
        <ListGroup.Item>
            <Row>
                <Col>{new Hour(props.visit.start).toText()} - {new Hour(props.visit.end).toText()}</Col>
                {props.visit.customer ? (
                    <>
                        <Col>{props.visit.customer.name}</Col>
                        <Col>{props.visit.customer.phone}</Col>
                    </>
                ) : (
                    <Col>{VisitTypeLabel[props.visit.type]}</Col>
                )}
                
            </Row>
        </ListGroup.Item>
    );
}

const Content = styled.div`
    max-height: 60vh;
    overflow-y: auto;
`;

export default (VisitsListCard);