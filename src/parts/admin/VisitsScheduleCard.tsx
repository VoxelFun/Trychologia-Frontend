
import React, { PureComponent, Component } from "react";
import { Button, Card, Collapse, Form } from "react-bootstrap";
import { VisitInfo } from "../../data/Company";
import ApiCall from "../../library/api/ApiCall";
import { SpotType } from "../../library/model-ui/Spot";
import { SpotsHolder } from "../../library/model-ui/SpotsHolder";
import { StaffMember } from "../../library/model/StaffMember";
import { Visit } from "../../library/model/Visit";
import { VisitMeta } from "../../library/model/VisitMeta";
import { HashMap } from "../../utils/Delegate";
import AdminVisitsPicker from "../visit/AdminVisitsPicker";

interface Props {
    staffMember: StaffMember;
    saveVisits: (visits: VisitMeta) => void;
}

interface State {
    isOpen: boolean;
}

class VisitsScheduleCard extends Component<Props, State> {
    spotsHolders: HashMap<number, SpotsHolder> = {};

    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    render() {
        const {staffMember} = this.props;
        const {isOpen} = this.state;

        return (
            <Card>
                <Card.Header onClick={() => this.toggleIsOpen()}>
                    Wizyty
                </Card.Header>
                <Collapse in={isOpen}>
                    <Card.Body>
                        <AdminVisitsPicker
                            staffMember={staffMember}
                            onPickVisit={(spotsHolders: HashMap<number, SpotsHolder>) => this.spotsHolders = spotsHolders}
                        />
                        <Button onClick={() => this.save()}>
                            Zapisz
                        </Button>
                    </Card.Body>
                </Collapse>
            </Card>
        );
    }

    getVisits(day: number) {
        const visits: Visit[] = [];
        const spotHolder = this.spotsHolders[day];

        let start = -1, end = -1, spotType: SpotType = SpotType.UNAVAILABLE;
        spotHolder.spots.forEach(spot => {
            if(start < 0) {
                if(spot.edited) {
                    start = spot.start;
                    spotType = spot.spotType;
                    end = spot.start + VisitInfo.DURATION;
                }
            } else {
                if(!spot.edited || spotType !== spot.spotType) {
                    visits.push({
                        id: -1,
                        type: spotType,
                        start: start,
                        end: end,
                    });
                    start = -1;

                    if(spot.edited) {
                        start = spot.start;
                        spotType = spot.spotType;
                        end = spot.start + VisitInfo.DURATION;
                    }
                } else {
                    end = spot.start + VisitInfo.DURATION;
                }
            }
        });

        if(start >= 0) {
            visits.push({
                id: -1,
                type: spotType,
                start: start,
                end: end,
            });
        }

        return visits;
    }

    getVisitsHolders() {
        const days = Object.keys(this.spotsHolders).map(day => parseInt(day));
        return days.map(day => ({
            day,
            visits: this.getVisits(day)
        }));
    }

    toggleIsOpen() {
        this.setState({isOpen: !this.state.isOpen});
    }

    save() {
        new ApiCall().saveVisits({
            visitsHolders: this.getVisitsHolders()
        });
    }

}

export default (VisitsScheduleCard);