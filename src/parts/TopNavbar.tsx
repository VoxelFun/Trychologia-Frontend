import { Navbar, Nav } from "react-bootstrap";
import { Company } from "../data/Company";
import { PageHook } from "../library/PageHook";
import logo from "../assets/logo.svg";
import { scrollTo } from "../library/Document";

interface Props {
    redirect: (path: string) => void;
}

export function TopNavbar(props: Props) {
    return (
        <Navbar bg="light" expand="md" sticky="top">
            <Navbar.Brand onClick={() => props.redirect("/")}>
                <img
                    alt="Logo TrychoMedical"
                    src={logo}
                    width="128"
                    height="128"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => props.redirect("/gabinet")}>O nas</Nav.Link>
                    <Nav.Link onClick={() => props.redirect("/wizyta")}>Umów wizytę</Nav.Link>
                    <Nav.Link onClick={() => props.redirect("/zabiegi")}>Zabiegi</Nav.Link>
                    <Nav.Link onClick={() => props.redirect("/blog")}>Blog</Nav.Link>
                    <Nav.Link onClick={() => scrollTo(PageHook.Contact)}>Kontakt</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}