import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardz() {
  return (
    <>
      <div className="row">
        <div className="container p-2 col-lg-3">
          <Card className="cardz">
            <Card.Img
              className="cardz__image"
              src="../images/news/news-1.jpg"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="container p-2 col-lg-3">
          <Card className="cardz">
            <Card.Img
              className="cardz__image"
              src="../images/news/news-2.jpg"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="container p-2 col-lg-3">
          <Card className="cardz">
            <Card.Img
              className="cardz__image"
              src="../images/news/news-3.jpg"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="container p-2 col-lg-3">
          <Card className="cardz">
            <Card.Img
              className="cardz__image"
              src="../images/news/news-4.jpg"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row d-none d-lg-flex">
        <div className="container p-2 col-lg-3">
          <Card className="cardz">
            <Card.Img
              className="cardz__image"
              src="../images/news/news-5.jpg"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="container p-2 col-lg-3">
          <Card className="cardz">
            <Card.Img
              className="cardz__image"
              src="../images/news/news-6.jpg"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="container p-2 col-lg-3">
          <Card className="cardz">
            <Card.Img
              className="cardz__image"
              src="../images/news/news-7.jpg"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="container p-2 col-lg-3">
          <Card className="cardz ">
            <Card.Img
              className="cardz__image"
              src="../images/news/news-8.jpg"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cardz;
