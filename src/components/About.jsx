import React, { useLayoutEffect, useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          titleRef.current.classList.add('animate');
          subtitleRef.current.classList.add('animate');
          paragraphRef.current.classList.add('animate');
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
    <section id="About" className="section about-section" ref={containerRef}>
      <h2 ref={titleRef} className="about-title about-text">About</h2>
      <h3 ref={subtitleRef} className="about-subtitle about-text">Who I Am</h3>
      <p ref={paragraphRef} className="about-paragraph about-text">
        I'm a passionate developer with a focus on creating efficient, scalable, and visually appealing web applications. With experience in various technologies, I'm dedicated to continuous learning and innovation.
      </p>
    </section>
  );
};

export default About;
