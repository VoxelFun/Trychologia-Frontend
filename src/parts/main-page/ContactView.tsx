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
                    <p>{Company.ADDRESS}</p>
                    <p>tel: {Company.PHONE}</p>
                    <p>e-mail: {Company.EMAIL}</p>
                    <p>
                        Godziny otwarcia:<br/>
                        Pn-Pt 8:00-18:00
                    </p>
                    <div>
                        <FacebookOutlined style={{fontSize: 32}}/>
                        <InstagramOutlined style={{fontSize: 32}}/>
                    </div>
                </Col>
                <Col>
                {/*@ts-ignore8*/}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163104.36044872314!2d18.509533735982835!3d50.301155489590606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471130606c66b15f%3A0x9bbca89f06cbea11!2sGliwice%2C%20Polska!5e0!3m2!1spl!2sde!4v1623874744260!5m2!1spl!2sde" style={{border: 0, width: "100%", height: "100%"}} allowFullScreen="" loading="lazy"></iframe>
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