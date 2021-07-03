import React, { Component } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { WaitingOverlay } from "../../components/WaitingOverlay";
import { Spot, SpotType } from "../../library/model-ui/Spot";
import { SpotsHolder } from "../../library/model-ui/SpotsHolder";
import { SafeStaffMember } from "../../library/model/SafeStaffMember";
import { VisitType } from "../../library/model/Visit";
import { VisitMeta } from "../../library/model/VisitMeta";
import { Day } from "../../library/utils/Day";
import { Hour } from "../../library/utils/Hour";
import { VisitsScheduler } from "../../library/utils/VisitsScheduler";

const DAYS_AMOUNT = 5;

export interface VisitsPickerProps<T extends SafeStaffMember> {
    staffMember: T | undefined;
    onPickVisit: (visitTime: VisitMeta) => void;
}

export interface VisitsPickerState {
    date: Date;
    spotsHolders: SpotsHolder[];
    visitsScheduler: VisitsScheduler | undefined;
}

abstract class VisitsPicker<TProps extends VisitsPickerProps<SafeStaffMember>, TState extends VisitsPickerState> extends Component<TProps, TState> {

    getBaseState() {
        return {
            date: new Date(),
            spotsHolders: [],
            visitsScheduler: undefined,
            spotsHolder: []
        } as VisitsPickerState;
    }

    componentDidUpdate(prevProps: TProps, prevState: TState) {
        const {staffMember} = this.props;

        if(!prevProps.staffMember && staffMember) {
            const visitsScheduler = new VisitsScheduler(staffMember.weekSchedule);
            this.setState({
                visitsScheduler: visitsScheduler,
                spotsHolders: visitsScheduler.getFreeVisits(Day.now.getValue(), DAYS_AMOUNT)
            });
        }
    }

    render() {
        const {onPickVisit} = this.props;
        const {visitsScheduler, spotsHolders} = this.state;

        if(!visitsScheduler)
            return (
                <WaitingOverlay/>
            );
            
        return (
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <td>

                            </td>
                            {spotsHolders.map((spotsHolder, i) => (
                                <th key={i}>{spotsHolder.day.toPrettyString()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {visitsScheduler.spotsTimes.map((spotTime, i) => (
                            <tr key={i}>
                                <td>
                                    {spotTime}
                                </td>
                                {spotsHolders.map((spotsHolder, j) => {
                                    const spot = spotsHolder.spots[i];
                                    return (
                                        <Cell
                                            key={i + "" +j}
                                            color={spot.getColor()}
                                            onClick={() => {
                                                spot.togglePicked();
                                                onPickVisit({
                                                    day: spotsHolder.day.getValue(),
                                                    minutes: Hour.fromText(spotTime).toMinutes(),
                                                    weekSchedulerId: visitsScheduler.WeekScheduleId
                                                });
                                                console.log({
                                                    day: spotsHolder.day.getValue(),
                                                    minutes: Hour.fromText(spotTime).toMinutes(),
                                                    weekSchedulerId: visitsScheduler.WeekScheduleId
                                                });
                                                this.updateState();
                                            }}
                                        >
                                            {spotsHolder.spots[i].spotType}
                                        </Cell>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }

    // abstract onPickVisit(): void;

    updateState() {
        this.setState({...this.state});
    }

}

export default (VisitsPicker);

const Header = styled.div`
    background-color: #658cdf;
    
`;

const Cell = styled.td`
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.color};
`;