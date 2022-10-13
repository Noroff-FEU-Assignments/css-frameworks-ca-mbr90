import React from "react";
import Paginate from "../components/Paginate";
import Cardz from "../components/Cardz";

function News() {
  return (
    <>
      <h2>News</h2>
      <Paginate />
      <Cardz />
      <Paginate />
    </>
  );
}

export default News;
