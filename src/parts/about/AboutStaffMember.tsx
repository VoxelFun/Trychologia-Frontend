import styled from "styled-components";
import {Card, Image, Button} from "react-bootstrap";
import { SafeStaffMember } from "../../library/model/SafeStaffMember";

interface Props {
    staffMember: SafeStaffMember;
}

export default function AboutStaffMember(props: Props) {
    const {staffMember} = props;
    return (
        <Card>
            <Card.Img variant="top"/>
            <Card.Body>
                <Card.Title>{staffMember.name}</Card.Title>
                <Card.Text>
                    {staffMember.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button>
                    Umów wizytę
                </Button>
            </Card.Footer>
        </Card>
        // <Card>
        //     <Row>
        //         <Col>
        //             <Photo  rounded thumbnail/>
        //         </Col>
        //     </Row>
        // </Card>
    );
}

const Photo = styled(Image)`

`;