import React from "react";

function Contactinfo() {
  return (
    <>
      <div className="col-lg-6 order-lg-2">
        <div className="container">
          <div className="row">
            <i className="fa-solid fa-envelope col-1 contact__info--icon"></i>{" "}
            <p className="col contact__text">hello@yay.com</p>
          </div>
          <div className="row contact__container">
            <i className="fa-solid fa-phone-flip col-1 contact__info--icon"></i>
            <p className="col contact__text">123 456 7890</p>
          </div>
          <div className="row contact__container">
            <i className="fa-sharp fa-solid fa-location-dot col-1 contact__info--icon"></i>
            <div className="col">
              <p className="contact__text contact__text--adress">
                123 Some Street
              </p>
              <p className="contact__text contact__text--adress">Somewhere</p>
              <p className="contact__text contact__text--adress">Some City</p>
              <p className="contact__text contact__text--adress">1000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactinfo;
