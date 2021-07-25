import styled from "styled-components";
import { VisitMeta } from "../../library/model/VisitMeta";
import { Card, CardsContainer } from "../styled/Card";
import { List, ListItem } from "../styled/List";
import { CustomerVisitForm, CustomerVisitsProps } from "./CustomerVisitForm";

interface Props extends CustomerVisitsProps {
    
}

export function CustomerVisitCreator(props: Props) {
    return (
        <div>
            <CardsContainer>
                <Card.Container md={4}>
                    <Card.Header>Jak przygotować się do wizyty?</Card.Header>
                    <Card.Body>
                    <List>
                        <ListItem>Nie myj głowy minumum 24h przed badaniem</ListItem>
                        <ListItem>Nie stosuj środków do stylizacji włosów</ListItem>
                        <ListItem>Możesz zabrać ze sobą aktualne badanie krwii</ListItem>
                    </List>
                    </Card.Body>
                </Card.Container>
                <Card.Container md={8}>
                    <CustomerVisitForm {...props}/>
                </Card.Container>
            </CardsContainer>
        </div>
    );
}

const Title = styled.div`
    font-weight: bold;
    margin-bottom: 0.2em;
`;