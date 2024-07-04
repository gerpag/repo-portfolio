import fastDeliveryImage from '../assets/images/FastDelivery.jpg';
 import houseOfDevImage from '../assets/images/HouseOfDev.png';
import polirubroImage from '../assets/images/polirubro.png';
/*import fastDeliveryVideo from '../assets/videos/fast-delivery.webm';
import houseOfDevVideo from '../assets/videos/house-of-dev.webm'; */
import polirubroVideo from '../assets/videos/polirubro.webm';
import polirubroGal1 from "../assets/images/polirubro-gal/BOLSA-PLÁSTICO-ESTAMPADA IKEA-AZUL-NO-NO.jpg"
import polirubroGal2 from "../assets/images/polirubro-gal/BOLSO PLAYERO-PLÁSTICO-RAYAS-BLANCO.NARANJA-NO-NO.jpg"


const projects = [
  {
    title: 'Fast Delivery app',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: fastDeliveryImage,
    demoVideo: "" /* fastDeliveryVideo */,
    details: [
      'Fast Delivery app is a modern...',
      'Features include fast tracking...'
    ],
    galleryImages: [
      { src: '../assets/images/fast1.png', caption: 'App screenshot 1', isHalfWidth: true },
      { src: '../assets/images/fast2.png', caption: 'App screenshot 2', isHalfWidth: false }
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    repository: { front: 'https://github.com/user/fast-delivery-frontend', back: 'https://github.com/user/fast-delivery-backend' }
  },
  {
    title: 'Polirubro props',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: polirubroImage,
    demoVideo: polirubroVideo,
    details: [
      'Polirubro props offers a wide range of...',
      'It allows for streamlined...'
    ],
    galleryImages: [
      { src: polirubroGal1, caption: 'Store layout 1', isHalfWidth: true },
      { src: polirubroGal2, caption: 'Store layout 2', isHalfWidth: false }
    ],
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    repository: { front: 'https://github.com/user/polirubro-frontend', back: 'https://github.com/user/polirubro-backend' }
  },
  {
    title: 'House of Dev',
    description: 'Elit pellentesque habitant morbi tristique senectus et netus et. Elementum tempus egestas sed sed risus pretium quam. Nibh ipsum consequat nisl vel pretium',
    image: houseOfDevImage,
    demoVideo: "" /* houseOfDevVideo */,
    details: [
      'House of Dev is a community platform...',
      'It supports collaborations...'
    ],
    galleryImages: [
      { src: '../assets/images/house1.png', caption: 'Community event 1', isHalfWidth: true },
      { src: '../assets/images/house2.png', caption: 'Community event 2', isHalfWidth: false }
    ],
    technologies: ['Angular', 'Django', 'PostgreSQL'],
    repository: { front: 'https://github.com/user/house-of-dev-frontend', back: 'https://github.com/user/house-of-dev-backend' }
  }
];

export default projects;



