import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-content">
      <Navbar bg="" variant="dark" expand="lg">
        <Container className="">
          <Row className="mx-auto">
            <Col lg="3">
              <Navbar.Brand
                href="#home"
                style={{ color: "fff", fontSize: "24px" }}
              >
                Code with Moin
              </Navbar.Brand>
            </Col>
            <Col lg="9">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Nav.Link>
                    <NavLink
                      className="navMenu"
                      to="/home"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#282c34",
                      }}
                    >
                      Home
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      className="navMenu"
                      to="/courses"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#282c34",
                      }}
                    >
                      Courses
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/about"
                      className="navMenu"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#282c34",
                      }}
                    >
                      About us
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      className="navMenu"
                      to="/contact"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#282c34",
                      }}
                    >
                      Contact us
                    </NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
