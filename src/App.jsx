import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuizConfigurator from './components/QuizConfigurator';
import ProductCatalog from './components/ProductCatalog';
import ClientPortal from './components/ClientPortal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121E15] text-[#F8FAFC]">
      <Navbar 
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      <main>
        <HeroSection />
        <QuizConfigurator />
        <ProductCatalog onSelectProduct={() => setIsPortalOpen(true)} />
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={() => {
          setIsAuthOpen(false);
          setIsPortalOpen(true);
        }}
      />

      <ClientPortal 
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}
