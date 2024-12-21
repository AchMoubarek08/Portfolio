// import React from 'react';
import { motion } from "framer-motion";
import Card from './Card';
import AnimateSection from './AnimateSection';
import { all } from "axios";

const Studies = () => {
  const projects = [
    {
      img: '/src/inception.png',
      title: 'Inception',
      description: 'A Docker-based project implementing a complete web infrastructure with multiple services. A Docker-based project implementing a complete web infrastructure with multiple services.',
      githubLink: "https://github.com/yourusername/inception"
    },
    {
      img: '/src/nginx.jpg',
      title: 'Webserv',
      description: 'HTTP server in C++98 with non-blocking I/O, CGI support, and multiple port listening.HTTP server in C++98 with non-blocking I/O, CGI support, and multiple port listening.',
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
      description: 'Real-time multiplayer Pong game with chat',
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
          <p className="studies-subtitle">Showcasing my journey through 42&apos;s curriculum</p>
        </div>
      </AnimateSection>

      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={Number(index)}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: all }}
            transition={{
              duration: 0.6,
              delay: 0.2 + (index * 0.6),
              ease: "easeOut"
            }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Studies;
