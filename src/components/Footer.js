import React from "react";

function Footer() {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">Vimeo and Youtube icons</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            hello@yay.com
          </a>

          <p class="nav col-md-4 justify-content-end">Copyright 2020</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
