import React, { PureComponent } from "react";
import { Spot } from "../../library/model-ui/Spot";
import { SpotsHolder } from "../../library/model-ui/SpotsHolder";
import { StaffMember } from "../../library/model/StaffMember";
import { VisitMeta } from "../../library/model/VisitMeta";
import { PickVisitData } from "../../library/utils/PickVisitData";
import { HashMap } from "../../utils/Delegate";
import VisitsPicker, { VisitsPickerProps, VisitsPickerState } from "./VisitsPicker";
import {Modal} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { VisitTypeLabel } from "../../data/Company";
import { VisitsScheduler } from "../../library/utils/VisitsScheduler";
import { VisitType } from "../../library/model/Visit";


export interface Props extends VisitsPickerProps<StaffMember> {
    
}

interface State extends VisitsPickerState {
    spotPopup: undefined | {
        visitType: number
    };
}

abstract class AdminVisitsPicker extends VisitsPicker<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            ...this.getBaseState(props),
            spotPopup: undefined
        };
    }

    

    get visitsScheduler(): VisitsScheduler {
        return this.state.visitsScheduler!;
    }

    render() {
        const {spotPopup} = this.state;
        const {currentSpot} = this;
        
        if(!currentSpot)
            return super.render();

        return (
            <>
                {super.render()}
                {spotPopup !== undefined && (
                    <Modal show={true} onHide={() => this.hidePopup()}>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Rodzaj wizyty</Form.Label>
                                    <Form.Control as="select" value={spotPopup.visitType} onChange={e => {spotPopup.visitType = parseInt(e.target.value); this.updateState()}}>
                                        {Object.values(VisitTypeLabel).map((label, i) => (
                                            <option key={i} value={i}>{label}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.editPickedSpots()}>
                                Ok
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </>
        );
    }

    clearPickedSpots() {
        this.currentSpot && this.currentSpot.holder.spots.forEach(spot => spot.picked = false);
    }

    tryClearPickedSpots(spot: Spot) {
        if(this.currentSpot && !spot.sameHolder(this.currentSpot))
            this.clearPickedSpots();
    }

    editPickedSpots() {
        if(!this.state.spotPopup)
            return;
        
        const {visitType} = this.state.spotPopup;
        this.getPickedSpots().forEach(spot => spot.setType(visitType));
        this.hidePopup();
    }

    getCurrentSpot(): Spot {
        return this.currentSpot!;
    }

    getPickedSpots() {
        return this.currentSpot ? this.currentSpot.holder.spots.filter(spot => spot.picked) : [];
    }

    hidePopup() {
        this.setState({spotPopup: undefined});
    }

    onPickVisit(data: PickVisitData): void {
        const {key, spot} = data;
        if(key.ctrl) {
            spot.togglePicked();
            this.tryClearPickedSpots(spot);
        } else if(key.shift && this.pickVisitsRange(spot)) {
            this.tryClearPickedSpots(spot);
        } else {
            if(spot.picked) {
                //@ts-ignore
                this.state.spotPopup = {
                    visitType: this.getCurrentSpot().spotType
                };
            } else {
                this.clearPickedSpots();
                spot.togglePicked();
            }
        }

        this.props.onPickVisit(this.visitsScheduler.spotsHolders);
    }

    pickVisitsRange(spot: Spot): boolean {
        const {currentSpot} = this;
        if(!currentSpot || !currentSpot.sameHolder(spot))
            return false;
        
        let start, end;
        if(currentSpot.isBefore(spot)) {
            start = currentSpot.index;
            end = spot.index;
        } else {
            start = spot.index;
            end = currentSpot.index;
        }

        do {
            spot.holder.spots[start++].picked = true;
        } while(start <= end);

        return true;
    }

}

export default (AdminVisitsPicker);