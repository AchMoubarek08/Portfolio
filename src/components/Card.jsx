import React from 'react';
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';

const Card = ({ img, title, description, githubLink }) => {
  return (
    <motion.div 
      className="project-card glass-effect"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="card-image-container">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <motion.a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
          <span>View on GitHub</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Card;
  