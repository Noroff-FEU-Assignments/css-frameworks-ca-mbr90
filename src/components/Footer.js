import React from "react";

function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap py-2 justify-content-center ">
        <div className="container row justify-content-center align-items-center">
          <div className="footer__item col-12 col-md-4 " id="footer__paragraph">
            <i className=" footer__item--icon fa-brands fa-vimeo-v"></i>
            <i className=" footer__item--icon fa-brands fa-youtube"></i>
          </div>

          <a
            href="/"
            className="footer__item text-decoration-none col-6 col-md-4"
          >
            hello@yay.com
          </a>

          <p className="footer__item nav  justify-content-end col-6 col-md-4">
            Copyright 2020
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
