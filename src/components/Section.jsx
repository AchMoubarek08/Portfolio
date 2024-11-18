import React, { useRef } from "react";
import About from "./About";

const Section = () => {
  return (
    <section className="section section-container">
      <div className="left-div">
        <div className="projects-desc">
            <About/>
            <About/>
            <About/>
            <About/>
        </div>
      </div>
      <div className="right-div">
        <img className="vertical-image" alt="Description" />
      </div>
    </section>
  );
};

export default Section;
