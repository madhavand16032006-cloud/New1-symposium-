import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { About } from './components/About';
import { Events } from './components/Events';
import { PerksAndFaq } from './components/PerksAndFaq';
import { PosterSection } from './components/PosterSection';
import { Schedule } from './components/Schedule';
import { Registration } from './components/Registration';
import { VenueMap } from './components/VenueMap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { PassExplainerModal } from './components/PassExplainerModal';
import { WelcomePage } from './components/WelcomePage';
import { WelcomeLoader } from './components/WelcomeLoader';

export default function App() {
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(undefined);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [isPassGuideOpen, setIsPassGuideOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [showWelcomeLoader, setShowWelcomeLoader] = useState(true);
  const [registrationTab, setRegistrationTab] = useState<'form' | 'track' | 'qr'>('form');

  const handleRegisterClick = () => {
    setRegistrationTab('form');
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPassTracker = () => {
    setRegistrationTab('track');
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreEventsClick = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEventForRegistration = (eventId: string) => {
    setSelectedEventId(eventId);
    handleRegisterClick();
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 relative bg-[#060913] text-slate-100">
        {/* Dynamic Canvas Animated Background for Cyber, Matrix, Synthwave & Cosmic modes */}
        <AnimatedBackground />

        {/* Unified Top Header (LiveTicker + Sticky Navbar stacked without collision) */}
        <Navbar
          onRegisterClick={handleRegisterClick}
          onPosterClick={() => setIsPosterModalOpen(true)}
          onTrackPassClick={handleOpenPassTracker}
          onOpenPassGuide={() => setIsPassGuideOpen(true)}
          onOpenWelcome={() => setShowWelcomeLoader(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1 relative z-10">
          {/* Hero Section */}
          <Hero
            onRegisterClick={handleRegisterClick}
            onExploreEventsClick={handleExploreEventsClick}
            onPosterClick={() => setIsPosterModalOpen(true)}
            onTrackPassClick={handleOpenPassTracker}
            onOpenPassGuide={() => setIsPassGuideOpen(true)}
            onOpenWelcome={() => setShowWelcomeLoader(true)}
          />

          {/* Live Countdown Timer Section with 12th Oct 2026 9:00 AM & Count Tone */}
          <Countdown />

          {/* About Section */}
          <About />

          {/* Official Poster Section */}
          <PosterSection
            isModalOpen={isPosterModalOpen}
            onCloseModal={() => setIsPosterModalOpen(false)}
          />

          {/* Events Showcase */}
          <Events
            onSelectEventForRegistration={handleSelectEventForRegistration}
          />

          {/* Delegate Perks & Smart Track Matcher */}
          <PerksAndFaq
            onSelectEvent={handleSelectEventForRegistration}
          />

          {/* Schedule Timeline */}
          <Schedule />

          {/* Registration Section (Instant Pass, Pass Tracker & QR code) */}
          <Registration
            preselectedEventId={selectedEventId}
            forceTab={registrationTab}
            onOpenGuideModal={() => setIsPassGuideOpen(true)}
          />

          {/* Map & Venue Guidance */}
          <VenueMap />

          {/* Contact & WhatsApp Desk */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Floating Theme & Animation Type Switcher Bar */}
        <ThemeSwitcher
          onOpenPassGuide={() => setIsPassGuideOpen(true)}
          onOpenPassTracker={handleOpenPassTracker}
          onOpenWelcome={() => setShowWelcomeLoader(true)}
        />

        {/* Pass Explainer & Tracking Guide Modal */}
        <PassExplainerModal
          isOpen={isPassGuideOpen}
          onClose={() => setIsPassGuideOpen(false)}
          onOpenTracker={handleOpenPassTracker}
          onOpenRegister={handleRegisterClick}
        />

        {/* Full Interactive Welcome Page / Gateway Experience */}
        <WelcomePage
          isOpen={isWelcomeOpen}
          onEnterPortal={() => setIsWelcomeOpen(false)}
          onOpenRegister={() => {
            setIsWelcomeOpen(false);
            handleRegisterClick();
          }}
          onOpenEvents={() => {
            setIsWelcomeOpen(false);
            handleExploreEventsClick();
          }}
          onOpenTrackPass={() => {
            setIsWelcomeOpen(false);
            handleOpenPassTracker();
          }}
        />

        {/* Unique Full-Screen Welcome Loader Bootup Experience (Zero Logos/Images, Pure Typography & Visuals) */}
        {showWelcomeLoader && (
          <WelcomeLoader onComplete={() => setShowWelcomeLoader(false)} />
        )}
      </div>
    </ThemeProvider>
  );
}
