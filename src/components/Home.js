import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
function Home() {
  return (
    <>
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
      <div className="d-none d-md-block">
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
              pellentesque tortor massa, venenatis pharetra leo laoreet a.
              Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
              pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
          </Tab>
          <Tab eventKey="second" title="Second">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
              pellentesque tortor massa, venenatis pharetra leo laoreet a.
              Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
              pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
          </Tab>
          <Tab eventKey="third" title="Third">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
              pellentesque tortor massa, venenatis pharetra leo laoreet a.
              Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
              pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
          </Tab>
        </Tabs>
      </div>
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
            pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam
            non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">Vimeo and Youtube icons</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            hello@yay.com
          </a>

          <p class="nav col-md-4 justify-content-end">Copyright 2020</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
