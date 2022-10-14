import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <div className="container">
              <div className="container">
                <i className="fa-solid fa-envelope"></i> <p>hello@yay.com</p>
              </div>
              <div className="container">
                <i className="fa-solid fa-phone-flip"></i>
                <p>123 456 7890</p>
              </div>

              <div className="container">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                <div className="col">
                  <p>123 Some Street</p>
                  <p>Somewhere</p>
                  <p>Some City</p>
                  <p>1000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h2>Submit your details</h2>
            <div className="container">
              <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control type="Name" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="Email" />
                <Form.Label>Website</Form.Label>
                <Form.Control type="Website" />
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" style={{ height: "100px" }} />
                <Form.Check
                  type="checkbox"
                  label="Allow us to sell your personal details to whomever we want"
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
