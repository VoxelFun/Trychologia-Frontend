import { Collapse, ListGroup } from "react-bootstrap";
import { TreatmentGroups } from "../../data/Treatment";
import { TreatmentId } from "../../pages/TreatmentPage";

interface Props {
    treatmentId: TreatmentId;
    setGroup: (group: string) => void;
    setMember: (member: string) => void;
}

export default function TreatmentMenu(props: Props) {
    return (
        <>
            <ListGroup>
                {TreatmentGroups.map(treatmentGroup => (
                    <>
                        <ListGroup.Item action variant="primary" onClick={() => props.setGroup(treatmentGroup.id)}>
                            {treatmentGroup.label}
                        </ListGroup.Item>
                        <Collapse in={props.treatmentId.group === treatmentGroup.id}>
                            <div>
                                <ListGroup>
                                    {treatmentGroup.members.map(treatment => (
                                        <ListGroup.Item action onClick={() => props.setMember(treatment.id)}>
                                            {treatment.label}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                        </Collapse>
                        
                    </>
                ))}
            </ListGroup>
        </>
    );
}