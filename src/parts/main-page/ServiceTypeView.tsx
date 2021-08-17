import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import diagnozowanie from "./../../assets/service_type/diagnozowanie.jpg";
import stymulacja from "./../../assets/service_type/stymulacja.jpg";
import terapia from "./../../assets/service_type/terapia.jpg";
import wypadanie from "./../../assets/service_type/wypadanie.jpg";

export default function ServiceTypeView() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <Photo
                    className="d-block w-100"
                    src={diagnozowanie}
                />
                <Overlap>
                    <Container className="align-items-center">
                        <Col md={8}>
                            <Title>Diagnozowanie i wspomaganie leczenia schorzeń owłosionej skóry głowy</Title>
                        </Col>
                    </Container>
                </Overlap>
            </Carousel.Item>
            <Carousel.Item>
                <Photo
                    className="d-block w-100"
                    src={stymulacja}
                />
                <Overlap>
                    <Container className="align-items-center">
                        <Col md={8}>
                            <Title>Stymulacja i naturalna regeneracja łodygi włosa</Title>
                        </Col>
                    </Container>
                </Overlap>
            </Carousel.Item>
            <Carousel.Item>
                <Photo
                    className="d-block w-100"
                    src={terapia}
                />
                <Overlap>
                    <Container className="align-items-center">
                        <Col md={8}>
                            <Title>Skuteczne terapie hamujące wypadanie włosów </Title>
                            <Description>W naszej placówce pomożemy Ci uporać się z problemem nadmiernej utraty włosów</Description>
                        </Col>
                    </Container>
                </Overlap>
            </Carousel.Item>
            <Carousel.Item>
                <Photo
                    className="d-block w-100"
                    src={wypadanie}
                />
                <Overlap>
                    <Container className="align-items-center">
                        <Col md={8}>
                            <Title>Zatrzymanie wypadania włosów związanego z COVID-19</Title>
                            <Description>W naszej placówce wykonujemy skuteczną mezoterapię peptydową, która w efektywny sposób zatrzymuje reaktywne wypadanie włosów</Description>
                        </Col>
                    </Container>
                </Overlap>
            </Carousel.Item>
        </Carousel>
    );
}

const Overlap = styled.div`
    /* background: white; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: -10vh;
    padding-left: 1rem;
    padding-right: 1rem;
    /* margin: 2rem; */
    /* padding: 1rem; */
`;

const Container = styled(Row)`
    height: 100%;
`;

const Title = styled.h3`
    font-weight: bold;
`;

const Description = styled.div`

`;

const Photo = styled.img`
    
    object-fit: cover;
width: 100%;
height: 80vh;
`;