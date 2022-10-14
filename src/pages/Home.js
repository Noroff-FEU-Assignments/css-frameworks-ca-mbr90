import React from "react";

import Carouzel from "../components/Carouzel";
import Tabz from "../components/Tabz";
import Accordionz from "../components/Accordionz";

function Home() {
  return (
    <>
      <Carouzel />
      <h2>We do YAY things</h2>
      <p>
        Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
        rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
        finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
        consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
        euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a,
        varius eget massa.
      </p>
      <div className="d-none d-md-block">
        <Tabz />
      </div>
      <Accordionz />
    </>
  );
}

export default Home;
