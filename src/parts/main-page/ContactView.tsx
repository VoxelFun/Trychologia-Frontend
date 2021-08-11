import { Row, Col } from "react-bootstrap";
import { Company } from "../../data/Company";
import {FacebookOutlined, InstagramOutlined} from "@ant-design/icons";
import styled from "styled-components";
import { PageHook } from "../../library/PageHook";

export default function ContactView() {
    return (
        <Container id={PageHook.Contact}>
            <Row>
                <Col>
                    <p>{Company.NAME}</p>
                    <div>{Company.ADDRESS}</div>
                    <p>Gabinet Sztuk Pięknych</p>
                    <p>tel: {Company.PHONE}</p>
                    <p>e-mail: {Company.EMAIL}</p>
                    <p>
                        Godziny otwarcia:<br/>
                        Pn-Pt 10:00-18:00<br/>
                        Sb 10:00-12:30
                    </p>
                    <div>
                        <a href={"https://www.facebook.com/145480511000201/"} target={"_blank"}><FacebookOutlined style={{fontSize: 32, color: "white"}}/></a>
                        <InstagramOutlined style={{fontSize: 32}}/>
                    </div>
                </Col>
                <Col>
                {/*@ts-ignore8*/}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.683604979627!2d18.670141015725868!3d50.297833679454634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471130567971af3d%3A0x79a0c4188e6fcbad!2sGabinet%20Sztuk%20Pi%C4%99knych!5e0!3m2!1spl!2sde!4v1626901514474!5m2!1spl!2sde" style={{border: 0, width: "100%", height: "100%"}} allowFullScreen="" loading="lazy"></iframe>
                </Col>
            </Row>
        </Container>
    );
}

const Container = styled.div`
  padding: 2em 1em;
  background: ${({theme}) => theme.footer};
  color: white;
`;