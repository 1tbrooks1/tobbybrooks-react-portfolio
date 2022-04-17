import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navigation({ setPage }) {
  return (
    <div >
      <>
        <Navbar bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Navbar.Brand
              href="#about"
              onClick={() => {
                setPage("About");
              }}
            >
              Tobby Brooks
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                href="#about"
                onClick={() => {
                  setPage("About");
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => {
                  setPage("Projects");
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#resume"
                onClick={() => {
                  setPage("Resume");
                }}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={() => {
                  setPage("Contact");
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Navigation;
