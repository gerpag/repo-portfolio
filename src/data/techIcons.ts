

import {
  FaReact, FaCss3Alt, FaNodeJs, FaDocker, FaJenkins, FaGithub, FaGitAlt,
  FaTrello, FaAws, FaFileAlt, FaJs, FaEnvelope
} from 'react-icons/fa';
import {
   SiExpress, SiJsonwebtokens, SiPostgresql, SiMongodb, SiTypescript, SiTailwindcss, SiSequelize, SiRedux
} from 'react-icons/si';

export const techIcons: { [key: string]: React.ElementType } = {
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,
  CSS: FaCss3Alt,
  NodeJS: FaNodeJs,
  Express: SiExpress,
  JWT: SiJsonwebtokens,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: FaDocker,
  Jenkins: FaJenkins,
  GitHub: FaGithub,
  Git: FaGitAlt,
  Trello: FaTrello,
  AWS: FaAws,
  TailwindCSS: SiTailwindcss,
  Markdown: FaFileAlt,  
  Sequelize: SiSequelize,
  Redux: SiRedux,
  NodeMailer: FaEnvelope
};
