import React, { PureComponent } from "react";
import { StaffMember } from "../../library/model/StaffMember";
import VisitsPicker, { VisitsPickerProps, VisitsPickerState } from "./VisitsPicker";


export interface Props extends VisitsPickerProps<StaffMember> {
    
}

interface State extends VisitsPickerState {
    
}

abstract class AdminVisitsPicker extends VisitsPicker<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            ...this.getBaseState()
        };
    }

}

export default (AdminVisitsPicker);