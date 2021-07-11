import { Navbar, Nav } from "react-bootstrap";
import { Company } from "../data/Company";
import { PageHook } from "../library/PageHook";
import logo from "../assets/logo.svg";

interface Props {
    redirect: (path: string) => void;
}

export function TopNavbar(props: Props) {
    return (
        <Navbar bg="light" expand="md" sticky="top">
            <Navbar.Brand onClick={() => props.redirect("/")}>
                <img
                    alt=""
                    src={logo}
                    width="128"
                    height="128"
                    className="d-inline-block align-top"
                    style={{position: "relative"}}
                />{' '}
                {Company.NAME}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => props.redirect("/about")}>O nas</Nav.Link>
                    <Nav.Link onClick={() => props.redirect("/visit")}>Umów wizytę</Nav.Link>
                    <Nav.Link onClick={() => props.redirect("/enterprises/projects")}>Zabiegi</Nav.Link>
                    {/* <Nav.Link onClick={() => props.redirect("/enterprises/projects")}>Blog</Nav.Link> */}
                    <Nav.Link href={`#${PageHook.Contact}`}>Kontakt</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}