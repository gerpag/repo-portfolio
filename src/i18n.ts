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
  
      // Header 

      'header.mainTitle': "Hey, I’m Germinal.",
      'header.profession': "I’m a full stack developer.",
      'header.interests': 'I’m interested in the intersection of technology and philosophy.',
      'header.training': 'I studied full stack web development at Henry Bootcamp.',
  
      // Projects

      'projectsSection.title': 'Projects',
      'projectsSection.readMore': "Read more",

      //moreProjects:

      'moreProjectsSection.title': "More Projects",  


      //ProjectsDetails (/common):

      "projectsDetails.technologies": "Technologies",
      "projectsDetails.detail": "Details", 
      "projectsDetails.repository": "Repository",
      "projectsDetails.gallery": "Gallery",



    //Contact: 

      'contact.title': 'Contact me',
      'contact.description': 'Feel free to reach out for collaborations or just a friendly chat.',
      'contact.form.name': 'Name',
      'contact.form.subject': 'Subject',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Submit',
      'contact.form.success': 'Thanks for contacting me!',
      'contact.form.error': 'An error occurred. Please try again.',
      
  
      // Footer
      
      'footer.rightsReserved': 'Germinal Pagliuca. All rights reserved.',
  
      
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


      // Más proyectos
      'moreProjectsSection.title': "Más Proyectos",  


      //ProjectsDetails (/common):

      "projectsDetails.technologies": "Tecnologías",
      "projectsDetails.detail": "Detalles", 
      "projectsDetails.repository": "Repositorio",
      "projectsDetails.gallery": "Galería",
      

      //Contacto:
      
      'contact.title': 'Ponte en contacto',
      'contact.description': 'No dudes en comunicarte para colaboraciones o simplemente una charla amistosa.',
      'contact.form.name': 'Nombre',
      'contact.form.subject': "Asunto",
      'contact.form.email': 'Correo electrónico',
      'contact.form.message': 'Mensaje',
      'contact.form.submit': 'Enviar',
      'contact.form.success': '¡Tu mensaje ha sido enviado con éxito!',
      'contact.form.error': 'Ocurrió un error. Por favor, intenta nuevamente.',
      
      // Footer 
      
      
    
      'footer.rightsReserved': 'Germinal Pagliuca.Todos los derechos reservados.',
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
  

  
