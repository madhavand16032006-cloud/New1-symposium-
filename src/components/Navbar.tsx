import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sparkles, Shield, HelpCircle, 
  Zap, Calendar, Compass, Volume2, ArrowRight 
} from 'lucide-react';
import { audioFX } from '../utils/audioFX';
import { useTheme } from '../context/ThemeContext';
import { LiveTicker } from './LiveTicker';

interface NavbarProps {
  onRegisterClick: () => void;
  onPosterClick: () => void;
  onTrackPassClick: () => void;
  onOpenPassGuide: () => void;
  onOpenWelcome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onRegisterClick, 
  onPosterClick,
  onTrackPassClick,
  onOpenPassGuide,
  onOpenWelcome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Perks', href: '#perks' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Poster', href: '#poster' },
    { label: 'Venue', href: '#venue' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Marquee Live Announcement Ticker */}
      <LiveTicker onOpenWelcome={onOpenWelcome} />

      {/* Main Navbar Bar */}
      <nav
        className={`transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#070B19]/90 backdrop-blur-xl border-cyan-500/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-2.5'
            : 'bg-[#070B19]/70 backdrop-blur-md border-slate-800/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Zone 1: Wordmark & College Crest */}
            <a
              href="#"
              onClick={() => audioFX.playClick()}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_#00F0FF]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-base tracking-tight text-white font-display flex items-center gap-1.5">
                  INTELLECTRA
                  <span className="text-xs px-1.5 py-0.2 rounded-sm bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono">
                    '26
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                  APEC &bull; Dept of IT &bull; NAAC &ldquo;A&rdquo;
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => audioFX.playClick()}
                  className="text-xs font-semibold tracking-wide text-slate-300 hover:text-cyan-400 transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </div>

            {/* Zone 3: Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              
              {/* Welcome Page Reopen Button */}
              <button
                onClick={() => {
                  audioFX.playLaserWhoosh();
                  onOpenWelcome();
                }}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                title="View Welcome Gateway"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span>Welcome</span>
              </button>

              {/* Digital Pass Tracker Button */}
              <button
                onClick={() => {
                  audioFX.playClick();
                  onTrackPassClick();
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-400/50 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                title="Track pass approval, QR badge & meal vouchers"
              >
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Track Pass</span>
              </button>

              {/* Register CTA */}
              <button
                onClick={() => {
                  audioFX.playLaserWhoosh();
                  onRegisterClick();
                }}
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all flex items-center gap-1.5 cursor-pointer border border-cyan-300/30"
              >
                <span>Register Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => {
                  audioFX.playClick();
                  onOpenWelcome();
                }}
                className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 text-xs"
                title="Welcome Screen"
              >
                <Sparkles className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  audioFX.playClick();
                }}
                className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070B19]/98 border-b border-cyan-500/30 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    audioFX.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWelcome();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Open Welcome Gateway</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTrackPassClick();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Track Instant Digital Pass</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPassGuide();
                }}
                className="w-full py-2 px-3 rounded-lg bg-slate-950 text-slate-400 hover:text-slate-200 text-xs flex items-center justify-center gap-1.5"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>What is Digital Pass?</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPosterClick();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>View Official Poster</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full py-3 px-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <span>Register Now (Free Entry &amp; Lunch)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
