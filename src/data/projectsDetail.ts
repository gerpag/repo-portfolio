import fastDeliveryImage from '../assets/images/FastDelivery.jpg';
import houseOfDevImage from '../assets/images/HouseOfDev.png';
import polirubroImage from '../assets/images/polirubro.png';
import polirubroVideo from '../assets/videos/polirubro.webm';
import polirubroGal1 from "../assets/images/polirubro-gal/BOLSA-PLÁSTICO-ESTAMPADA IKEA-AZUL-NO-NO.jpg";
import polirubroGal2 from "../assets/images/polirubro-gal/BOLSO PLAYERO-PLÁSTICO-RAYAS-BLANCO.NARANJA-NO-NO.jpg";
import tmdbImage from "../assets/images/TMDB.jpeg";
import portfolio from "../assets/images/Portfolio.png";
import eCommerceStore from "../assets/images/e-commerce.jpg"


interface GalleryImage {
  src: string;
  caption: string;
  isHalfWidth: boolean;
}

interface Repository {
  front: string;
  back: string;
  repo: string;
}

interface ProjectDetail {
  title: string;
  subTitle?: string;
  description: string;
  deploy?: string;
  image: string;
  demoVideo?: string;
  details: string[];
  galleryImages?: GalleryImage[];
  technologies: string[];
  repository: Repository;
  contribution?: string;
  link?: string;
}



