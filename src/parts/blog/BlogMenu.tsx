import { Collapse, ListGroup } from "react-bootstrap";
import { BlogTopics } from "../../data/Blog";
import { TreatmentId } from "../../pages/TreatmentPage";

interface Props {
    topicId: string;
    redirect: (topicId: string) => void;
}

export default function BlogMenu(props: Props) {
    return (
        <ListGroup>
            {BlogTopics.map(blogTopic => (
                <ListGroup.Item action onClick={() => props.redirect(blogTopic.id)}>
                    {blogTopic.title}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}