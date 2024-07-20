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
      'header.profession': "I’m a full stack web developer.",
      'header.interests': 'I’m interested in the intersection of technology and philosophy.',
      'header.training': 'I studied full stack web development.',
      'header.goals': "My goal is to continue learning and bridging these fields that I am passionate about.",
  
      // Projects

      'projectsSection.title': 'Projects',
      'projectsSection.readMore': "Read more",

      //moreProjects:

      'moreProjectsSection.title': "More Projects",  


      //ProjectsDetails (/common component):

      "projectsDetails.technologies": "Technologies",
      "projectsDetails.detail": "Details", 
      "projectsDetails.repository": "Repository",
      "projectsDetails.gallery": "Gallery",

      //About Section:
      'about.title': "My Background",
      'about.skills': "Technical Skills",
      'about.education': "Education",  
      'about.sec.course': "Computer cybersecurity in the company", 
      'about.devops.course': "DevOps with Docker, Jenkins, Kubernetes, Git, GitFlow and CI/CD",



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
      'header.profession': "Soy desarrollador web full stack.",
      'header.interests': 'Me interesa la intersección entre la tecnología y la filosofía.',
      'header.training': 'Me formé recientemente en desarrollo web full stack.',
      'header.goals': "Mi objetivo es seguir aprendiendo y conectando estos campos que me apasionan.",
        
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

      //Formación:

      'about.title': "Experiencia",
      'about.skills': "Habilidades técnicas",
      'about.education': "Formación",  
      'about.sec.course': "Gestión de la seguridad informática en la empresa", 
      'about.devops.course': "DevOps con Docker, Jenkins, Kubernetes, Git, GitFlow y CI/CD",

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
      language = 'en'; 
    }
  
    
    return translations[language][key] || key;
  }
  
  export default translations;
  

  
