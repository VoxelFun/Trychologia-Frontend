import { useState } from "react";
import { Button } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
import { Comments } from "../../data/Comment";
import RandomUtils from "../../utils/RandomUtils";
import { Card, CardsContainer } from "../styled/Card";
import { SectionBody, SectionContainer, SectionHeader } from "./Section";
import { ButtonContainer } from "./VisitInfoView";

interface Props extends RouteComponentProps<any> {
    
}

function CommentsView(props: Props) {
    const [comments, _] = useState(RandomUtils.getNumbersArray(0, Comments.length, 3).map(id => Comments[id]));

    return (
        <SectionContainer odd>
            <SectionHeader>
                Opinie
            </SectionHeader>
            <SectionBody>
                <CardsContainer xs={1} lg={3}>
                    {comments.map((comment, i) => (
                        <Card.Container key={i}>
                            <Card.Body>
                                {comment.text}
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{comment.author}</small>
                            </Card.Footer>
                        </Card.Container>
                    ))}
                </CardsContainer>
                <ButtonContainer>
                    <Button onClick={() => props.history.replace("/gabinet")}>
                        Dowiedz się więcej!
                    </Button>
                </ButtonContainer>
            </SectionBody>
        </SectionContainer>
    );
}

export default withRouter(CommentsView);