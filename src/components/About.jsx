import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="prr">
        <h2 className="about-title about-text">About</h2>
        <h3 className="about-subtitle about-text">Who I Am</h3>
        <p className="about-paragraph about-text">
          I'm a passionate developer with a focus on creating efficient, scalable, and visually appealing web applications. With experience in various technologies, I'm dedicated to continuous learning and innovation.
        </p>
      </div>
      {/* New prr2 div */}
      <div className="prr2">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-linkedin" title="LinkedIn"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-github" title="GitHub"></i>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-twitter" title="Twitter"></i>
        </a>
        <a href="https://mok.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fas fa-folder-open" title="Portfolio"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
