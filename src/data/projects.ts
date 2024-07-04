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
    description: 'Fast Delivery app es una solución integral para la gestión y monitoreo de operaciones logísticas en la última milla. Diseñada específicamente para empresas con grandes flotas de repartidores, Fast Delivery proporciona una plataforma robusta para asignar, monitorear, y optimizar la distribución de paquetes en tiempo real.',
    image: fastDeliveryImage,
    demoVideo: "" /* fastDeliveryVideo */,
    details: [
      'Monitoreo en Tiempo Real: isualización en tiempo real de la ubicación de todos los repartidores, permitiendo el seguimiento constante de las rutas y entregas.',
      'Estado de Entrega: Actualización en tiempo real del estado de cada paquete, incluyendo entregado, en camino, y pendiente.',
      "Gestión de Paquetes: los repartidores seleccionan hasta 10 paquetes diarios. Capacidad de reasinación dinámica por parte de administradores en función de cambios en la ruta, nuevas prioridades, o imprevistos. "
      
    ],
    galleryImages: [
      { src: '../assets/images/fast1.png', caption: 'App screenshot 1', isHalfWidth: true },
      { src: '../assets/images/fast2.png', caption: 'App screenshot 2', isHalfWidth: false }
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    repository: { front: 'https://github.com/user/fast-delivery-frontend', back: 'https://github.com/user/fast-delivery-backend' }
  },
  {
    title: 'Polirubro Props',
    description: 'Rental de utilería para cine - tv - publicidad. El objetivo del sitio es mostrar su catálogo de artículos a los clientes con filtros por categoría y color.',
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
    technologies: ['FaReact', 'Tailwind CSS', 'SiExpress', "SiJsonwebtokens", "SiMongodb", "FaDocker"],
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



