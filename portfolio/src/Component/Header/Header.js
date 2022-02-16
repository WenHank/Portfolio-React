import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="HeaderContainer">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./Img/icon.JPG" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
