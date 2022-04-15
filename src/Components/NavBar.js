import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartCounter from "./CartCounter";

const NavBar = () => (
  <Navbar bg="custom" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home" className="ps-3">
        Capstone Project
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ps-3">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin">
            <Nav.Link>Admin</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/checkout">
            <Nav.Link>
              <CartCounter />
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
