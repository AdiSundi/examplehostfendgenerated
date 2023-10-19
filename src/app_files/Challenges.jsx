import React from "react";
import Challenges_Items_Cards_Display from "./Challenges/Challenges_Items_Cards_Display.jsx";
import Common_Header from "./common/Common_Header.jsx";
import Common_Footer from "./common/Common_Footer.jsx";

const Challenges = () => {
  return (
    <>
      <Common_Header />
      <div className="page-container">
        <div className="components-grid">
          <Challenges_Items_Cards_Display />
        </div>
      </div>
      <Common_Footer />
    </>
  );
};

export default Challenges;