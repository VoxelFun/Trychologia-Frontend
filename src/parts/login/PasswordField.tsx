import { Form } from "react-bootstrap";
import { TextFieldAction } from "../../library/Delegate";

interface Props {
    onChange: TextFieldAction;
}

export function PasswordField(props: Props) {
    return (
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password" 
                placeholder="Password"
                onChange={event => props.onChange(event.target.value)}
            />
        </Form.Group>
    );
}