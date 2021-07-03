import React from "react";
import { SafeStaffMember } from "../library/model/SafeStaffMember";

export interface CustomerContextState {
    safeStaffMembers: SafeStaffMember[] | undefined;
}

export interface CustomerContextAction {
    
}

export interface CustomerContextInterface {
    state: CustomerContextState;
    action: CustomerContextAction;
}

export const DummyCustomerContext: CustomerContextInterface = {
    state: {
        safeStaffMembers: undefined
    },
    //@ts-ignore
    action: undefined
};

export const CustomerContext = React.createContext<CustomerContextInterface>(DummyCustomerContext);