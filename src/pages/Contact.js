import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-lg-2">
            <div class="container">
              <div class="container">
                <h4>hello@yay.com</h4>
              </div>
              <div class="container">
                <h4>123 456 7890</h4>
              </div>

              <div class="container">
                <div class="col">
                  <h4>123 Some Street </h4>
                  <h4>Somewhere</h4>
                  <h4>Some City</h4>
                  <h4> 10000</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <h2>Submit your details</h2>
            <div class="container">
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
