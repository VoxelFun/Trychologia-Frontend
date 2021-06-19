import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import ContactView from "./main-page/ContactView";
import { TopNavbar } from "./TopNavbar";


interface Props extends RouteComponentProps<any> {
    children: any
}

interface Stats {

}

class Layout extends Component<Props, Stats> {
    
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        return (
            <div>
                <TopNavbar redirect={this.props.history.replace}/>
                {children}
                <ContactView/>
            </div>
        );
    }

}

export default withRouter(Layout);