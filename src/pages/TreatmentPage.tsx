import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Treatment, TreatmentGroups } from "../data/Treatment";
import Layout from "../parts/Layout";
import { SectionContainer } from "../parts/main-page/Section";
import { Card } from "../parts/styled/Card";
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
            <SectionContainer>
                <Row xs={1} md={2}>
                    <Col md={4}>
                        <TreatmentMenu
                            treatmentId={treatmentId}
                            setGroup={setGroup}
                            setMember={setMember}
                        />
                    </Col>
                    <Card.Container md={8}>
                        {treatment.render({treatment})}
                    </Card.Container>
                </Row>
            </SectionContainer>
        </Layout>
    );
}

export default withRouter(TreatmentPage);