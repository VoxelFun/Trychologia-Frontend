import {Row, Col} from "react-bootstrap";
import styled from "styled-components";
import { VisitMeta } from "../../library/model/VisitMeta";
import { CustomerVisitForm } from "./CustomerVisitForm";

interface Props {
    staffMemberName: string;
    visitMeta: VisitMeta;
}

export function CustomerVisitCreator(props: Props) {
    return (
        <div>
            <Row className="align-items-center" id="form">
                <Col md={4}>
                    <Title>
                        Jak przebiega wizyta?
                    </Title>
                    <div>
                        Jest to bezinwazyjna i bezbolesna metoda obrazowania skóry głowy. Urządzenie wyposażone jest  w obiektyw zdolny do uzyskania różnego stopnia powiększania co umożliwia precyzyjną ocenę powierzchni skóry głowy, stanu ujścia mieszków włosowych, obrazu naczyń krwionośnych.
                    </div>
                    <Title>
                        Jak przygotować się do wizyty?
                    </Title>
                    <ul>
                        <li>Nie myj głowy minumum 24h przed badaniem</li>
                        <li>Nie stosuj środków do stylizacji włosów</li>
                        <li>Możesz zabrać ze sobą aktualne badanie krwii</li>
                    </ul>
                </Col>
                <Col md={8}>
                    <CustomerVisitForm {...props}/>
                </Col>
            </Row>
        </div>
    );
}

const Title = styled.div`
    font-weight: bold;
    margin-bottom: 0.2em;
`;