import React from 'react';
import Card from './Card';
import inceptionImage from '/src/inception.png'
import webservImage from '/src/nginx.jpg'
import cubeImage from '/src/cube.jpeg'
import trendenImage from '/src/trendenden.png'
// import bgImage from '../bg.jpg';



const Studies = () => {

  return (
    <section id="work" className="studies-section">
        <h2 className="about-title about-text">
          42 Cursus Projects
        </h2>
        <div className="cardss">
          <Card
            img={trendenImage}
            title='Ft_Transendence'
            p='This project aims to create a comprehensive web application for gaming and social interaction, with a primary focus on Pong gameplay.'
            author='github link'
            link="https://example.com/article1" />
          <Card
            img={webservImage}
            title='Webserv'
            p='HTTP server written in C++ 98, providing non-blocking I/O, CGI support, and multiple port listening for hosting static and dynamic websites.'
            author='github link'
            link="https://example.com/article2" 
            />
          <Card
            img={cubeImage}
            title='Cube3D'
            p='This project is inspired by the world-famous Wolfenstein 3D game, which was the first FPS ever. exploring the concept of ray-casting. thekkkk'
            author='github link'
            link="https://google.com"
             />
          <Card
            img={inceptionImage}
            title='inception'
            p='HTTP server written in C++ 98, providing non-blocking I/O, CGI support, and multiple port listening for hosting static and dynamic websites.'
            author='github link'
            link="https://pp.com/" 
            />
          </div>
    </section>
  );
};

export default Studies;
