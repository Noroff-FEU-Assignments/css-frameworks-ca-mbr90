import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Accordionz() {
  return (
    <>
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
              pellentesque tortor massa, venenatis pharetra leo laoreet a.
              Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
              pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
            <img
              className="cardz__image"
              src="../images/news/news-1.jpg"
              alt="old television"
            />
            <div>
              SHARE{" "}
              <i class="fa-brands fa-facebook-f">
                <i class="fa-brands fa-twitter"></i>
              </i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
              pellentesque tortor massa, venenatis pharetra leo laoreet a.
              Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
              pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
            <img
              className="cardz__image"
              src="../images/news/news-2.jpg"
              alt="old television"
            />
            <div>
              SHARE{" "}
              <i class="fa-brands fa-facebook-f">
                <i class="fa-brands fa-twitter"></i>
              </i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
              pellentesque tortor massa, venenatis pharetra leo laoreet a.
              Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
              pharetra lectus non maximus. Sed condimentum mattis rhoncus.
            </p>
            <img
              className="cardz__image"
              src="../images/news/news-3.jpg"
              alt="old television"
            />
            <div>
              SHARE{" "}
              <i class="fa-brands fa-facebook-f">
                <i class="fa-brands fa-twitter"></i>
              </i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Accordionz;