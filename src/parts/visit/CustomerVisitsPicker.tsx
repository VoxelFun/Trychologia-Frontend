import React, { PureComponent } from "react";
import { Spot } from "../../library/model-ui/Spot";
import { SafeStaffMember } from "../../library/model/SafeStaffMember";
import { StaffMember } from "../../library/model/StaffMember";
import { VisitMeta } from "../../library/model/VisitMeta";
import { PickVisitData } from "../../library/utils/PickVisitData";
import VisitsPicker, { VisitsPickerProps, VisitsPickerState } from "./VisitsPicker";


export interface Props extends VisitsPickerProps<SafeStaffMember> {
    
}

interface State extends VisitsPickerState {
    
}

class CustomerVisitsPicker extends VisitsPicker<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            ...this.getBaseState(props)
        };
    }

    onPickVisit(data: PickVisitData): void {
        data.spot.togglePicked();
        if(this.currentSpot)
            this.currentSpot.togglePicked();
        
        this.props.onPickVisit(data.visitMeta);
    }

}

export default (CustomerVisitsPicker);