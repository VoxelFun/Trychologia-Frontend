import React, { PureComponent } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import ApiCall from "../../library/api/ApiCall";
import { SpotsHolder } from "../../library/model-ui/SpotsHolder";
import { VisitsScheduler } from "../../library/utils/VisitsScheduler";

const DAYS_AMOUNT = 5;

interface Props {
    admin: boolean;
}

interface State {
    date: Date;
    spotsHolders: SpotsHolder[];
    visitsScheduler: VisitsScheduler | undefined;
}

class VisitsPicker extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            date: new Date(),
            spotsHolders: [],
            visitsScheduler: undefined
        };
    }

    render() {
        const {} = this.props;
        const {} = this.state;

        return (
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default (VisitsPicker);

const Header = styled.div`
    background-color: #658cdf;
    
`;

const Cell = styled.td`

`;