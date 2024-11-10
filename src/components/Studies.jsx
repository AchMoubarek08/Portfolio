import React from 'react';
import Card from './Card';
// import bgImage from '../bg.jpg';



const Studies = () => {

  return (
    <section id="studies" className="section studies-section">
        <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
        <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
        <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
    </section>
  );
};

export default Studies;
