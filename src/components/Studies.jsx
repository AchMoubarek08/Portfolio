import React from 'react';
import Card from './Card';
import inceptionImage from '/src/inception.png'
import webservImage from '/src/nginx.jpg'
import cubeImage from '/src/cube.jpeg'
import trendenImage from '/src/trendenden.png'
// import bgImage from '../bg.jpg';



const Studies = () => {

  return (
    <section id="studies" className="studies-section">
        <h2 className="about-title about-text">
          42 Cursus Projects
        </h2>
        <div className="cardss">
          <Card
            img={trendenImage}
            title='Ft_Transendence'
            author='github link'
            link="https://example.com/article1" />
          <Card
            img={webservImage}
            title='Webserv'
            author='github link'
            link="https://example.com/article2" 
            />
          <Card
            img={cubeImage}
            title='Cube3D'
            author='github link'
            link="https://google.com"
             />
          <Card
            img={inceptionImage}
            title='inception'
            author='github link'
            link="https://pp.com/" 
            />
          </div>
    </section>
  );
};

export default Studies;
