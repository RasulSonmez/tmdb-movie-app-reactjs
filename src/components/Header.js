import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

function Header() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="text-white">
            Tmdb Reactjs App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex align-center justify-content-end">
              <Nav.Link
                as={Link}
                to={"/"}
                className="text-white text-decoration-none me-3"
              >
                İzlenecekler
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/watched"}
                className="text-white text-decoration-none me-3"
              >
                İzlenenler
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/watchadd"}
                className="text-white text-decoration-none"
              >
                <Button variant="primary" size="sm">
                  {" "}
                  <BiPlus />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
