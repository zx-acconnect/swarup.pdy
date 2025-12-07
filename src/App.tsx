import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { ContactModal } from './components/layout/ContactModal';
import { Sidebar } from './components/layout/Sidebar';
import { HeroSection } from './components/sections/HeroSection';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/ui/Preloader';
import { SystemConsole } from './components/ui/SystemConsole';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { SkipLink } from './components/ui/SkipLink';
import { StructuredData } from './components/seo/StructuredData'; // Import
import { useScrollSpy } from './hooks/useScrollSpy';
import { useTelemetry } from './hooks/useTelemetry'; // Import
import { AnimatePresence, motion } from 'framer-motion';
import { ConsoleProvider, useConsole } from './context/ConsoleContext';
import { PORTFOLIO_DATA } from './data/content';

// Lazy Loads...
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection').then(module => ({ default: module.ProjectsSection })));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection').then(module => ({ default: module.SkillsSection })));
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(module => ({ default: module.AboutSection })));

const LoadingFallback = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
  </div>
);

// Inner App Content to use Hooks
const AppContent: React.FC = () => {
  const activeSection = useScrollSpy(PORTFOLIO_DATA.navbar.items.map((item) => item.id), 100);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addLog } = useConsole();

  // 🚀 ACTIVATE REAL-TIME TELEMETRY
  useTelemetry();

  useEffect(() => {
    document.title = `${PORTFOLIO_DATA.config.name} | ${PORTFOLIO_DATA.config.title}`;
  }, []);

  useEffect(() => {
    if (!isLoading) {
      addLog('SYSTEM_INIT', 'system');

      const handleScroll = () => {
        if (Math.random() > 0.98) {
          addLog(`VIEWPORT_Y: ${Math.round(window.scrollY)}px`, 'info');
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading, addLog]);

  return (
    <>
      <StructuredData /> {/* SEO Injection */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen w-full font-sans transition-colors duration-300"
        >
          <SkipLink />
          <ScrollProgress />

          <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeSection={activeSection}
            onOpenContact={() => setIsContactOpen(true)}
          />

          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />

          <Sidebar activeSection={activeSection} />
          <SystemConsole />

          <main id="main-content" className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-32 pb-32">
            <div id="home" className="scroll-mt-0 mb-32 lg:mb-40">
              <HeroSection onOpenContact={() => setIsContactOpen(true)} />
            </div>

            <div className="space-y-32 lg:space-y-40">
              <Suspense fallback={<LoadingFallback />}>
                <ErrorBoundary>
                  <div id="projects" className="scroll-mt-32">
                    <ProjectsSection />
                  </div>
                </ErrorBoundary>

                <ErrorBoundary>
                  <div id="skills" className="scroll-mt-32">
                    <SkillsSection />
                  </div>
                </ErrorBoundary>

                <ErrorBoundary>
                  <div id="about" className="scroll-mt-32">
                    <AboutSection />
                  </div>
                </ErrorBoundary>
              </Suspense>
            </div>

            <Footer />
          </main>
        </motion.div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ConsoleProvider>
        <AppContent />
      </ConsoleProvider>
    </ErrorBoundary>
  );
};

export default App;