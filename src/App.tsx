import React from 'react';
import Navbar from './components/Navbar';
import PortfolioHeader from './components/PortfolioHeader';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import '../src/css/App.css';

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    <main id="main-content">
      <PortfolioHeader />
      <ProjectsSection />
      <AboutSection />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default App;
