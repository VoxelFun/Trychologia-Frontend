import { Form } from "react-bootstrap";
import { TextFieldAction } from "../../library/Delegate";

interface Props {
    onChange: TextFieldAction;
}

export function EmailField(props: Props) {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={event => props.onChange(event.target.value)}
            />
        </Form.Group>
    );
}