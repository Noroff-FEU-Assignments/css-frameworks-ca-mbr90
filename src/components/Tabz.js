import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Tabz() {
  return (
    <>
      <Tabs
        defaultActiveKey="first"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="first" title="First">
          <img
            className="cardz__image"
            src="../images/news/news-1.jpg"
            alt="old television"
          />
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
            pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam
            non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <div>
            SHARE{" "}
            <i className="fa-brands fa-facebook-f">
              <i className="fa-brands fa-twitter"></i>
            </i>
          </div>
        </Tab>
        <Tab eventKey="second" title="Second">
          <img
            className="cardz__image"
            src="../images/news/news-2.jpg"
            alt="old television"
          />
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
            pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam
            non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <div>
            SHARE
            <i className="fa-brands fa-facebook-f">
              <i className="fa-brands fa-twitter"></i>
            </i>
          </div>
        </Tab>
        <Tab eventKey="third" title="Third">
          <img
            className="cardz__image"
            src="../images/news/news-3.jpg"
            alt="old television"
          />
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. Morbi eget efficitur turpis. Vivamus
            pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam
            non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <div>
            SHARE
            <i className="fa-brands fa-facebook-f">
              <i className="fa-brands fa-twitter"></i>
            </i>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default Tabz;
