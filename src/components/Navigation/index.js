import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./style.css"

function Navigation({ setPage }) {
  return (
    <div className="d-flex justify-content-center">
      <>
        <Navbar bg="dark" variant="dark">
          <Container >
            <Navbar.Brand
              href="#about"
              onClick={() => {
                setPage("About");
              }}
            >
              Tobby Brooks
            </Navbar.Brand>
            <Nav className="m-3">
              <Nav.Link
                href="#about"
                onClick={() => {
                  setPage("About");
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => {
                  setPage("Projects");
                }}
              >
                Portfolio
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
