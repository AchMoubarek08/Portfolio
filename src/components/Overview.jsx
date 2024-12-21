import PropTypes from 'prop-types';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn } from "../motion";
import AnimateSection from "./AnimateSection";
// import "./About.css";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="service-card-container"
  >
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="service-card"
    >
      <div className="service-card-inner">
        <img src={icon} alt="web-development" className="service-card-icon" />
        <h3 className="service-card-title">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

const Overview = () => {
  return (
    <section className="overview-container">
      <div className="overview-content glass-effect">
        <AnimateSection
          initialOpacity={0}
          initialX={-50}
          finalOpacity={1}
          finalX={0}
          initialY={0}
          finalY={0}
          duration={0.8}
          threshold={0.2}
        >
          <div className="overview-header">
            <h2 className="overview-title">Overview</h2>
            <div className="title-line"></div>
          </div>
          
          <div className="overview-text-container">
            <p className="overview-description">
              I&apos;m a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable solutions.
            </p>
          </div>
        </AnimateSection>

        <div className="about-services">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview