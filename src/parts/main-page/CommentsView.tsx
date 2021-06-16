import { useState } from "react";
import { Comments } from "../../data/Comment";
import RandomUtils from "../../utils/RandomUtils";
import { Card, CardDeck } from "react-bootstrap";
import { SectionContainer, SectionHeader } from "./Section";

export default function CommentsView() {
    const [comments, _] = useState(RandomUtils.getNumbersArray(0, Comments.length, 3).map(id => Comments[id]));

    return (
        <SectionContainer>
            <SectionHeader>
                Opinie
            </SectionHeader>
            <div>
                <CardDeck>
                    {comments.map((comment, i) => (
                        <Card key={i}>
                            <Card.Body>
                                <Card.Title>{comment.title}</Card.Title>
                                <Card.Text>
                                    {comment.text}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{comment.author}</small>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardDeck>
            </div>
        </SectionContainer>
    );
}