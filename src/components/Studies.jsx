import React from 'react';
import { motion } from "framer-motion";
import Card from './Card';
import AnimateSection from './AnimateSection';

const Studies = () => {
  const projects = [
    {
      img: '/src/inception.png',
      title: 'Inception',
      description: 'A Docker-based project implementing a complete web infrastructure with multiple services.',
      githubLink: "https://github.com/yourusername/inception"
    },
    {
      img: '/src/nginx.jpg',
      title: 'Webserv',
      description: 'HTTP server in C++98 with non-blocking I/O, CGI support, and multiple port listening.',
      githubLink: "https://github.com/yourusername/webserv"
    },
    {
      img: '/src/cube.jpeg',
      title: 'Cube3D',
      description: 'A Wolfenstein 3D-inspired game engine using raycasting techniques for 3D rendering.',
      githubLink: "https://github.com/yourusername/cube3d"
    },
    {
      img: '/src/trendenden.png',
      title: 'Ft_Transcendence',
      description: 'Real-time multiplayer Pong game with chat, authentication, and matchmaking.',
      githubLink: "https://github.com/yourusername/ft_transcendence"
    }
  ];

  return (
    <section id="studies" className="studies-container">
      <AnimateSection
        initialOpacity={0}
        initialY={50}
        finalOpacity={1}
        finalY={0}
        duration={0.8}
        threshold={0.2}
      >
        <div className="studies-header glass-effect">
          <h2 className="studies-title">Featured Projects</h2>
          <p className="studies-subtitle">Showcasing my journey through 42's curriculum</p>
        </div>
      </AnimateSection>

      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <AnimateSection
            key={index}
            initialOpacity={0}
            initialY={50}
            finalOpacity={1}
            finalY={0}
            duration={0.5}
            delay={index * 0.1}
            threshold={0.2}
          >
            <Card {...project} />
          </AnimateSection>
        ))}
      </motion.div>
    </section>
  );
};

export default Studies;
