import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://i0.wp.com/allislandpetsupplies.com/wp-content/uploads/2018/12/bernese-mountain-dog-in-swiss-alps-mountain-web-header.jpg?w=1280&ssl=1',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://i0.wp.com/allislandpetsupplies.com/wp-content/uploads/2018/12/bernese-mountain-dog-in-swiss-alps-mountain-web-header.jpg?w=1280&ssl=1',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://i0.wp.com/allislandpetsupplies.com/wp-content/uploads/2018/12/bernese-mountain-dog-in-swiss-alps-mountain-web-header.jpg?w=1280&ssl=1',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;