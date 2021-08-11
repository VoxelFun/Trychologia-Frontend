import styled from "styled-components";
import {Image, Button} from "react-bootstrap";
import { SafeStaffMember } from "../../library/model/SafeStaffMember";
import { Card } from "../styled/Card";
import { SectionContainer } from "../main-page/Section";
import { RouteComponentProps, withRouter } from "react-router";

interface Props extends RouteComponentProps<any> {
    book: boolean;
    staffMember: SafeStaffMember;
}

function AboutStaffMember(props: Props) {
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
                {props.book && (
                    <Button onClick={() => props.history.replace("/wizyta")}>
                        Umów wizytę
                    </Button>
                )}
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

export default withRouter(AboutStaffMember);