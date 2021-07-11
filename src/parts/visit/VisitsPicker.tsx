import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import React, { Component } from "react";
// import { Table } from "react-bootstrap";
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
                <DatePickerContainer>
                    Wybierz dzień:{" "}
                    <DatePicker
                        clearIcon={null}
                        minDate={minDate}
                        maxDate={maxDate}
                        showLeadingZeros={true}
                        value={date}
                        onChange={this.pickDate.bind(this)}
                    />
                </DatePickerContainer>
                <Table>
                    <Header>
                        <Cell>

                        </Cell>
                        {spotsHolders.map((spotsHolder, i) => (
                            <Cell key={i}>
                                <WeekDayName>{spotsHolder.day.toWeekDayName()}</WeekDayName>
                                <MonthDay>{spotsHolder.day.toMonthDay()}</MonthDay>
                            </Cell>
                        ))}
                    </Header>
                    {visitsScheduler.spotsTimes.map((spotTime, i) => (
                        <Row key={i}>
                            <TimeCell>
                                <TimeCellContent>
                                    {spotTime}
                                </TimeCellContent>
                            </TimeCell>
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
                                        <CellContent>
                                        {spotsHolder.spots[i].spotType >= 0 ? (
                                            <PlusOutlined/>
                                        ) : (
                                            <CloseOutlined/>
                                        )}
                                        </CellContent>
                                    </Cell>
                                );
                            })}
                        </Row>
                    ))}
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

const DatePickerContainer = styled.div`
    font-weight: bold;
    margin-bottom: 1rem;
`;

const Cell = styled.td`
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.color};
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    
`;

const CellContent = styled.div`
    vertical-align: -0.35rem;
    display: inline;
`;

const Table = styled.div`
    text-align: center;
    overflow: auto;
    width: 18rem;
    border-top: 1px solid black;
    border-left: 1px solid black;
`;

const Row = styled.div`
    display: flex;
`;

const Header = styled(Row)`
    
    
`;

const WeekDayName = styled.div`
    font-weight: bold;
`;

const MonthDay = styled.div`
    font-size: .8rem;
`;

const Column = styled.div`

`;

const TimeCell = styled(Cell)`
    
`;

const TimeCellContent = styled(CellContent)`
    vertical-align: -0.5rem;
`;

const SpotCell = styled(Cell)`

`;