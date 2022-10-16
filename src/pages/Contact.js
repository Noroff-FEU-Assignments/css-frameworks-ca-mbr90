import React from "react";

import Contactinfo from "../components/Contactinfo";
import Contactform from "../components/Contactform";

function Contact() {
  return (
    <main>
      <div className="container message__wrap">
        <h2 className="d-none d-lg-block">Submit your details</h2>
        <div className="row">
          <Contactinfo />
          <div className="col-lg-6">
            <h2 className="form__header d-lg-none">Submit your details</h2>
            <Contactform />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
