import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  const { hash, key } = useLocation();

  // Honour deep links like /#contact — arriving from a project page, a shared
  // URL, or the "back to projects" link.
  useEffect(() => {
    if (!hash) return;

    let attempts = 0;
    let timer: number;

    // Images above the target are still loading on arrival, so the page keeps
    // growing under us. Jump to the section, then correct until it settles.
    const settle = () => {
      const element = document.querySelector(hash);
      if (element) {
        const { top } = element.getBoundingClientRect();
        // instant, not smooth: html has scroll-behavior:smooth, and a
        // re-issued smooth scroll restarts its easing instead of arriving
        if (Math.abs(top) > 2) element.scrollIntoView({ behavior: 'instant' });
      }
      if (attempts++ < 15) timer = window.setTimeout(settle, 100);
    };

    // stop correcting the moment the visitor takes over
    const cancel = () => {
      attempts = Infinity;
      window.clearTimeout(timer);
    };
    const events = ['wheel', 'touchstart', 'keydown'] as const;
    events.forEach((event) => window.addEventListener(event, cancel, { passive: true }));

    settle();

    return () => {
      window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, cancel));
    };
  }, [hash, key]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
