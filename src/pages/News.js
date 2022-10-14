import React from "react";
import Paginate from "../components/Paginate";
import Cardz from "../components/Cardz";
import Container from "react-bootstrap/Container";

function News() {
  return (
    <>
      <Container>
        <h2>News</h2>
        <Paginate />
        <Cardz />
        <Paginate />
      </Container>
    </>
  );
}

export default News;
