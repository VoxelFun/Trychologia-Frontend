import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
import ApiCall from "../library/api/ApiCall";
import { LogInRequest } from "../library/api/LogIn";
import { EmailField } from "../parts/login/EmailField";
import { PasswordField } from "../parts/login/PasswordField";

interface Props extends RouteComponentProps<any> {

}

interface State extends LogInRequest {
    
}

class LoginPage extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <Container style={{marginTop: "2em"}}>
                <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form>
                        <EmailField onChange={text => this.setState({email: text})}/>
                        <PasswordField onChange={text => this.setState({password: text})}/>
                        <Button
                            variant="primary"
                            onClick={this.logIn.bind(this)}
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
                </Card>
            </Container>
        );
    }

    async logIn() {
        try {
            const logInResponse = await new ApiCall().logIn(this.state);
            if(logInResponse.ok) {
                const {history} = this.props;
                history.replace("/admin");
            } else {
                //TODO: handle login error
            }
        } catch(error) {
            console.log(error);
        }
        
        
    }

}

export default withRouter(LoginPage);