import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Calendar, MapPin, Trophy, Utensils, 
  ArrowRight, ShieldCheck, Volume2, Award, Zap, 
  Compass, Radio, X, CheckCircle2, ChevronRight
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';
import { audioFX } from '../utils/audioFX';
import { useTheme } from '../context/ThemeContext';

interface WelcomePageProps {
  isOpen: boolean;
  onEnterPortal: () => void;
  onOpenRegister: () => void;
  onOpenEvents: () => void;
  onOpenTrackPass: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({
  isOpen,
  onEnterPortal,
  onOpenRegister,
  onOpenEvents,
  onOpenTrackPass,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Target symposium date: 12th Oct 2026 9:00 AM IST
  const targetDate = new Date('2026-10-12T09:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 overflow-y-auto bg-[#050813]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-500 ${
        mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {/* Background Animated Cyber Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-ring" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none animate-float-slow" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-2xl pointer-events-none animate-float-reverse" />
      
      {/* Subtle Matrix / Cyber grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Close / Skip to Portal button on top right */}
      <button
        onClick={() => {
          audioFX.playClick();
          onEnterPortal();
        }}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-cyan-500/30 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer shadow-lg group"
        title="Directly enter website"
      >
        <span>Skip to Symposium</span>
        <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
      </button>

      {/* Main Container Card */}
      <div className="relative z-10 max-w-4xl w-full my-auto text-center py-8">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.25)] text-xs font-semibold text-cyan-300 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="tracking-wider uppercase font-mono font-bold">Welcome to Official Gateway</span>
          <span className="text-slate-500">•</span>
          <span className="text-emerald-400 font-mono">12-OCT-2026</span>
        </div>

        {/* Grand Holographic Crest / Logo Section */}
        <div className="relative mb-6 inline-flex flex-col items-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/20 border-2 border-cyan-400/60 flex items-center justify-center shadow-[0_0_35px_rgba(0,240,255,0.35)] relative group cursor-pointer animate-float-slow">
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 animate-pulse" />
            <Zap className="w-12 h-12 sm:w-14 sm:h-14 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
            <span className="absolute -bottom-2.5 px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-400 text-[10px] font-mono font-bold text-cyan-300 tracking-wider">
              2026 EDITION
            </span>
          </div>
        </div>

        {/* Institution Branding */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-400 uppercase font-mono mb-2">
          Adhiparasakthi Engineering College, Melmaruvathur
        </p>
        <p className="text-xs text-cyan-400/90 font-medium mb-3">
          Department of Information Technology &bull; NAAC &ldquo;A&rdquo; Grade &bull; NBA Accredited
        </p>

        {/* Grand Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mb-4 drop-shadow-[0_0_25px_rgba(0,240,255,0.25)]">
          IT SPECTRUM <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">INTELLECTRA</span>
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          National Level Technical Symposium uniting engineering pioneers, coders, and innovators. 
          Experience cutting-edge events, cash prize arenas, and an instant paperless digital pass experience.
        </p>

        {/* Live Countdown Clock Bar on Welcome Screen */}
        <div className="max-w-xl mx-auto mb-8 p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>12th October 2026 &bull; 09:00 AM IST</span>
            </span>
            <button
              onClick={() => {
                audioFX.playLaserWhoosh();
              }}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 cursor-pointer"
            >
              <Volume2 className="w-3 h-3 text-cyan-400" />
              <span>Chime FX</span>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {[
              { label: 'DAYS', val: timeLeft.days },
              { label: 'HOURS', val: timeLeft.hours },
              { label: 'MINUTES', val: timeLeft.minutes },
              { label: 'SECONDS', val: timeLeft.seconds },
            ].map((unit) => (
              <div key={unit.label} className="p-2 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="block text-2xl sm:text-3xl font-mono font-black text-cyan-400 tabular-nums">
                  {String(unit.val).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars / Value Propositions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8 text-left">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <Trophy className="w-5 h-5 text-amber-400 mb-1.5" />
            <p className="text-xs font-bold text-slate-200">₹25,000+ Prize Pool</p>
            <p className="text-[10px] text-slate-400">Cash awards for all podium winners</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <Utensils className="w-5 h-5 text-emerald-400 mb-1.5" />
            <p className="text-xs font-bold text-slate-200">Free Lunch &amp; Kit</p>
            <p className="text-[10px] text-slate-400">Delicious buffet for every delegate</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <Award className="w-5 h-5 text-cyan-400 mb-1.5" />
            <p className="text-xs font-bold text-slate-200">Anna Univ. Certificate</p>
            <p className="text-[10px] text-slate-400">Recognized participation credential</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <ShieldCheck className="w-5 h-5 text-purple-400 mb-1.5" />
            <p className="text-xs font-bold text-slate-200">Instant Digital Pass</p>
            <p className="text-[10px] text-slate-400">Instant QR code on registration</p>
          </div>
        </div>

        {/* Welcome CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              audioFX.playLaserWhoosh();
              onEnterPortal();
            }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer border border-cyan-300/40"
          >
            <span>Enter Symposium Portal</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              audioFX.playLaserWhoosh();
              onOpenRegister();
            }}
            className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-400/50 hover:border-cyan-400 font-bold text-sm sm:text-base transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Register Free (Digital Pass)</span>
          </button>

          <button
            onClick={() => {
              audioFX.playClick();
              onOpenTrackPass();
            }}
            className="px-5 py-4 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Track Existing Pass</span>
          </button>
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-xs text-slate-500 font-mono">
          Free Bus Transportation from Melmaruvathur Bus Stand &amp; Railway Station &bull; Helpline: +91 9342661192
        </p>

      </div>
    </div>
  );
};
