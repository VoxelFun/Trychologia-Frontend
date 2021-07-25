
import React, { PureComponent, Component } from "react";
import { Button, Card, Collapse, Form } from "react-bootstrap";
import ApiCall from "../../library/api/ApiCall";
import { StaffMember } from "../../library/model/StaffMember";

interface Props {
    staffMember: StaffMember;
    updateStaffMember: (update: (staffMember: StaffMember) => void) => void;
}

interface State {
    isOpen: boolean;
}

class StaffMemberCard extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const {staffMember, updateStaffMember} = this.props;
        const {isOpen} = this.state;

        return (
            <Card>
                <Card.Header onClick={() => this.toggleIsOpen()}>
                    O mnie
                </Card.Header>
                <Collapse in={isOpen}>
                    <div>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Imię i nazwisko</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={staffMember.name}
                                        onChange={e => updateStaffMember(staffMember => staffMember.name = e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Opis</Form.Label>
                                    
                                    <Form.Control
                                        as="textarea"
                                        value={staffMember.description}
                                        onChange={e => updateStaffMember(staffMember => staffMember.description = e.target.value)}
                                        rows={3}
                                    />
                                </Form.Group>
                                <Button onClick={() => this.save()}>
                                    Zapisz
                                </Button>
                            </Form>
                        </Card.Body>
                    </div>
                </Collapse>
            </Card>
        );
    }

    toggleIsOpen() {
        this.setState({isOpen: !this.state.isOpen});
    }

    save() {
        const {staffMember} = this.props;
        new ApiCall().setStaffMember(staffMember);
    }

}

export default (StaffMemberCard);