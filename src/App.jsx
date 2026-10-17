import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AngelJoeIntro from './components/AngelJoeIntro';
import About from './components/About';
import Experiences from './components/Experiences';
import Manifesto from './components/Manifesto';
import Gallery from './components/Gallery';
import VideoHighlights from './components/VideoHighlights';
import Voices from './components/Voices';
import ContactFooter from './components/ContactFooter';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import UpcomingEventsPage from './components/UpcomingEventsPage';
import { getRouteInfo, navigateTo } from './utils/navigation';

function App() {
  const [route, setRoute] = useState(getRouteInfo);

  useEffect(() => {
    const handleLocationChange = () => {
      const nextRoute = getRouteInfo();
      setRoute(nextRoute);

      if (nextRoute.page === 'home' && nextRoute.hash) {
        setTimeout(() => {
          const el = document.querySelector(nextRoute.hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Initial check for hash scroll on home load
    const current = getRouteInfo();
    if (current.page === 'home' && current.hash) {
      setTimeout(() => {
        const el = document.querySelector(current.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Upcoming Events Dedicated Page (/upcoming-events or /upcoming events or /upcoming)
  if (route.page === 'upcoming') {
    return <UpcomingEventsPage />;
  }

  // Privacy Policy Page (/privacy or #privacy)
  if (route.page === 'privacy') {
    return (
      <PrivacyPolicy 
        onBack={() => {
          navigateTo('/');
        }} 
      />
    );
  }

  // Main Home Page (Exclusive Upcoming section shifted to /upcoming-events)
  return (
    <main className="min-h-screen bg-ja-light font-sans text-ja-charcoal selection:bg-ja-purple/20 selection:text-ja-deep">
      <Navbar />
      <Hero />
      <AngelJoeIntro />
      <About />
      <Experiences />
      <Manifesto />
      <VideoHighlights />
      <Gallery />
      <Voices />
      <ContactFooter />
      <WhatsAppButton />
    </main>
  );
}

export default App;
