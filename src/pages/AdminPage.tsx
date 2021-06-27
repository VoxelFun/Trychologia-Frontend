import React, { PureComponent } from "react";
import { Container } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import { WaitingOverlay } from "../components/WaitingOverlay";
import ApiCall from "../library/api/ApiCall";
import { StaffMember } from "../library/model/StaffMember";
import StaffMemberCard from "../parts/admin/StaffMemberCard";
import WeekSchedulerCard from "../parts/admin/WeekScheduleCard";

interface Props extends RouteComponentProps<any> {
    
}

interface State {
    date: Date,
    staffMember?: StaffMember;
    waiting: boolean;
}

class AdminPage extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            date: new Date(),
            waiting: false
        };
    }

    componentDidMount() {
        this.wait(this.loadStaffMember());
    }

    render() {
        const {} = this.props;
        const {staffMember, waiting} = this.state;

        if(waiting)
            return <WaitingOverlay/>;

        if(!staffMember)
            return <></>;

        return (
            <Container>
                <StaffMemberCard
                    staffMember={staffMember}
                    updateStaffMember={this.updateStaffMember.bind(this)}
                />
                <WeekSchedulerCard weekSchedule={staffMember.weekSchedule}/>
            </Container>
        );
    }

    async loadStaffMember() {
        const {history} = this.props;
        try {
            this.setState({staffMember: await new ApiCall().getStaffMember()});
        } catch(err) {
            history.replace("/login");
        }
    }

    updateStaffMember(update: (staffMember: StaffMember) => void) {
        const {staffMember} = this.state;
        if (staffMember) {
            const result = {...staffMember};
            update(result);
            this.setState({staffMember: result});
        }
    }

    async wait(task: Promise<void>): Promise<void> {
        this.setState({waiting: true});
        await task;
        this.setState({waiting: false});
    }

}

export default withRouter(AdminPage);