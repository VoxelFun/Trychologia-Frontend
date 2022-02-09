import { useState } from "react";
import { Modal } from "react-bootstrap";
import {Form, Col, Row, Button, Spinner} from "react-bootstrap";
import { Company } from "../../data/Company";
import { POLICY_BASE_URL } from "../../data/Env";
import ApiCall from "../../library/api/ApiCall";
import { Customer, CustomerKey, DummyCustomer } from "../../library/model/Customer";
import { VisitMeta } from "../../library/model/VisitMeta";

enum RequestState {
    NOT_INITIALIZED, SAVING, FAIL, SUCCESS
}

export interface CustomerVisitsProps {
    staffMemberName: string;
    visitMeta: VisitMeta;
}

export function CustomerVisitForm(props: CustomerVisitsProps) {
    const [customer, setCustomer] = useState<Customer>(DummyCustomer);
    const [validated, setValidated] = useState<boolean>(false);
    const [requestState, setRequestState] = useState<RequestState>(RequestState.NOT_INITIALIZED);

    function onChange(key: CustomerKey, event: any) {
        setCustomer({
            ...customer,
            [key]: event.target.value
        });
    }

    async function onSubmit(event: any) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        setValidated(true);
        setRequestState(RequestState.SAVING);

        try {
            await new ApiCall().bookVisit({
                ...props.visitMeta,
                customer
            });
            setRequestState(RequestState.SUCCESS);
        } catch {
            setRequestState(RequestState.FAIL);
        }
    }

    function onHideModal() {
        switch(requestState) {
            case RequestState.FAIL:
                window.location.reload();
                return;
            case RequestState.SAVING:
                return;
            case RequestState.SUCCESS:
                window.location.reload();
                return;
        }
    }

    return (
        <div>
        <Form validated={validated} onSubmit={onSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Pracownik
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly value={props.staffMemberName} required/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Termin
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly value={VisitMeta.toPrettyString(props.visitMeta)} required/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Imię i nazwisko
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder="Jan Kowalski" onChange={e => onChange("name", e)} required/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Adres e-mail
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder="jankowalski@mail.com" onChange={e => onChange("email", e)} required/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Numer telefonu
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder={Company.PHONE} onChange={e => onChange("phone", e)} required/>
                </Col>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" id="zgoda1">
                    <Form.Check.Input type="checkbox" required/>
                    <Form.Check.Label>
                        Akceptuję <a href={`${POLICY_BASE_URL}/polityka-prywatnosci.html`} target={"_blank"}>politykę prywatności</a>
                    </Form.Check.Label>
                </Form.Check>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" id="zgoda2">
                    <Form.Check.Input type="checkbox" required/>
                    <Form.Check.Label>
                        Zgadzam się na <a href={`${POLICY_BASE_URL}/przetwarzanie-danych-osobowych-niezbednych-do-rejestracji-wizyty.html`} target={"_blank"}>przetwarzanie danych osobowych niezbędnych do rejestracji wizyty.</a>
                    </Form.Check.Label>
                </Form.Check>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" id="zgoda3">
                    <Form.Check.Input type="checkbox"/>
                    <Form.Check.Label>
                        Zgadzam się na <a href={`${POLICY_BASE_URL}/przetwarzanie-danych-osobowych-zwiazana-z-przekazywaniem-informacji-handlowych.html`} target={"_blank"}>przetwarzanie danych osobowych związanych z przekazywaniem informacji handlowych.</a>
                    </Form.Check.Label>
                </Form.Check>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" id="zgoda4">
                    <Form.Check.Input type="checkbox"/>
                    <Form.Check.Label>
                        Zgadzam się na <a href={`${POLICY_BASE_URL}/przekazywanie-informacji-handlowych-i-promocyjnych-droga-elektroniczna.html`} target={"_blank"}>przekazywanie informacji handlowych i promocyjnych drogą elektroniczna.</a>
                    </Form.Check.Label>
                </Form.Check>
            </Form.Group>
            <Button type="Submit">
                Zarezerwuj wizytę
            </Button>

            <Modal show={requestState !== RequestState.NOT_INITIALIZED} onHide={onHideModal}>
                {requestState === RequestState.SAVING && (<>
                    <Modal.Body><Spinner size="sm" animation="border"/> Trwa rezerwacja wizyty. Proszę czekać.</Modal.Body>
                </>)}
                {requestState === RequestState.FAIL && (<>
                    <Modal.Body>Przepraszamy, ale nie udało nam się zarezerwować wizyty. Proszę spróbować ponownie.</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onHideModal}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </>)}
                {requestState === RequestState.SUCCESS && (<>
                    <Modal.Body>Twoja rezerwacja została utworzona!</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onHideModal}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </>)}
            </Modal>
            
        </Form>

        </div>
    );
}