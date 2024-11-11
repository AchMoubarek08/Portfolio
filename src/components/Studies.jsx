import React from 'react';
import Card from './Card';
// import bgImage from '../bg.jpg';



const Studies = () => {

  return (
    <section id="studies" className="studies-section">
        <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='github link'
          link="https://example.com/article1" />
        <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='github link'
          link="https://example.com/article2" />
        <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='github link'
          link="https://google.com" />
        <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='github link'
          link="https://pp.com/" />
    </section>
  );
};

export default Studies;
