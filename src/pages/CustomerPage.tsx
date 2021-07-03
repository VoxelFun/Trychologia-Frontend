import { PureComponent } from "react";
import { CustomerContext, CustomerContextAction, CustomerContextInterface, CustomerContextState, DummyCustomerContext } from "../contexts/CustomerContext";
import ApiCall from "../library/api/ApiCall";

interface Props {
    children: JSX.Element
}

interface State extends CustomerContextState {
    
}

export class CustomerPage extends PureComponent<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = DummyCustomerContext.state;
    }

    async componentDidMount() {
        const safeStaffMembers = await new ApiCall().getSafeStaffMembers();
        this.setState({safeStaffMembers});
    }

    render() {
        const {children} = this.props;

        const value: CustomerContextInterface = {
            state: this.state,
            action: this.getAction()
        };

        return (
            <CustomerContext.Provider value={value}>
                {children}
            </CustomerContext.Provider>
        )
    }

    getAction(): CustomerContextAction {
        return {
            
        };
    }
}