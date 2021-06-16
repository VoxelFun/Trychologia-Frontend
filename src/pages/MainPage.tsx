import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Button, Card, Container, Form } from "react-bootstrap";
import Layout from "../parts/Layout";
import ServiceTypeView from "../parts/main-page/ServiceTypeView";
import VisitsPickerView from "../parts/main-page/VisitsPickerView";
import CommentsView from "../parts/main-page/CommentsView";
import ContactView from "../parts/main-page/ContactView";

interface Props extends RouteComponentProps<any> {

}

interface State {
    
}

class MainPage extends Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <Layout>
                <ServiceTypeView/>
                <VisitsPickerView/>
                <CommentsView/>
                <ContactView/>
            </Layout>
        );
    }

}

export default withRouter(MainPage);