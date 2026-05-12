import { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent-from/30 selection:text-white">
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24" />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-12" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
