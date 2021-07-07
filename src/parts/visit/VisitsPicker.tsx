import React, { Component } from "react";
import { Table } from "react-bootstrap";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import { WaitingOverlay } from "../../components/WaitingOverlay";
import { VisitInfo } from "../../data/Company";
import { Spot, SpotType } from "../../library/model-ui/Spot";
import { SpotsHolder } from "../../library/model-ui/SpotsHolder";
import { SafeStaffMember } from "../../library/model/SafeStaffMember";
import { VisitMeta } from "../../library/model/VisitMeta";
import { Day } from "../../library/utils/Day";
import { PickVisitData } from "../../library/utils/PickVisitData";
import { VisitsScheduler } from "../../library/utils/VisitsScheduler";
import { HashMap } from "../../utils/Delegate";

const DAYS_AMOUNT = 5;

export interface VisitsPickerProps<T extends SafeStaffMember> {
    staffMember: T | undefined;
    onPickVisit: (data: any) => void;
}

export interface VisitsPickerState {
    date: Date;
    day: number;
    spotsHolders: SpotsHolder[];
    visitsScheduler: VisitsScheduler | undefined;
}

abstract class VisitsPicker<TProps extends VisitsPickerProps<SafeStaffMember>, TState extends VisitsPickerState> extends Component<TProps, TState> {
    protected currentSpot: Spot | undefined;

    getBaseState(props: TProps) {
        const date = new Date();
        const day = Day.fromDate(date).getValue();
        const visitsScheduler = props.staffMember ? this.getVisitsScheduler(props.staffMember, day) : {
            VisitsScheduler: undefined,
            spotsHolder: []
        };
        return {
            ...visitsScheduler,
            date: date,
            day: day
        } as VisitsPickerState;
    }

    componentDidUpdate(prevProps: TProps, prevState: TState) {
        const {staffMember} = this.props;
        const {day} = this.state;

        if(!prevProps.staffMember && staffMember) {
            this.setState(this.getVisitsScheduler(staffMember, day));
        }
    }

    render() {
        const {} = this.props;
        const {date, visitsScheduler, spotsHolders} = this.state;

        const minDate = new Date();
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 6);

        if(!visitsScheduler)
            return (
                <WaitingOverlay/>
            );
            
        return (
            <div>
                <DatePicker
                    clearIcon={null}
                    minDate={minDate}
                    maxDate={maxDate}
                    showLeadingZeros={true}
                    value={date}
                    onChange={this.pickDate.bind(this)}
                />
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
                                            onClick={(e) => {
                                                this.pickVisit({
                                                    visitMeta: {
                                                        day: spotsHolder.day.getValue(),
                                                        start: spot.start,
                                                        end: spot.start + VisitInfo.DURATION,
                                                        weekSchedulerId: visitsScheduler.WeekScheduleId
                                                    },
                                                    spot: spot,
                                                    key: {
                                                        ctrl: e.ctrlKey,
                                                        shift: e.shiftKey
                                                    }
                                                });
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

    getVisitsScheduler(staffMember: SafeStaffMember, day: number) {
        const visitsScheduler = new VisitsScheduler(staffMember.weekSchedule);
        return {
            visitsScheduler: visitsScheduler,
            spotsHolders: visitsScheduler.getFreeVisits(day, DAYS_AMOUNT)
        };
    }

    pickVisit(data: PickVisitData) {
        const {spot} = data;

        if(spot.unpickable)
            return;

        this.onPickVisit(data);
        this.updateState();
        
        this.currentSpot = spot;
    }

    abstract onPickVisit(data: PickVisitData): void;

    pickDate(date: Date) {
        const {visitsScheduler} = this.state;
        if(visitsScheduler) {
            const day = Day.fromDate(date).getValue();
            this.setState({
                date: date,
                day: day,
                spotsHolders: visitsScheduler.getFreeVisits(day, DAYS_AMOUNT)
            });
        }
    }

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