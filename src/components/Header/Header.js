import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-content">
      <Navbar bg="" variant="dark" expand="lg">
        <Container className="d-flex align-items-center">
          <Navbar.Brand
            href="#home"
            style={{ color: "ff418d", fontSize: "24px" }}
          >
            Code with Moin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  to="/home"
                  style={{ color: "white", fontSize: "20px" }}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "ff418d",
                  }}
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/courses"
                  style={{ color: "white", fontSize: "20px" }}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "ff418d",
                  }}
                >
                  Courses
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/about"
                  style={{ color: "white", fontSize: "20px" }}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "ff418d",
                  }}
                >
                  About us
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/contact"
                  style={{ color: "white", fontSize: "20px" }}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "ff418d",
                  }}
                >
                  Contact us
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
