import styled from "styled-components";
import {Image, Button} from "react-bootstrap";
import { SafeStaffMember } from "../../library/model/SafeStaffMember";
import { Card } from "../styled/Card";

interface Props {
    staffMember: SafeStaffMember;
}

export default function AboutStaffMember(props: Props) {
    const {staffMember} = props;
    return (
        <Card.Container>
            {/* <Card.Img variant="top"/> */}
            <Card.Header>
                {staffMember.name}
            </Card.Header>
            <Card.Body>
                {staffMember.description}
            </Card.Body>
            <Card.Footer>
                <Button>
                    Umów wizytę
                </Button>
            </Card.Footer>
        </Card.Container>
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