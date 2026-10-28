import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import QuizConfigurator from './components/QuizConfigurator';
import AdvantagesSection from './components/AdvantagesSection';
import PortfolioSection from './components/PortfolioSection';
import WorkflowSteps from './components/WorkflowSteps';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import ProductModal from './components/ProductModal';
import ClientPortal from './components/ClientPortal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenAuth = () => setIsAuthOpen(true);
  const handleOpenPortal = () => setIsPortalOpen(true);

  const handleAuthSuccess = () => {
    setIsAuthOpen(false);
    setIsPortalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f8f5] text-[#1f2721]">
      <Navbar onOpenAuth={handleOpenAuth} onOpenPortal={handleOpenPortal} />

      <main>
        <HeroSection
          onOpenQuiz={() => {
            const el = document.getElementById('quiz');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <ProductCatalog onSelectProduct={prod => setSelectedProduct(prod)} />
        <QuizConfigurator onCompleteQuiz={handleOpenAuth} />
        <AdvantagesSection />
        <PortfolioSection />
        <WorkflowSteps />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onOrder={() => {
          setSelectedProduct(null);
          handleOpenAuth();
        }}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      <ClientPortal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </div>
  );
}