const projectsDetail: Record<string, ProjectDetail[]> = {
  en: [
    {
      title: 'Fast Delivery app',
      subTitle: "Fast Delivery app is a comprehensive solution for last-mile logistics management and monitoring.",
      description: 'Designed specifically for companies with large fleets of couriers, Fast Delivery provides a robust platform for assigning, monitoring, and optimizing package distribution in real time.',
      deploy: "",
      image: fastDeliveryImage,
      demoVideo: "https://www.youtube.com/embed/AXpDK32Ww3s?si=A8-V5jlyXGDaasDf", 
      details: [
        'Real-Time Monitoring: Real-time visualization of all couriers’ locations, allowing constant tracking of routes and deliveries.',
        'Delivery Status: Real-time updates on each package’s status, including delivered, in transit, and pending.',
        "Package Management: Couriers select up to 10 packages per day. Dynamic reassignment capability by administrators based on route changes, new priorities, or unforeseen events."
      ],
      galleryImages: [
        { src: '', caption: 'App screenshot 1', isHalfWidth: true },
        { src: '../assets/images/fast2.png', caption: 'App screenshot 2', isHalfWidth: false }
      ],
      technologies: ['React', 'NodeJS', 'Express', 'MongoDB'],
      repository: { repo:"",  front: 'https://github.com/user/fast-delivery-frontend', back: 'https://github.com/user/fast-delivery-backend' },
      contribution: ""
    },
    {
      title: 'Polirubro Props',
      subTitle: "Digital catalog of images sorted by categories",
      description: 'Polirubro Props is a prop rental service for film, TV, and advertising. The goal of the application is to provide clients with a catalog of items with various search filters.',
      deploy: "",
      image: polirubroImage,
      demoVideo: polirubroVideo,
      details: [
        'Provides a simple and effective UX for searching and accessing item images.',
        'Administrator role enables catalog editing (all CRUD options)'
      ],
      galleryImages: [
        { src: "", caption: 'Store layout 1', isHalfWidth: true },
        { src: "", caption: 'Store layout 2', isHalfWidth: false }
      ],
      technologies: ['React', 'TailwindCSS', 'Express', 'JWT', 'MongoDB', 'Docker'],
      repository: {repo:"", front: 'https://github.com/user/polirubro-frontend', back: 'https://github.com/user/polirubro-backend' },
      contribution: ""
    },
    {
      title: 'House of Dev',
      subTitle: "Community platform for developers",
      description: 'House of Dev is a web platform for a real estate company, designed to facilitate appointment scheduling for property visits. The application offers multiple features to search for properties, filter results, and manage visits.',
      deploy: "",
      image: houseOfDevImage,
      demoVideo: "houseOfDevVideo",
      details: [
        'Location Search: Allows users to search for properties by neighborhood, country, and locality.',
        'Filters: Options to filter properties by price, number of rooms, and category (apartment, PH, house, land, local).',
        'Property Details: Each property shows its name, address, description, price, location, image, and availability.',
        'Favorites List: Users can add properties to a favorites list, view this list, and remove properties from it.',
        'Property Management: Administrators can add, delete, or modify properties.',
        'User Profiles: Administrators can view any user’s profile, including their favorite properties. Users can view and edit their own profile.',
        'JWT Authentication: Registration, login, and logout with JWT authentication.',
        'Session Maintenance: User session remains open even after closing the browser or refreshing the page.',
        'Email Notifications: Automated email sending to confirm appointments using Nodemailer.'
      ],
      galleryImages: [
        { src: '', caption: 'Community event 1', isHalfWidth: true },
        { src: '../assets/images/house2.png', caption: 'Community event 2', isHalfWidth: false }
      ],
      technologies: ['React', 'Redux', 'MUI', 'Express', 'Sequelize', 'PostgreSQL', 'JWT', 'NodeMailer'],
      repository: { repo:"https://github.com/gerpag/Real-Estate-App", front: '', back: '' },
      contribution: ""
    },
    {
      title: 'TMDBA',
      subTitle: "Application to manage and visualize movies and series",
      description: 'TMDBA is a web application designed for users to search, view, and manage movies and series. It offers a user management system, advanced search, and favorites management.',
      deploy: "",
      image: tmdbImage,
      demoVideo: "tmdbVideo",
      details: [
        'User Management: Allows user registration with ID, email, first name, and last name.',
        'Login: Secure authentication and session persistence with tokens.',
        'Logout: Option to log out and end authentication.',
        'Movie/Series Search: Allows searching for content and viewing results in a grid.',
        'Movie/Series Details: Detailed view with name, description, image, and more.',
        'Favorites: Users can add and remove favorites and view their favorites on a profile screen.'
      ],
      galleryImages: [
        { src: '', caption: 'Search results', isHalfWidth: true },
        { src: '../assets/images/tmdb2.png', caption: 'Movie details', isHalfWidth: false }
      ],
      technologies: ['React', 'Redux', 'Express', 'JWT', 'NodeJS'],
      repository: { repo:"", front: 'https://github.com/user/tmdba-frontend', back: 'https://github.com/user/tmdba-backend' },
      contribution: ""
    },
    {
      title: 'Portfolio',
      subTitle: "Personal portfolio to showcase projects and skills",
      description: 'Development of a personal portfolio using React and Vite for fast bundling, CSS for design, and Docker for containerization and deployment.',
      deploy: "",
      image: portfolio,
      demoVideo: "",
      details: [
        'Frontend development with React and Vite for a fast and efficient user experience.',
        'Styled with CSS for an attractive and responsive visual design.',
        'Backend developed with NodeJS and Express to manage project and contact data.',
        'Dockerization of the project for easy and consistent deployment across different environments.'
      ],
      galleryImages: [
        { src: '', caption: 'Portfolio screenshot 1', isHalfWidth: true },
        { src: '../assets/images/portfolio2.png', caption: 'Portfolio screenshot 2', isHalfWidth: false }
      ],
      technologies: ['React', 'Vite', 'CSS', 'NodeJS', 'Express', 'MongoDB', 'Docker'],
      repository: { repo:"https://github.com/user/portfolio-frontend", front: '', back: '' },
      contribution: ""
    },
    {
      title: 'E-Commerce',
      subTitle: "E-commerce platform for selling products online",
      description: 'Development of an online store using React for the frontend, NodeJS and Express for the backend, and MongoDB for data management. Includes payment integration and an inventory management system.',
      deploy: "",
      image: eCommerceStore,
      demoVideo: "",
      details: [
        'Frontend development with React for a modern and dynamic user interface.',
        'Backend built with NodeJS and Express to handle transactions, user authentication, and product management.',
        'MongoDB database for storing product, user, and order information.',
        'Integration of payment gateways such as Stripe or PayPal for secure payment processing.',
        'Inventory management system to update and control product stock.',
        'Implementation of authentication and authorization for a secure user experience.'
      ],
      galleryImages: [
        { src: '', caption: 'Screenshot of the homepage', isHalfWidth: false },
        { src: '../assets/images/ecommerce2.png', caption: 'Screenshot of the shopping cart', isHalfWidth: true },
        { src: '../assets/images/ecommerce3.png', caption: 'Screenshot of the product page', isHalfWidth: true }
      ],
      technologies: ['React', 'NodeJS', 'Express', 'MongoDB'],
      repository: { repo: "https://github.com/gerpag/E-commerce", front: '', back: '' },
      contribution: ""
    }
    
  ],
  es: [
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
        { src: '', caption: 'Captura de pantalla de la app 1', isHalfWidth: true },
        { src: '../assets/images/fast2.png', caption: 'Captura de pantalla de la app 2', isHalfWidth: false }
      ],
      technologies: ['React', 'NodeJS', 'Express', 'MongoDB'],
      repository: {repo: "", front: 'https://github.com/user/fast-delivery-frontend', back: 'https://github.com/user/fast-delivery-backend' },
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
        'Ofrece una UX simple y efectiva para buscar y acceder a imágenes de artículos.',
        'Rol de administrador habilita la opción de edición del catálogo (todas las opciones del CRUD)'
      ],
      galleryImages: [
        { src: "", caption: 'Diseño de la tienda 1', isHalfWidth: true },
        { src: "", caption: 'Diseño de la tienda 2', isHalfWidth: false }
      ],
      technologies: ['React', 'TailwindCSS', 'Express', 'JWT', 'MongoDB', 'Docker'],
      repository: { repo:"", front: 'https://github.com/user/polirubro-frontend', back: 'https://github.com/user/polirubro-backend' },
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
        { src: '', caption: 'Evento comunitario 1', isHalfWidth: true },
        { src: '../assets/images/house2.png', caption: 'Evento comunitario 2', isHalfWidth: false }
      ],
      technologies: ['React', 'Redux', 'TailwindCSS', 'Express', 'Sequelize', 'PostgreSQL', 'JWT', 'NodeMailer'],
      repository: { repo:"https://github.com/gerpag/Real-Estate-App", front: '', back: ''},
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
        { src: '', caption: 'Resultados de búsqueda', isHalfWidth: true },
        { src: '../assets/images/tmdb2.png', caption: 'Detalles de la película', isHalfWidth: false }
      ],
      technologies: ['React', 'Redux', 'Express', 'JWT', 'NodeJS'],
      repository: { repo:"", front: 'https://github.com/user/tmdba-frontend', back: 'https://github.com/user/tmdba-backend' },
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
        { src: '', caption: 'Captura de pantalla del portafolio 1', isHalfWidth: true },
        { src: '../assets/images/portfolio2.png', caption: 'Captura de pantalla del portafolio 2', isHalfWidth: false }
      ],
      technologies: ['React', 'Vite', 'CSS', 'NodeJS', 'Express', 'MongoDB', 'Docker'],
      repository: { repo:"https://github.com/user/portfolio-frontend", front: '', back: '' },
      contribution: ""
    },
    {
      title: 'E-Commerce',
      subTitle: "Plataforma de comercio electrónico para vender productos en línea",
      description: 'Desarrollo de una tienda en línea utilizando React para el frontend, NodeJS y Express para el backend, y MongoDB para la gestión de datos. Se incluye integración de pagos y un sistema de gestión de inventario.',
      deploy: "",
      image: eCommerceStore,
      demoVideo: "",
      details: [
        'Desarrollo frontend con React para una interfaz de usuario moderna y dinámica.',
        'Backend construido con NodeJS y Express para manejar transacciones, autentificación de usuarios y gestión de productos.',
        'Base de datos MongoDB para almacenar información de productos, usuarios y pedidos.',
        'Integración de pasarelas de pago como Stripe o PayPal para procesamiento seguro de pagos.',
        'Sistema de gestión de inventario para actualizar y controlar el stock de productos.',
        'Implementación de autenticación y autorización para una experiencia de usuario segura.'
      ],
      galleryImages: [
        { src: '', caption: 'Captura de pantalla de la página de inicio', isHalfWidth: false },
        { src: '../assets/images/ecommerce2.png', caption: 'Captura de pantalla del carrito de compras', isHalfWidth: true },
        { src: '../assets/images/ecommerce3.png', caption: 'Captura de pantalla de la página de producto', isHalfWidth: true }
      ],
      technologies: ['React', 'NodeJS', 'Express', 'PostgreSQL'],
      repository: { repo: "https://github.com/gerpag/E-commerce", front: '', back: '' },
      contribution: ""
    }
  ]
};



export {projectsDetail};
