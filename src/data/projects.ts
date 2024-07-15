
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


