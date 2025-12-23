import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import statique pour les composants critiques
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTop from './hooks/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

// Imports Dynamiques (Code Splitting)
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const About = lazy(() => import('./components/About'));
const Tips = lazy(() => import('./components/Tips'));
const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
// Import du nouveau composant
const Testimonials = lazy(() => import('./components/Testimonials'));

// Composant de chargement léger
const LoadingSpinner = () => (
  <div style={{ 
    height: '50vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    color: '#0056B3' 
  }}>
    Chargement...
  </div>
);

// Home unique regroupant toutes les sections
const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <Portfolio />
        <Testimonials /> {/* La section Avis est ici */}
        <About />
      </Suspense>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route 
          path="/project/:id" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProjectDetails />
            </Suspense>
          } 
        />
        
        <Route 
          path="/conseils" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Tips />
            </Suspense>
          } 
        />
      </Routes>
      
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;