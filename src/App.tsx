import React, { useState, useEffect } from 'react';
import { NavigationRoute, ProductItem, ProjectItem } from './types';
import { ToastProvider } from './context/ToastContext';
import { AnimatedBackground } from './components/common/AnimatedBackground';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ProjectModal } from './components/common/ProjectModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CollinsTechPage } from './pages/CollinsTechPage';
import { ServicesPage } from './pages/ServicesPage';
import { VenturesPage } from './pages/VenturesPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialRoute = (): NavigationRoute => {
    const path = window.location.pathname as NavigationRoute;
    const validRoutes: NavigationRoute[] = [
      '/',
      '/products',
      '/collinstech',
      '/services',
      '/ventures',
      '/about',
      '/insights',
      '/contact'
    ];
    return validRoutes.includes(path) ? path : '/';
  };

  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>(getInitialRoute);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as NavigationRoute;
      const validRoutes: NavigationRoute[] = [
        '/',
        '/products',
        '/collinstech',
        '/services',
        '/ventures',
        '/about',
        '/insights',
        '/contact'
      ];
      setCurrentRoute(validRoutes.includes(path) ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleRouteChange = (route: NavigationRoute) => {
    setCurrentRoute(route);
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductModal = (product: ProductItem) => {
    setSelectedProduct(product);
    setSelectedCaseStudy(null);
    setProjectModalOpen(true);
  };

  const handleOpenCaseStudyModal = (caseStudy: ProjectItem) => {
    setSelectedCaseStudy(caseStudy);
    setSelectedProduct(null);
    setProjectModalOpen(true);
  };

  const handleOpenGeneralProjectModal = () => {
    setSelectedProduct(null);
    setSelectedCaseStudy(null);
    setProjectModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/':
        return (
          <HomePage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
            onSelectProduct={handleOpenProductModal}
          />
        );
      case '/products':
        return (
          <ProductsPage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
            onSelectProduct={handleOpenProductModal}
          />
        );
      case '/collinstech':
        return (
          <CollinsTechPage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
            onSelectCaseStudy={handleOpenCaseStudyModal}
          />
        );
      case '/services':
        return (
          <ServicesPage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
          />
        );
      case '/ventures':
        return (
          <VenturesPage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
            onSelectProduct={handleOpenProductModal}
          />
        );
      case '/about':
        return (
          <AboutPage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
          />
        );
      case '/insights':
        return (
          <InsightsPage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
          />
        );
      case '/contact':
        return (
          <ContactPage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
          />
        );
      default:
        return (
          <HomePage
            onRouteChange={handleRouteChange}
            onOpenProjectModal={handleOpenGeneralProjectModal}
            onSelectProduct={handleOpenProductModal}
          />
        );
    }
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#050505] text-white relative selection:bg-blue-600/30 selection:text-blue-200">
        
        {/* Background Animated Nodes Canvas */}
        <AnimatedBackground />

        {/* Navigation Header */}
        <Navbar
          currentRoute={currentRoute}
          onRouteChange={handleRouteChange}
          onOpenProjectModal={handleOpenGeneralProjectModal}
        />

        {/* Page Content */}
        <main className="relative z-10 min-h-[80vh]">
          {renderCurrentPage()}
        </main>

        {/* Footer */}
        <Footer
          onRouteChange={handleRouteChange}
          onOpenProjectModal={handleOpenGeneralProjectModal}
        />

        {/* Unified Project & Inspection Modal */}
        <ProjectModal
          isOpen={projectModalOpen}
          onClose={() => {
            setProjectModalOpen(false);
            setSelectedProduct(null);
            setSelectedCaseStudy(null);
          }}
          selectedProduct={selectedProduct}
          selectedCaseStudy={selectedCaseStudy}
        />

      </div>
    </ToastProvider>
  );
}
