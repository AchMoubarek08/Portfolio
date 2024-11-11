import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../motion";
// import "./About.css";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="service-card-container">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="service-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="service-card-inner"
      >
        <img src={icon} alt="web-development" className="service-card-icon" />

        <h3 className="service-card-title">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Overview = () => {
  return (
    <div id="Overview" className="section about-section animate" style={{paddingTop : 60}}>
      <motion.div style={{width: "100%"}}>
        <p className="about-paragraph about-text">Introduction</p>
        <h1 className="about-subtitle about-text">Overview.</h1>
      </motion.div>
      <motion.div style={{width: "100%"}}>
        <motion.p className="about-paragraph about-text">
          I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable.
        </motion.p>
      </motion.div>


      <div className="about-services">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Overview, "overview");
