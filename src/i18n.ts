interface Translations {
    [key: string]: string;
  }

  
  
  const translations: Record<string, Translations> = {
    en: {
      // Navbar
      'navbar.portfolio': 'Portfolio',
      'navbar.projects': 'Projects',
      'navbar.background': 'Background',
      'navbar.contact': 'Contact',
  
      // Encabezado principal
      'header.mainTitle': "Hey, I’m Germinal.",
      'header.profession': "I’m a full stack developer.",
      'header.interests': 'I’m interested in the intersection of technology and philosophy.',
      'header.training': 'I studied full stack web development at Henry Bootcamp.',
  
      // Proyectos
      'projectsSection.title': 'Projects',
      'projectsSection.readMore': "Read more",
     
  
      // Detalles de los proyectos
      'projectsDetail.fastDelivery.title': 'Fast Delivery App',
      'projectsDetail.fastDelivery.subTitle': 'A scalable and responsive web application',
      'projectsDetail.fastDelivery.description': 'Fast Delivery App is a full-stack application that allows users to...',
      'projectsDetail.fastDelivery.detail1': 'Designed and implemented a responsive user interface using React.',
      'projectsDetail.fastDelivery.detail2': 'Built a RESTful API with Node.js and Express.',
      'projectsDetail.fastDelivery.detail3': 'Integrated MongoDB for data persistence.',
      'projectsDetail.fastDelivery.galleryImage1.caption': 'Login page',
      'projectsDetail.fastDelivery.galleryImage2.caption': 'Dashboard',
  
      'projectsDetail.polirubro.title': 'Polirubro Props',
      'projectsDetail.polirubro.subTitle': 'An e-commerce web application',
      'projectsDetail.polirubro.description': 'Polirubro Props is an e-commerce platform developed with...',
      'projectsDetail.polirubro.detail1': 'Implemented the front-end using React and TailwindCSS.',
      'projectsDetail.polirubro.detail2': 'Configured authentication with JWT and Node.js.',
      'projectsDetail.polirubro.galleryImage1.caption': 'Product listing page',
      'projectsDetail.polirubro.galleryImage2.caption': 'Shopping cart page',
  
      'projectsDetail.houseOfDev.title': 'House of Dev',
      'projectsDetail.houseOfDev.subTitle': 'A developer community platform',
      'projectsDetail.houseOfDev.description': 'House of Dev is a platform that connects developers...',
      'projectsDetail.houseOfDev.detail1': 'Used React and Redux for state management.',
      'projectsDetail.houseOfDev.detail2': 'Built RESTful services with Express and Sequelize.',
      'projectsDetail.houseOfDev.detail3': 'Managed data with PostgreSQL.',
      'projectsDetail.houseOfDev.detail4': 'Implemented JWT authentication.',
      'projectsDetail.houseOfDev.detail5': 'Integrated NodeMailer for email notifications.',
      'projectsDetail.houseOfDev.detail6': 'Deployed the application using Docker.',
  
      'projectsDetail.tmdba.title': 'TMDB App',
      'projectsDetail.tmdba.subTitle': 'A movie database application',
      'projectsDetail.tmdba.description': 'TMDB App is a web application that allows users to search for movies...',
      'projectsDetail.tmdba.detail1': 'Developed the front-end with React and Redux.',
      'projectsDetail.tmdba.detail2': 'Created RESTful APIs using Express.',
      'projectsDetail.tmdba.detail3': 'Implemented JWT for secure authentication.',
      'projectsDetail.tmdba.detail4': 'Utilized NodeJS for server-side operations.',
      'projectsDetail.tmdba.detail5': 'Used MongoDB for database management.',
      'projectsDetail.tmdba.galleryImage1.caption': 'Search results page',
      'projectsDetail.tmdba.galleryImage2.caption': 'Movie details page',
  
      'projectsDetail.portfolio.title': 'Portfolio',
      'projectsDetail.portfolio.subTitle': 'My personal portfolio website',
      'projectsDetail.portfolio.description': 'This portfolio showcases my projects and skills...',
      'projectsDetail.portfolio.detail1': 'Built with React and Vite for fast development.',
      'projectsDetail.portfolio.detail2': 'Styled using custom CSS.',
      'projectsDetail.portfolio.detail3': 'Implemented a back-end with NodeJS and Express.',
      'projectsDetail.portfolio.detail4': 'Deployed with Docker for containerization.',
      'projectsDetail.portfolio.galleryImage1.caption': 'Home page',
      'projectsDetail.portfolio.galleryImage2.caption': 'Projects page',
  
      // Otros textos y mensajes de la aplicación
      'footer.contactInfo': 'Contact Information',
      'footer.followMe': 'Follow me on social media',
      'footer.rightsReserved': 'All rights reserved.',
  
      'contact.title': 'Get in Touch',
      'contact.description': 'Feel free to reach out for collaborations or just a friendly chat.',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Submit',
      'contact.form.success': 'Your message has been sent successfully!',
      'contact.form.error': 'An error occurred. Please try again.',
    },
  
    es: {
      // Navbar
      'navbar.portfolio': 'Portafolio',
      'navbar.projects': 'Proyectos',
      'navbar.background': 'Experiencia',
      'navbar.contact': 'Contacto',
  
      // Encabezado principal
      'header.mainTitle': "Hola, soy Germinal.",
      'header.profession': "Soy un desarrollador full stack.",
      'header.interests': 'Me interesa la intersección de la tecnología y la filosofía.',
      'header.training': 'Estudié desarrollo web full stack en el bootcamp de Henry.',
  
      // Proyectos
      'projectsSection.title': 'Proyectos',
      'projectsSection.readMore': "Leer más",
      
  
      // Detalles de los proyectos
      'projectsDetail.fastDelivery.title': 'Fast Delivery App',
      'projectsDetail.fastDelivery.subTitle': 'Una aplicación web escalable y receptiva',
      'projectsDetail.fastDelivery.description': 'Fast Delivery App es una aplicación full-stack que permite a los usuarios...',
      'projectsDetail.fastDelivery.detail1': 'Diseñé e implementé una interfaz de usuario responsiva usando React.',
      'projectsDetail.fastDelivery.detail2': 'Construí una API RESTful con Node.js y Express.',
      'projectsDetail.fastDelivery.detail3': 'Integré MongoDB para la persistencia de datos.',
      'projectsDetail.fastDelivery.galleryImage1.caption': 'Página de inicio de sesión',
      'projectsDetail.fastDelivery.galleryImage2.caption': 'Tablero',
  
      'projectsDetail.polirubro.title': 'Polirubro Props',
      'projectsDetail.polirubro.subTitle': 'Una aplicación web de comercio electrónico',
      'projectsDetail.polirubro.description': 'Polirubro Props es una plataforma de comercio electrónico desarrollada con...',
      'projectsDetail.polirubro.detail1': 'Implementé el front-end usando React y TailwindCSS.',
      'projectsDetail.polirubro.detail2': 'Configuré la autenticación con JWT y Node.js.',
      'projectsDetail.polirubro.galleryImage1.caption': 'Página de listado de productos',
      'projectsDetail.polirubro.galleryImage2.caption': 'Página del carrito de compras',
  
      'projectsDetail.houseOfDev.title': 'House of Dev',
      'projectsDetail.houseOfDev.subTitle': 'Una plataforma comunitaria para desarrolladores',
      'projectsDetail.houseOfDev.description': 'House of Dev es una plataforma que conecta a desarrolladores...',
      'projectsDetail.houseOfDev.detail1': 'Usé React y Redux para la gestión del estado.',
      'projectsDetail.houseOfDev.detail2': 'Construí servicios RESTful con Express y Sequelize.',
      'projectsDetail.houseOfDev.detail3': 'Gestioné datos con PostgreSQL.',
      'projectsDetail.houseOfDev.detail4': 'Implementé la autenticación con JWT.',
      'projectsDetail.houseOfDev.detail5': 'Integré NodeMailer para notificaciones por correo electrónico.',
      'projectsDetail.houseOfDev.detail6': 'Desplegué la aplicación usando Docker.',
  
      'projectsDetail.tmdba.title': 'Aplicación TMDB',
      'projectsDetail.tmdba.subTitle': 'Una aplicación de base de datos de películas',
      'projectsDetail.tmdba.description': 'TMDB App es una aplicación web que permite a los usuarios buscar películas...',
      'projectsDetail.tmdba.detail1': 'Desarrollé el front-end con React y Redux.',
      'projectsDetail.tmdba.detail2': 'Creé APIs RESTful usando Express.',
      'projectsDetail.tmdba.detail3': 'Implementé JWT para una autenticación segura.',
      'projectsDetail.tmdba.detail4': 'Utilicé NodeJS para operaciones del lado del servidor.',
      'projectsDetail.tmdba.detail5': 'Usé MongoDB para la gestión de la base de datos.',
      'projectsDetail.tmdba.galleryImage1.caption': 'Página de resultados de búsqueda',
      'projectsDetail.tmdba.galleryImage2.caption': 'Página de detalles de la película',
  
      'projectsDetail.portfolio.title': 'Portafolio',
      'projectsDetail.portfolio.subTitle': 'Mi sitio web personal de portafolio',
      'projectsDetail.portfolio.description': 'Este portafolio muestra mis proyectos y habilidades...',
      'projectsDetail.portfolio.detail1': 'Construido con React y Vite para un desarrollo rápido.',
      'projectsDetail.portfolio.detail2': 'Estilizado usando CSS personalizado.',
      'projectsDetail.portfolio.detail3': 'Implementé un back-end con NodeJS y Express.',
      'projectsDetail.portfolio.detail4': 'Desplegado con Docker para la contenedorización.',
      'projectsDetail.portfolio.galleryImage1.caption': 'Página de inicio',
      'projectsDetail.portfolio.galleryImage2.caption': 'Página de proyectos',
  
      // Otros textos y mensajes de la aplicación
      'footer.contactInfo': 'Información de contacto',
      'footer.followMe': 'Sígueme en las redes sociales',
      'footer.rightsReserved': 'Todos los derechos reservados.',
  
      'contact.title': 'Ponte en contacto',
      'contact.description': 'No dudes en comunicarte para colaboraciones o simplemente una charla amistosa.',
      'contact.form.name': 'Nombre',
      'contact.form.email': 'Correo electrónico',
      'contact.form.message': 'Mensaje',
      'contact.form.submit': 'Enviar',
      'contact.form.success': '¡Tu mensaje ha sido enviado con éxito!',
      'contact.form.error': 'Ocurrió un error. Por favor, intenta nuevamente.',
    }
  };



  export function translate(language: string, key: string): string {
    
    if (!translations[language]) {
      console.warn(`Idioma '${language}' no definido. Usando idioma predeterminado 'en'.`);
      language = 'en'; // Usa 'en' como idioma predeterminado
    }
  
    
    return translations[language][key] || key;
  }
  
  export default translations;
  

  
