import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Treatment, TreatmentGroups } from "../data/Treatment";
import Layout from "../parts/Layout";
import TreatmentMenu from "../parts/treatment/TreatmentMenu";

export interface TreatmentId {
    group: string;
    member: string;
}

interface Props extends RouteComponentProps<any> {
    id?: TreatmentId;
}

function TreatmentPage(props: Props) {
    const treatmentId = props.id || {
        group: TreatmentGroups[0].id,
        member: TreatmentGroups[0].members[0].id
    } as TreatmentId;

    function redirect(group: string, member: string) {
        props.history.replace(`/zabiegi/${group}/${member}`);
    }

    function setGroup(group: string) {
        redirect(group, TreatmentGroups[TreatmentGroups.findIndex(treatmentGroup => treatmentGroup.id === group)].members[0].id);
    }

    function setMember(member: string) {
        redirect(treatmentId.group, member);
    }

    const treatment: Treatment = TreatmentGroups.find(treatmentGroup => treatmentGroup.id === treatmentId.group)?.members.find(member => member.id === treatmentId.member)!;

    return (
        <Layout>
            <Row>
                <Col>
                    <TreatmentMenu
                        treatmentId={treatmentId}
                        setGroup={setGroup}
                        setMember={setMember}
                    />
                </Col>
                <Col>
                    {treatment.render({treatment})}
                </Col>
            </Row>
        </Layout>
    );
}

export default withRouter(TreatmentPage);