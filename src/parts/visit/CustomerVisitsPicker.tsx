import React, { PureComponent } from "react";
import { SafeStaffMember } from "../../library/model/SafeStaffMember";
import { StaffMember } from "../../library/model/StaffMember";
import VisitsPicker, { VisitsPickerProps, VisitsPickerState } from "./VisitsPicker";


export interface Props extends VisitsPickerProps<SafeStaffMember> {
    
}

interface State extends VisitsPickerState {
    
}

class CustomerVisitsPicker extends VisitsPicker<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            ...this.getBaseState()
        };
    }

}

export default (CustomerVisitsPicker);