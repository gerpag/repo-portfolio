import {translate}  from '../i18n';
import fastDeliveryImage from "../assets/images/FastDelivery.jpg"

interface GalleryImage {
  src: string;
  captionKey: string; 
  isHalfWidth: boolean;
}

interface Repository {
  front: string;
  back: string;
}

interface ProjectDetail {
  titleKey: string; 
  subTitleKey?: string; 
  descriptionKey: string; 
  deploy?: string; 
  image: string; 
  demoVideo?: string; 
  details: string[]; 
  galleryImages: GalleryImage[]; 
  technologies: string[]; 
  repository: Repository; 
  contribution?: string; 
  link?: string; 
}

interface Project {
  titleKey: string; 
  image: string; 
  link: string; 
}


const projectsDetail: ProjectDetail[] = [
  {
    titleKey: 'projectsDetail.fastDelivery.title',
    subTitleKey: 'projectsDetail.fastDelivery.subTitle',
    descriptionKey: 'projectsDetail.fastDelivery.description',
    deploy: '',
    image: '../assets/images/FastDelivery.jpg',
    demoVideo: '',
    details: [
      translate('projectsDetail.fastDelivery.detail1'),
      translate('projectsDetail.fastDelivery.detail2'),
      translate('projectsDetail.fastDelivery.detail3'),
    ],
    galleryImages: [
      { src: '/assets/images/fast1.png', captionKey: 'projectsDetail.fastDelivery.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/fast2.png', captionKey: 'projectsDetail.fastDelivery.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'NodeJS', 'Express', 'MongoDB'],
    repository: { front: 'https://github.com/user/fast-delivery-frontend', back: 'https://github.com/user/fast-delivery-backend' },
    contribution: '',
  },
  {
    titleKey: 'projectsDetail.polirubro.title',
    subTitleKey: 'projectsDetail.polirubro.subTitle',
    descriptionKey: 'projectsDetail.polirubro.description',
    deploy: '',
    image: '../assets/images/polirubro.png',
    demoVideo: '/assets/videos/polirubro.webm',
    details: [
      translate('projectsDetail.polirubro.detail1'),
      translate('projectsDetail.polirubro.detail2'),
    ],
    galleryImages: [
      { src: '/assets/images/polirubro-gal/BOLSA-PLÁSTICO-ESTAMPADA IKEA-AZUL-NO-NO.jpg', captionKey: 'projectsDetail.polirubro.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/polirubro-gal/BOLSO PLAYERO-PLÁSTICO-RAYAS-BLANCO.NARANJA-NO-NO.jpg', captionKey: 'projectsDetail.polirubro.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'TailwindCSS', 'Express', 'JWT', 'MongoDB', 'Docker'],
    repository: { front: 'https://github.com/user/polirubro-frontend', back: 'https://github.com/user/polirubro-backend' },
    contribution: '',
  },
  {
    titleKey: 'projectsDetail.houseOfDev.title',
    subTitleKey: 'projectsDetail.houseOfDev.subTitle',
    descriptionKey: 'projectsDetail.houseOfDev.description',
    deploy: '',
    image: '../assets/images/HouseOfDev.png',
    demoVideo: '',
    details: [
      translate('projectsDetail.houseOfDev.detail1'),
      translate('projectsDetail.houseOfDev.detail2'),
      translate('projectsDetail.houseOfDev.detail3'),
      translate('projectsDetail.houseOfDev.detail4'),
      translate('projectsDetail.houseOfDev.detail5'),
      translate('projectsDetail.houseOfDev.detail6'),
      translate('projectsDetail.houseOfDev.detail7'),
      translate('projectsDetail.houseOfDev.detail8'),
      translate('projectsDetail.houseOfDev.detail9'),
    ],
    galleryImages: [
      { src: '/assets/images/house1.png', captionKey: 'projectsDetail.houseOfDev.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/house2.png', captionKey: 'projectsDetail.houseOfDev.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'Redux', 'TailwindCSS', 'Express', 'Sequelize', 'PostgreSQL', 'JWT', 'NodeMailer'],
    repository: { front: 'https://github.com/user/house-of-dev-frontend', back: 'https://github.com/user/house-of-dev-backend' },
    contribution: '',
  },
  {
    titleKey: 'projectsDetail.tmdba.title',
    subTitleKey: 'projectsDetail.tmdba.subTitle',
    descriptionKey: 'projectsDetail.tmdba.description',
    deploy: '',
    image: '../assets/images/TMDB.jpeg',
    demoVideo: '/assets/videos/tmdba.mp4',
    details: [
      translate('projectsDetail.tmdba.detail1'),
      translate('projectsDetail.tmdba.detail2'),
      translate('projectsDetail.tmdba.detail3'),
      translate('projectsDetail.tmdba.detail4'),
      translate('projectsDetail.tmdba.detail5'),
    ],
    galleryImages: [
      { src: '/assets/images/tmdb1.png', captionKey: 'projectsDetail.tmdba.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/tmdb2.png', captionKey: 'projectsDetail.tmdba.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'Redux', 'Express', 'JWT', 'NodeJS'],
    repository: { front: 'https://github.com/user/tmdba-frontend', back: 'https://github.com/user/tmdba-backend' },
    contribution: '',
  },
  {
    titleKey: 'projectsDetail.portfolio.title',
    subTitleKey: 'projectsDetail.portfolio.subTitle',
    descriptionKey: 'projectsDetail.portfolio.description',
    deploy: '',
    image: '../assets/images/Portfolio.png',
    demoVideo: '',
    details: [
      translate('projectsDetail.portfolio.detail1'),
      translate('projectsDetail.portfolio.detail2'),
      translate('projectsDetail.portfolio.detail3'),
      translate('projectsDetail.portfolio.detail4'),
    ],
    galleryImages: [
      { src: '/assets/images/portfolio1.png', captionKey: 'projectsDetail.portfolio.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/portfolio2.png', captionKey: 'projectsDetail.portfolio.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'Vite', 'CSS', 'NodeJS', 'Express', 'MongoDB', 'Docker'],
    repository: { front: 'https://github.com/user/portfolio-frontend', back: '' },
    contribution: '',
  },
];

const projects: Project[] = [
  {
    titleKey: 'projects.fastDelivery.title',
    image: fastDeliveryImage,
    link: '/project/fast-delivery-app',
  },
  {
    titleKey: 'projects.polirubro.title',
    image: '../assets/images/polirubro.png',
    link: '/project/polirubro-props',
  },
  {
    titleKey: 'projects.portfolio.title',
    image: '../assets/images/Portfolio.png',
    link: '/project/portfolio',
  },
  {
    titleKey: 'projects.moreProjects.title',
    image: '../assets/images/more-projects.jpg',
    link: '/more-projects',
  },
];

const moreProjects: Project[] = [
  {
    titleKey: 'moreProjects.houseOfDev.title',
    image: '/assets/images/HouseOfDev.png',
    link: '/more-projects/house-of-dev',
  },
  {
    titleKey: 'moreProjects.tmdba.title',
    image: '/assets/images/TMDB.jpeg',
    link: '/more-projects/tmdba',
  },
  {
    titleKey: 'moreProjects.eCommerce.title',
    image: '/assets/images/e-commerce.jpg',
    link: '/more-projects/e-commerce',
  },
];

export { projectsDetail, projects, moreProjects };








/* import { translate } from '../i18n'; 

interface GalleryImage {
  src: string;
  captionKey: string; // Clave para la traducción de la leyenda de la imagen
  isHalfWidth: boolean;
}

interface Repository {
  front: string;
  back: string;
}

interface ProjectDetail {
  titleKey: string; 
  subTitleKey?: string; // Clave para la traducción del subtítulo del detalle del proyecto (opcional)
  descriptionKey: string; // Clave para la traducción de la descripción del detalle del proyecto
  deploy?: string; // Ruta de implementación (opcional)
  image: string; // Ruta de la imagen principal
  demoVideo?: string; // Ruta del video (opcional)
  details: string[]; // Detalles del proyecto
  galleryImages: GalleryImage[]; // Arreglo de imágenes de galería
  technologies: string[]; // Tecnologías utilizadas
  repository: Repository; // Repositorios front-end y back-end
  contribution?: string; // Contribución (opcional)
  link?: string; // Ruta a la página del proyecto (opcional)
}

interface Project {
  titleKey: string; // Clave para la traducción del título del proyecto
  image: string; // Ruta de la imagen
  link: string; // Ruta a la página del proyecto
}






const projectsDetail: ProjectDetail[] = [
  {
    titleKey: 'project.fastDelivery.title',
    subTitleKey: 'project.fastDelivery.subTitle',
    descriptionKey: 'project.fastDelivery.description',
    deploy: '',
    image: '/assets/images/FastDelivery.jpg',
    demoVideo: '',
    details: [
      translate('project.fastDelivery.detail1'),
      translate('project.fastDelivery.detail2'),
      translate('project.fastDelivery.detail3'),
    ],
    galleryImages: [
      { src: '/assets/images/fast1.png', captionKey: 'project.fastDelivery.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/fast2.png', captionKey: 'project.fastDelivery.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'NodeJS', 'Express', 'MongoDB'],
    repository: { front: 'https://github.com/user/fast-delivery-frontend', back: 'https://github.com/user/fast-delivery-backend' },
    contribution: '',
  },
  {
    titleKey: 'project.polirubro.title',
    subTitleKey: 'project.polirubro.subTitle',
    descriptionKey: 'project.polirubro.description',
    deploy: '',
    image: '/assets/images/polirubro.png',
    demoVideo: '/assets/videos/polirubro.webm',
    details: [
      translate('project.polirubro.detail1'),
      translate('project.polirubro.detail2'),
    ],
    galleryImages: [
      { src: '/assets/images/polirubro-gal/BOLSA-PLÁSTICO-ESTAMPADA IKEA-AZUL-NO-NO.jpg', captionKey: 'project.polirubro.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/polirubro-gal/BOLSO PLAYERO-PLÁSTICO-RAYAS-BLANCO.NARANJA-NO-NO.jpg', captionKey: 'project.polirubro.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'TailwindCSS', 'Express', 'JWT', 'MongoDB', 'Docker'],
    repository: { front: 'https://github.com/user/polirubro-frontend', back: 'https://github.com/user/polirubro-backend' },
    contribution: '',
  },
  {
    titleKey: 'project.houseOfDev.title',
    subTitleKey: 'project.houseOfDev.subTitle',
    descriptionKey: 'project.houseOfDev.description',
    deploy: '',
    image: '/assets/images/HouseOfDev.png',
    demoVideo: '',
    details: [
      translate('project.houseOfDev.detail1'),
      translate('project.houseOfDev.detail2'),
      translate('project.houseOfDev.detail3'),
      translate('project.houseOfDev.detail4'),
      translate('project.houseOfDev.detail5'),
      translate('project.houseOfDev.detail6'),
      translate('project.houseOfDev.detail7'),
      translate('project.houseOfDev.detail8'),
      translate('project.houseOfDev.detail9'),
    ],
    galleryImages: [
      { src: '/assets/images/house1.png', captionKey: 'project.houseOfDev.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/house2.png', captionKey: 'project.houseOfDev.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'Redux', 'TailwindCSS', 'Express', 'Sequelize', 'PostgreSQL', 'JWT', 'NodeMailer'],
    repository: { front: 'https://github.com/user/house-of-dev-frontend', back: 'https://github.com/user/house-of-dev-backend' },
    contribution: '',
  },
  {
    titleKey: 'project.tmdba.title',
    subTitleKey: 'project.tmdba.subTitle',
    descriptionKey: 'project.tmdba.description',
    deploy: '',
    image: '/assets/images/TMDB.jpeg',
    demoVideo: '/assets/videos/tmdba.mp4',
    details: [
      translate('project.tmdba.detail1'),
      translate('project.tmdba.detail2'),
      translate('project.tmdba.detail3'),
      translate('project.tmdba.detail4'),
      translate('project.tmdba.detail5'),
    ],
    galleryImages: [
      { src: '/assets/images/tmdb1.png', captionKey: 'project.tmdba.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/tmdb2.png', captionKey: 'project.tmdba.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'Redux', 'Express', 'JWT', 'NodeJS'],
    repository: { front: 'https://github.com/user/tmdba-frontend', back: 'https://github.com/user/tmdba-backend' },
    contribution: '',
  },
  {
    titleKey: 'project.portfolio.title',
    subTitleKey: 'project.portfolio.subTitle',
    descriptionKey: 'project.portfolio.description',
    deploy: '',
    image: '/assets/images/Portfolio.png',
    demoVideo: '',
    details: [
      translate('project.portfolio.detail1'),
      translate('project.portfolio.detail2'),
      translate('project.portfolio.detail3'),
      translate('project.portfolio.detail4'),
    ],
    galleryImages: [
      { src: '/assets/images/portfolio1.png', captionKey: 'project.portfolio.galleryImage1.caption', isHalfWidth: true },
      { src: '/assets/images/portfolio2.png', captionKey: 'project.portfolio.galleryImage2.caption', isHalfWidth: false },
    ],
    technologies: ['React', 'Vite', 'CSS', 'NodeJS', 'Express', 'MongoDB', 'Docker'],
    repository: { front: 'https://github.com/user/portfolio-frontend', back: '' },
    contribution: '',
  },
];



const projects: Project[] = [
  {
    titleKey: 'Delivery App',
    image: '../assets/images/FastDelivery.jpg',
    link: '/project/fast-delivery-app',
  },
  {
    titleKey: 'Digital Catalog',
    image: '../assets/images/polirubro.png',
    link: '/project/polirubro-props',
  },
  {
    titleKey: 'Portfolio',
    image: '../assets/images/Portfolio.png',
    link: '/project/portfolio',
  },
  {
    titleKey: 'moreProjects.moreProjects.title',
    image: '../assets/images/more-projects.jpg',
    link: '/more-projects',
  },
];

const moreProjects: Project[] = [
  {
    titleKey: 'moreProjects.houseOfDev.title',
    image: '/assets/images/HouseOfDev.png',
    link: '/more-projects/house-of-dev',
  },
  {
    titleKey: 'moreProjects.tmdba.title',
    image: '/assets/images/TMDB.jpeg',
    link: '/more-projects/tmdba',
  },
  {
    titleKey: 'moreProjects.eCommerce.title',
    image: '/assets/images/e-commerce.jpg',
    link: '/more-projects/e-commerce',
  },
];





export { projectsDetail, projects, moreProjects };


 */






/* 
import fastDeliveryImage from '../assets/images/FastDelivery.jpg';
import houseOfDevImage from '../assets/images/HouseOfDev.png';
import polirubroImage from '../assets/images/polirubro.png';
import polirubroVideo from '../assets/videos/polirubro.webm';
import polirubroGal1 from "../assets/images/polirubro-gal/BOLSA-PLÁSTICO-ESTAMPADA IKEA-AZUL-NO-NO.jpg";
import polirubroGal2 from "../assets/images/polirubro-gal/BOLSO PLAYERO-PLÁSTICO-RAYAS-BLANCO.NARANJA-NO-NO.jpg";
import tmdbImage from "../assets/images/TMDB.jpeg"
import portfolio from "../assets/images/Portfolio.png"

import moreImage from '../assets/images/moreProjects.png';



interface GalleryImage {
  src: string;
  caption: string;
  isHalfWidth: boolean;
}

interface Repository {
  front: string;
  back: string;
}

interface ProjectDetail {
  title: string;
  subTitle?: string;
  description: string;
  deploy?: string;
  image: string;
  demoVideo?: string;
  details: string[];
  galleryImages: GalleryImage[];
  technologies: string[];
  repository: Repository;
  contribution?: string;
  link?: string;
}

interface Project {
  title: string;
  image: string;
  link: string;
}




const projectsDetail: ProjectDetail[] = [
  {
    title: 'Fast Delivery app',
    subTitle: "Fast Delivery app es una solución integral para la gestión y monitoreo de operaciones logísticas en la última milla.",
    description: 'Diseñada específicamente para empresas con grandes flotas de repartidores, Fast Delivery proporciona una plataforma robusta para asignar, monitorear, y optimizar la distribución de paquetes en tiempo real.',
    deploy: "",
    image: fastDeliveryImage,
    demoVideo: "", 
    details: [
      'Monitoreo en Tiempo Real: Visualización en tiempo real de la ubicación de todos los repartidores, permitiendo el seguimiento constante de las rutas y entregas.',
      'Estado de Entrega: Actualización en tiempo real del estado de cada paquete, incluyendo entregado, en camino, y pendiente.',
      "Gestión de Paquetes: Los repartidores seleccionan hasta 10 paquetes diarios. Capacidad de reasignación dinámica por parte de administradores en función de cambios en la ruta, nuevas prioridades, o imprevistos."
    ],
    galleryImages: [
      { src: '../assets/images/fast1.png', caption: 'App screenshot 1', isHalfWidth: true },
      { src: '../assets/images/fast2.png', caption: 'App screenshot 2', isHalfWidth: false }
    ],
    technologies: ['React', 'NodeJS', 'Express', 'MongoDB'],
    repository: { front: 'https://github.com/user/fast-delivery-frontend', back: 'https://github.com/user/fast-delivery-backend' },
    contribution: ""
  },
  {
    title: 'Polirubro Props',
    subTitle: "Catálogo digital de imágenes ordenadas por categorías",
    description: 'Polirubro Props es un rental de utilería para cine, tv y publicidad. El objetivo de la aplicación es proporcionar a los clientes su catálogo de artículos con diferentes filtros de búsqueda.',
    deploy: "",
    image: polirubroImage,
    demoVideo: polirubroVideo,
    details: [
      'Ofrece una UX simple y efectiva para buscar y acceder a imágenes de artículos',
      'Rol de administrador habilita la opción de edición del catálogo (todas las opciones del CRUD)'
    ],
    galleryImages: [
      { src: polirubroGal1, caption: 'Store layout 1', isHalfWidth: true },
      { src: polirubroGal2, caption: 'Store layout 2', isHalfWidth: false }
    ],
    technologies: ['React', 'TailwindCSS', 'Express', 'JWT', 'MongoDB', 'Docker'],
    repository: { front: 'https://github.com/user/polirubro-frontend', back: 'https://github.com/user/polirubro-backend' },
    contribution: ""
  },

  {
    title: 'House of Dev',
    subTitle: "Plataforma comunitaria para desarrolladores",
    description: 'House of Dev es una plataforma web para una inmobiliaria, diseñada para facilitar la programación de citas para visitar propiedades. La aplicación ofrece múltiples funciones para buscar propiedades, filtrar resultados y gestionar visitas.',
    deploy: "",
    image: houseOfDevImage,
    demoVideo: "houseOfDevVideo",
    details: [
      'Búsqueda por ubicación: permite a los usuarios buscar propiedades por barrio, país y localidad.',
      'Filtros: opciones para filtrar propiedades por precio, cantidad de ambientes y categoría (departamento, PH, casa, terreno, local).',
      'Detalles de propiedad: cada propiedad muestra su nombre, dirección, descripción, precio, ubicación, imagen y disponibilidad.',
      'Lista de favoritos: los usuarios pueden agregar propiedades a una lista de favoritos, ver esta lista y remover propiedades de ella.',
      'Gestión de propiedades: los administradores pueden dar de alta, baja o modificar propiedades.',
      'Perfiles de usuario: los administradores pueden ver el perfil de cualquier usuario, incluyendo sus propiedades favoritas. Los usuarios pueden ver y editar su propio perfil.',
      'Autenticación JWT: registro, inicio de sesión y cierre de sesión con autenticación JWT.',
      'Mantenimiento de sesión: la sesión de usuario permanece abierta incluso después de cerrar el navegador o hacer un refresh.',
      'Notificaciones por correo: envío automatizado de correos electrónicos para confirmar las citas utilizando nodemailer.'
    ],
    galleryImages: [
      { src: '../assets/images/house1.png', caption: 'Community event 1', isHalfWidth: true },
      { src: '../assets/images/house2.png', caption: 'Community event 2', isHalfWidth: false }
    ],
    technologies: ['React', 'Redux', 'TailwindCSS',  'Express', 'Sequelize', 'PostgreSQL','JWT', 'NodeMailer'],
    repository: { front: 'https://github.com/user/house-of-dev-frontend', back: 'https://github.com/user/house-of-dev-backend' },
    contribution: ""
  },
  {
    title: 'TMDBA',
    subTitle: "Aplicación para gestionar y visualizar películas y series",
    description: 'TMDBA es una aplicación web diseñada para que los usuarios puedan buscar, visualizar y gestionar películas y series. Ofrece un sistema de manejo de usuarios, búsqueda avanzada y gestión de favoritos.',
    deploy: "",
    image: tmdbImage,
    demoVideo: "tmdbVideo",
    details: [
      'Manejo de usuarios: permite el registro de usuarios con ID, email, nombre y apellido.',
      'Inicio de sesión: autenticación segura y persistencia de sesión con tokens.',
      'Cerrar sesión: opción para cerrar sesión y finalizar la autenticación.',
      'Búsqueda de películas o series: permite buscar contenido y visualizar los resultados en una grilla.',
      'Detalle de películas o series: visualización detallada con nombre, descripción, imagen, entre otros.',
      'Favoritos: los usuarios pueden agregar y sacar favoritos, y ver sus favoritos en una pantalla de perfil.'
    ],
    galleryImages: [
      { src: '../assets/images/tmdb1.png', caption: 'Search results', isHalfWidth: true },
      { src: '../assets/images/tmdb2.png', caption: 'Movie details', isHalfWidth: false }
    ],
    technologies: ['React', 'Redux', 'Express', 'JWT', 'NodeJS'],
    repository: { front: 'https://github.com/user/tmdba-frontend', back: 'https://github.com/user/tmdba-backend' },
    contribution: ""
  },

  {
    title: 'Portfolio',
    subTitle: "Portafolio personal para mostrar proyectos y habilidades",
    description: 'Desarrollo de un portafolio personal utilizando React y Vite para el empaquetado rápido, CSS para el diseño y Docker para la contenedorización y despliegue.',
    deploy: "",
    image: portfolio,
    demoVideo: "",
    details: [
      'Desarrollo frontend con React y Vite para una experiencia de usuario rápida y eficiente.',
      'Estilizado con CSS para un diseño visual atractivo y responsivo.',
      'Backend desarrollado con NodeJS y Express para gestionar datos de proyectos y contacto.',
      
      'Dockerización del proyecto para un despliegue sencillo y consistente en diferentes entornos.'
    ],
    galleryImages: [
      { src: '../assets/images/portfolio1.png', caption: 'Portfolio screenshot 1', isHalfWidth: true },
      { src: '../assets/images/portfolio2.png', caption: 'Portfolio screenshot 2', isHalfWidth: false }
    ],
    technologies: ['React', 'Vite', 'CSS', 'NodeJS', 'Express', 'MongoDB', 'Docker'],
    repository: { front: 'https://github.com/user/portfolio-frontend', back: '' },
    contribution: ""
  }
  
  
];




const projects: Project[] = [
  {
    title: 'Delivery App',
    image: fastDeliveryImage,
    link: '/project/fast-delivery-app'
  },
  {
    title: 'Digital Catalog',
    image: polirubroImage,
    link: '/project/polirubro-props'
  },
  {
    title: 'Portfolio',
    image: portfolio,
    link: '/project/portfolio'
  },
  {
    title: 'More Projects',
    image: moreImage,
    link: '/more-projects' 
  }
];


const moreProjects: Project[] = [
  {
    title: 'Real Estate App',
    image: houseOfDevImage,
    link: '/more-projects/house-of-dev'
  },
  {
    title: 'TMDBA',
    image: tmdbImage,
    link: '/more-projects/tmdba'
  },
  {
    title: 'E-Commerce',
    image: 'Descripción del proyecto 3',
    link: '/more-projects/e-commerce'
  },
  
];




export  {projectsDetail, projects, moreProjects};


 */