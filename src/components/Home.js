import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#index">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#index">Home</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="p-5 mb-4 text-white bg-dark rounded-3">
        <div class="container-fluid py-5"></div>
      </div>
      <h2>We do YAY things</h2>
      <p>
        Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
        rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
        finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
        consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
        euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a,
        varius eget massa.
      </p>
      <Tabs
        defaultActiveKey="first"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="first" title="First">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
            pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam
            non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.{" "}
          </p>
        </Tab>
        <Tab eventKey="second" title="Second">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
            pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam
            non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.{" "}
          </p>
        </Tab>
        <Tab eventKey="third" title="Third">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
            pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam
            non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.{" "}
          </p>
        </Tab>
      </Tabs>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">Vimeo and Youtube icons</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            hello@YAY.com
          </a>

          <p class="nav col-md-4 justify-content-end">Copyright 2020</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
