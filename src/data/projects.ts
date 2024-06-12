// src/data/projects.ts
import fastDeliveryImage from '../assets/images/FastDelivery.png';
import polirubroImage from '../assets/images/polirubro.png';
import houseOfDevImage from '../assets/images/HouseOfDev.png';

const projects = [
  {
    title: 'Fast Delivery app',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: fastDeliveryImage,
    details: [
      'Fast Delivery app is a modern...',
      'Features include fast tracking...'
    ],
    galleryImages: [
      { src: '../assets/images/fast1.png', caption: 'App screenshot 1', isHalfWidth: true },
      { src: '../assets/images/fast2.png', caption: 'App screenshot 2', isHalfWidth: false }
    ]
  },
  {
    title: 'Polirubro props',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: polirubroImage,
    details: [
      'Polirubro props offers a wide range of...',
      'It allows for streamlined...'
    ],
    galleryImages: [
      { src: '../assets/images/polirubro1.png', caption: 'Store layout 1', isHalfWidth: true },
      { src: '../assets/images/polirubro2.png', caption: 'Store layout 2', isHalfWidth: false }
    ]
  },
  {
    title: 'House of Dev',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: houseOfDevImage,
    details: [
      'House of Dev is a community platform...',
      'It supports collaborations...'
    ],
    galleryImages: [
      { src: '../assets/images/house1.png', caption: 'Community event 1', isHalfWidth: true },
      { src: '../assets/images/house2.png', caption: 'Community event 2', isHalfWidth: false }
    ]
  }
];

export default projects;
