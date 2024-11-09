import React from 'react';
import bgImage from '../bg.jpg';



const Studies = () => {
  // Array of project images and titles for demonstration
  const projects = [
    { id: 1, src: bgImage, alt: 'Project 1' },
    { id: 2, src: bgImage, alt: 'Project 2' },
    { id: 3, src: bgImage, alt: 'Project 3' },
    { id: 4, src: bgImage, alt: 'Project 4' },
    { id: 5, src: bgImage, alt: 'Project 5' },
    { id: 6, src: bgImage, alt: 'Project 6' },
  ];

  return (
    <section id="studies" className="section studies-section">
      <div className="left-studies">
        {projects.slice(0, 3).map((project) => (
          <img key={project.id} src={project.src} alt={project.alt} className="study-image" />
        ))}
      </div>
      <div className="right-studies">
        {projects.slice(3).map((project) => (
          <img key={project.id} src={project.src} alt={project.alt} className="study-image" />
        ))}
      </div>
    </section>
  );
};

export default Studies;
