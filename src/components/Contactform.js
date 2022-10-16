import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contactform() {
  return (
    <>
      <div className="form__container">
        <Form>
          <div className="form__wrapper">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Name" />
          </div>
          <div className="form__wrapper">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" />
          </div>
          <div className="form__wrapper">
            <Form.Label>Website</Form.Label>{" "}
            <div className="email__wrapper row">
              <label className="email__label col-2">https://</label>
              <Form.Control className="col email__input" type="Website" />
            </div>
          </div>
          <div className="form__wrapper">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </div>
          <Form.Check
            type="checkbox"
            label="Allow us to sell your personal details to whomever we want"
          />
          <Button className="form__button" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Contactform;
