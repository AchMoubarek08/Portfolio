import React from 'react';
import { useEffect, useRef } from 'react';
// import Feature from './Feature';

const abouut = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && containerRef.current) {
          containerRef.current.classList.add('animate');
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="About" className="about-section" ref={containerRef}>
      <h2 className="about-title about-text">About</h2>
      <h3 className="about-subtitle about-text">Who I Am</h3>
      <p className="about-paragraph about-text">
        I'm a passionate developer with a focus on creating efficient, scalable, and visually appealing web applications. With experience in various technologies, I'm dedicated to continuous learning and innovation.
      </p>
    </section>
  );
};


export default abouut;