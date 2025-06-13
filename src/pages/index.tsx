import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TimelineSection from '../components/TimelineSection';
import PortfolioPreview from '../components/PortfolioPreview';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header com navegação */}
      <Header />

      {/* Seção Hero - Apresentação principal */}
      <HeroSection />

      {/* Seção Sobre Mim */}
      <AboutSection />

      {/* Seção de Depoimentos */}
      <TestimonialsSection />

      {/* Timeline de Experiências */}
      <TimelineSection />

      {/* Preview do Portfólio */}
      <PortfolioPreview />

      {/* Seção de Contato */}
      <ContactSection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Index;