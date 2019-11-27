import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Askals_or_aspins_are_mongrel_dogs_in_the_Philippines.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Askals_or_aspins_are_mongrel_dogs_in_the_Philippines.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Askals_or_aspins_are_mongrel_dogs_in_the_Philippines.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;