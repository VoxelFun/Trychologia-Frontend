import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Company } from "../data/Company";
import { PAGE_NAME } from "../data/Page";
import { PageHook } from "../library/PageHook";
import logo from "../logo.svg";

interface Props {
    redirect: (path: string) => void;
}

export function TopNavbar(props: Props) {
    return (
        <Navbar bg="light" expand="md" sticky="top">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                {Company.NAME}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => props.redirect("/board")}>O nas</Nav.Link>
                    <Nav.Link onClick={() => props.redirect("/enterprises/projects")}>Umów wizytę</Nav.Link>
                    <Nav.Link onClick={() => props.redirect("/enterprises/projects")}>Zabiegi</Nav.Link>
                    <Nav.Link onClick={() => props.redirect("/enterprises/projects")}>Blog</Nav.Link>
                    <Nav.Link href={`/#${PageHook.Contact}`}>Kontakt</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}