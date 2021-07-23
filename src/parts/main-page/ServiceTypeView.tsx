import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export default function ServiceTypeView() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1"
                    alt="First slide"
                />
                <Overlap>
                    <Title>Diagnozowanie i leczenie schorzeń owłosionej skóry głowy</Title>
                </Overlap>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1"
                    alt="First slide"
                />
                <Overlap>
                    <Title>Stymulacja i naturalna regeneracja łodygi włosa</Title>
                </Overlap>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1"
                    alt="First slide"
                />
                <Overlap>
                    <Title>Skuteczne terapie hamujące wypadanie włosów </Title>
                    <Description>W naszej placówce pomożemy Ci uporać się z problemem nadmiernej utraty włosów</Description>
                </Overlap>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?width=700&crop=2:1"
                    alt="First slide"
                />
                <Overlap>
                    <Title>Zatrzymanie wypadania włosów związanego z COVID-19</Title>
                    <Description>W naszej placówce wykonujemy skuteczną mezoterapię peptydową która w efektywny sposób zatrzyma reakatywne wypadanie włosów</Description>
                </Overlap>
            </Carousel.Item>
        </Carousel>
    );
}

const Overlap = styled.div`
    background: white;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    padding: 1rem;
`;

const Title = styled.h3`
    font-weight: bold;
`;

const Description = styled.div`

`;