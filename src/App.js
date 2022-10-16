import React from "react";
import "./sass/style.scss";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/news" className="nav-link">
                News
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                // className="me-2"
                aria-label="Search"
              />
              <Button className="nav__button" variant="outline-success">
                Go
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
