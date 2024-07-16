import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PortfolioHeader from './components/PortfolioHeader';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import MoreProjects from './components/MoreProjects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { ThemeProvider } from './context/ThemeContext';

import './css/App.css';

const App: React.FC = () => (
  <ThemeProvider>
  <Router>
    <div className="App">
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <PortfolioHeader />
              <ProjectsSection />
              <AboutSection />
              <ContactForm />
            </>
          } />
          <Route path="/project/:title" element={<ProjectDetailsPage />} />
          <Route path="/more-projects" element={<MoreProjects />} />
          <Route path="/more-projects/:title" element={<ProjectDetailsPage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  </ThemeProvider>
);

export default App;

