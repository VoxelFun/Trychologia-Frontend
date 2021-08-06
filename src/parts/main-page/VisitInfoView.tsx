import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import { Card, CardsContainer } from "../styled/Card";
import { List, ListContainer, ListItem, ListTitle } from "../styled/List";
import { SectionBody, SectionContainer, SectionHeader } from "./Section";

interface Props extends RouteComponentProps<any> {
    
}

function VisitInfoView(props: Props) {
    return (
        <SectionContainer>
            <SectionHeader>
                Wizyta
            </SectionHeader>
            <SectionBody>
                <CardsContainer xs={1} xl={2}>
                    <Card.Container>
                        <div style={{padding: "5px"}}>

                        </div>
                        <Card.Header>
                            Kto powinien się umówić?
                        </Card.Header>
                        <List>
                            <ListItem>osoby które zauważyły wzmożone wypadnie włosów </ListItem>
                            <ListItem>osoby, które zauważyły nadmierne przerzedzenie włosów</ListItem>
                            <ListItem>osoby u których kondycja łodygi włosa uległa pogorszeniu (suche, łamliwe włosy)</ListItem>
                            <ListItem>osoby borykające się ze schorzeniami owłosionej skory głowy</ListItem>
                        </List>
                    </Card.Container>
                    <Card.Container>
                        <Card.Header>
                            Jak wygląda wizyta w naszym gabinecie?
                        </Card.Header>
                        <List>
                            <ListItem>
                                Każdą wizytę rozpoczynamy od szczegółowego wywiadu trychologicznego z pacjentem na temat jego dolegliwości, przebytych chorób czy zażywanych leków.
                            </ListItem>
                            <ListItem>
                                Kolejnym krokiem jest trichoskopowe badanie owłosionej skóry głowy. Całkowicie bezobolesna i bezinwazyjna metoda obrazowania, która  umożliwia precyzyjną ocenę powierzchni skóry głowy, stanu ujścia mieszków włosowych oraz obrazu naczyń krwionośnych.
                            </ListItem>
                            <ListItem>
                                Po otrzymaniu wstępnej diagnozy, dobieramy odpowiednią kurację oraz pielęgnacje.
                            </ListItem>
                        </List>
                    </Card.Container>
                </CardsContainer>
                <ButtonContainer>
                    <Button onClick={() => props.history.replace("/visit")}>
                        Umów się już dziś!
                    </Button>
                </ButtonContainer>
            </SectionBody>
        </SectionContainer>
    );
}

export default withRouter(VisitInfoView);

export const ButtonContainer = styled.div`
    text-align: center;
    margin-top: .75rem;
`;