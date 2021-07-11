import { useState } from "react";
import { Comments } from "../../data/Comment";
import RandomUtils from "../../utils/RandomUtils";
import { Card, CardsContainer } from "../styled/Card";
import { SectionBody, SectionContainer, SectionHeader } from "./Section";

export default function CommentsView() {
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
            </SectionBody>
        </SectionContainer>
    );
}