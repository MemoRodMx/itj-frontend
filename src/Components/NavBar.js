import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartCounter from "./CartCounter";

const NavBar = () => (
  <Navbar bg="custom" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home" className="ps-3">
        Capstone Project
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ps-3">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/checkout">
            <Nav.Link>
              <CartCounter />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin">
            <Nav.Link>Admin</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
