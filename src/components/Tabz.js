import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";

function Tabz() {
  return (
    <>
      <Tabs
        defaultActiveKey="first"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="first" title="First">
          <div className="tab__container row">
            <img
              className="cardz__image col-4"
              src="../images/tab/tab-1.jpg"
              alt="old television"
            />
            <div className="col-8">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus. Morbi eget efficitur turpis.
                Vivamus pellentesque tortor massa, venenatis pharetra leo
                laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras
                vehicula pharetra lectus non maximus. Sed condimentum mattis
                rhoncus.
              </p>
              <div className="tab__icons">
                SHARE
                <i className="fa-brands fa-facebook-f">
                  <i className="fa-brands fa-twitter"></i>
                </i>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="second" title="Second">
          <div className="tab__container row">
            <img
              className="cardz__image col-4"
              src="../images/tab/tab-2.jpg"
              alt="old television"
            />
            <div className="col-8">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus. Morbi eget efficitur turpis.
                Vivamus pellentesque tortor massa, venenatis pharetra leo
                laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras
                vehicula pharetra lectus non maximus. Sed condimentum mattis
                rhoncus.
              </p>
              <div className="tab__icons">
                SHARE
                <i className="fa-brands fa-facebook-f">
                  <i className="fa-brands fa-twitter"></i>
                </i>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="third" title="Third">
          <div className="tab__container row">
            <img
              className="cardz__image col-4"
              src="../images/tab/tab-3.jpg"
              alt="old television"
            />
            <div className="col-8">
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus. Morbi eget efficitur turpis.
                Vivamus pellentesque tortor massa, venenatis pharetra leo
                laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras
                vehicula pharetra lectus non maximus. Sed condimentum mattis
                rhoncus.
              </p>
              <div className="tab__icons">
                SHARE
                <i className="fa-brands fa-facebook-f">
                  <i className="fa-brands fa-twitter"></i>
                </i>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default Tabz;
