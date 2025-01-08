import React from 'react';
import AnimateSection from './AnimateSection';
import { FaGithub, FaLinkedin, FaTwitter, FaFolder } from 'react-icons/fa';
import TechStack3D from './TechStack3D';

const About = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com",
      label: "Twitter"
    },
    {
      icon: <FaFolder />,
      url: "https://mok.com",
      label: "Portfolio"
    }
  ];

  return (
    <section id="about" className="about-container">
      <div className="about-content glass-effect">
        <AnimateSection
          initialOpacity={0}
          initialX={-50}
          finalOpacity={1}
          finalX={0}
          initialY={0}
          finalY={0}
          duration={0.8}
          threshold={0.2}
          triggerOnce={true}
        >
          <div className="about-header">
            <h2 className="about-title">About Me</h2>
            <div className="title-line"></div>
          </div>
          
          <div className="about-text-container">
            <p className="about-description">
              I'm a passionate developer with a focus on creating efficient, scalable, and visually appealing web applications. With experience in various technologies, I'm dedicated to continuous learning and innovation.
            </p>
            
            <div className="tech-stack">
              <TechStack3D />
            </div>
          </div>
        </AnimateSection>

        <AnimateSection
          initialOpacity={0}
          initialY={30}
          finalOpacity={1}
          finalY={0}
          initialX={0}
          finalX={0}
          duration={0.8}
          delay={0.3}
          threshold={0.2}
          triggerOnce={true}
        >
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </AnimateSection>
      </div>
    </section>
  );
};

export default About;
