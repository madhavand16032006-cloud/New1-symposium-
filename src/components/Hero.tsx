import React, { useState, useEffect } from 'react';
import { 
  Calendar, MapPin, Trophy, Utensils, Award, ArrowRight, 
  Sparkles, Code2, Terminal, ShieldCheck, Zap, Info 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';
import { useTheme } from '../context/ThemeContext';
import { audioFX } from '../utils/audioFX';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreEventsClick: () => void;
  onPosterClick: () => void;
  onTrackPassClick: () => void;
  onOpenPassGuide: () => void;
  onOpenWelcome: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRegisterClick,
  onExploreEventsClick,
  onPosterClick,
  onTrackPassClick,
  onOpenPassGuide,
  onOpenWelcome,
}) => {
  const { theme } = useTheme();

  // Typing text effect
  const typingPhrases = [
    'Welcome to IT Spectrum 2026',
    'INTELLECTRA : National Level Symposium',
    'Code • Create • Innovate',
    '12th Oct 2026 • 09:00 AM IST',
    'Instant Digital Pass • Free Entry & Buffet Lunch'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      {/* Animated Subtle Code Grid / Radial Background */}
      <div className="absolute inset-0 -z-20 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Floating subtle tech gradient spheres with gentle pulse */}
      <div 
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/15 blur-3xl -z-10 rounded-full pointer-events-none animate-pulse-ring"
        aria-hidden="true"
      />
      <div 
        className="absolute -top-24 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl -z-10 pointer-events-none animate-float-slow"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl -z-10 pointer-events-none animate-float-reverse"
        aria-hidden="true"
      />

      {/* Floating animated decorative tech snippet (Desktop Left) */}
      <div className="hidden xl:block absolute top-48 left-8 p-3.5 rounded-2xl bg-[#0A1020]/90 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_20px_rgba(0,0,0,0.6)] animate-float-slow z-10 pointer-events-none text-left">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] text-slate-400 font-mono">intellectra_config.ts</span>
        </div>
        <p className="text-[11px] font-mono text-slate-200 font-semibold leading-relaxed">
          eventDate: <span className="text-cyan-300">&quot;12-OCT-2026 09:00 IST&quot;</span>,<br />
          digitalPass: <span className="text-emerald-400">&quot;INSTANT_QR_ACTIVE&quot;</span>,<br />
          buffetLunch: <span className="text-emerald-400">&quot;100%_FREE_DELEGATES&quot;</span>,<br />
          cashPool: <span className="text-amber-400">&quot;₹25,000+&quot;</span>
        </p>
      </div>

      {/* Floating animated decorative tech snippet (Desktop Right) */}
      <div className="hidden xl:block absolute top-52 right-8 p-3.5 rounded-2xl bg-[#0A1020]/90 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_20px_rgba(0,0,0,0.6)] animate-float-reverse z-10 pointer-events-none text-left max-w-[210px]">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-100 mb-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Instant Digital Pass</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-snug">
          QR-verified paperless badge &amp; meal voucher token for every attendee!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Institutional Accreditation & Date Kicker */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <button
            onClick={() => {
              audioFX.playLaserWhoosh();
              onOpenWelcome();
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.25)] backdrop-blur-md text-xs font-semibold text-cyan-300 hover:text-white transition-all cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform" />
            <span>✨ Welcome Page &amp; Gateway</span>
          </button>
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm backdrop-blur-md text-xs font-semibold text-slate-300">
            <span className="text-amber-400 font-bold tracking-wider">OM SAKTHI</span>
            <span className="text-slate-600">|</span>
            <span>Adhiparasakthi Engineering College</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-cyan-400 font-medium">NAAC &ldquo;A&rdquo; Grade</span>
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] text-xs font-semibold font-mono">
            <Calendar className="w-3.5 h-3.5 text-cyan-300" />
            <span>12th October 2026 &bull; 09:00 AM IST</span>
          </div>

          <button
            onClick={() => {
              audioFX.playClick();
              onOpenPassGuide();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>What is Digital Pass?</span>
          </button>
        </div>

        {/* College Name & Department */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase font-mono">
            Department of Information Technology Proudly Presents
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mt-1 font-display tracking-tight text-white">
            ADHIPARASAKTHI ENGINEERING COLLEGE, MELMARUVATHUR
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Approved by AICTE, New Delhi &bull; Affiliated to Anna University, Chennai &bull; ISO 9001:2015 Certified
          </p>
        </div>

        {/* Main Symposium Brand with Animated Gradient */}
        <div className="my-6 relative inline-block">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight font-display text-white drop-shadow-[0_0_35px_rgba(0,240,255,0.3)]">
            INTELLECTRA <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-text">2026</span>
          </h1>
          <p className="text-sm sm:text-base font-semibold text-cyan-300/80 mt-2 tracking-widest uppercase font-mono">
            NATIONAL LEVEL TECHNICAL SYMPOSIUM
          </p>
        </div>

        {/* Animated Typing Header Box */}
        <div className="min-h-[52px] flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-[#0A1020]/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-md">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-base sm:text-xl font-bold text-white font-mono">
              {currentText}
            </span>
            <span className="w-2.5 h-5 bg-cyan-400 animate-pulse ml-0.5 rounded-xs shadow-[0_0_8px_#00F0FF]" />
          </div>
        </div>

        {/* Subtitle & Motto */}
        <p className="text-base sm:text-lg font-medium max-w-2xl mx-auto mb-8 font-sans text-slate-300">
          <span className="text-cyan-400 font-semibold">{COLLEGE_INFO.tagline}</span>
          <span className="block text-xs sm:text-sm text-slate-400 mt-1 font-mono">
            &lt;/&gt; IDEAS &bull; TECHNOLOGY &bull; INNOVATION &bull; A BETTER TOMORROW
          </span>
        </p>

        {/* Primary Action Buttons with Hover Glow */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => {
              audioFX.playLaserWhoosh();
              onRegisterClick();
            }}
            className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:-translate-y-1 flex items-center gap-2 group cursor-pointer border border-cyan-300/30"
          >
            <span>Register Now (Free Entry &amp; Lunch)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              audioFX.playClick();
              onTrackPassClick();
            }}
            className="px-5 py-3.5 text-sm sm:text-base font-semibold bg-[#0A1020]/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2 hover:-translate-y-0.5"
            title="Search and track your pass approval, room allocation and meal coupon"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Track Digital Pass</span>
          </button>
          
          <button
            onClick={() => {
              audioFX.playClick();
              onExploreEventsClick();
            }}
            className="px-5 py-3.5 text-sm sm:text-base font-semibold bg-slate-900/80 border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Events (7 Tracks)</span>
          </button>

          <button
            onClick={() => {
              audioFX.playLaserWhoosh();
              onPosterClick();
            }}
            className="px-4 py-3.5 text-sm sm:text-base font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Official Poster</span>
          </button>
        </div>

        {/* Key Event Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl glass-panel text-left hover-glow">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30 mb-2">
              <Trophy className="w-5 h-5 drop-shadow-[0_0_8px_#F59E0B]" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-white">₹25,000+ Prize Pool</p>
              <p className="text-[11px] text-slate-400">Cash awards for all podium winners</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel text-left hover-glow">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 mb-2">
              <Utensils className="w-5 h-5 drop-shadow-[0_0_8px_#10B981]" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-white">100% Free Buffet Lunch</p>
              <p className="text-[11px] text-slate-400">Provided for every delegate</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel text-left hover-glow">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30 mb-2">
              <Award className="w-5 h-5 drop-shadow-[0_0_8px_#00F0FF]" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-white">Anna Univ. Certificates</p>
              <p className="text-[11px] text-slate-400">Official recognized credentials</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel text-left hover-glow">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30 mb-2">
              <MapPin className="w-5 h-5 drop-shadow-[0_0_8px_#A855F7]" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-white">APEC Central Library</p>
              <p className="text-[11px] text-slate-400">Melmaruvathur Campus</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
