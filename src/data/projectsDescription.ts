import fastDeliveryImage from '../assets/images/FastDelivery.jpg';
import polirubroImage from '../assets/images/polirubro.png';
import portfolio from '../assets/images/Portfolio.png';
import moreImage from '../assets/images/moreProjects.png';

import houseOfDevImage from '../assets/images/HouseOfDev.png';
import tmdbImage from '../assets/images/TMDB.jpeg';
import eCommerceImage from '../assets/images/e-commerce.jpg'; 

interface Project {
  title: string;
  image: string;
  link: string;
}

const projects: { [key: string]: Project[] } =  {
  en: [
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
  ],
  es: [
    {
      title: 'Aplicación de Entregas',
      image: fastDeliveryImage,
      link: '/project/fast-delivery-app'
    },
    {
      title: 'Catálogo Digital',
      image: polirubroImage,
      link: '/project/polirubro-props'
    },
    {
      title: 'Portafolio',
      image: portfolio,
      link: '/project/portfolio'
    },
    {
      title: 'Más Proyectos',
      image: moreImage,
      link: '/more-projects'
    }
  ]
};


  
  const moreProjects: { [key: string]: Project[] }  = {
    en: [
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
        image: eCommerceImage,
        link: '/more-projects/e-commerce'
      }
    ],
    es: [
      {
        title: 'Aplicación Inmobiliaria',
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
        image: eCommerceImage,
        link: '/more-projects/e-commerce'
      }
    ]
  };

export { projects, moreProjects };



