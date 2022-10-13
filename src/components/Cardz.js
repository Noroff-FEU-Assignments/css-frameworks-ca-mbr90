import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardz() {
  return (
    <>
      <div className="container p-2">
        <Card>
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
            <Button variant="primary">More</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cardz;
