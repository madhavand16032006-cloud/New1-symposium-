import React from 'react';
import { ArrowUp, Zap, Sparkles } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';
import { audioFX } from '../utils/audioFX';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    audioFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050813] text-white pt-16 pb-12 border-t border-cyan-500/20 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top zone */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Institution Info (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 flex items-center justify-center font-bold text-sm font-mono shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-xl font-bold font-display tracking-tight text-white block">
                  INTELLECTRA 2026
                </span>
                <span className="text-xs text-cyan-400 font-mono block">
                  IT Spectrum &bull; National Level Technical Symposium
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md pt-2">
              Organized by the Department of Information Technology, Adhiparasakthi Engineering College, Melmaruvathur &ndash; 603319.
            </p>

            <div className="text-[11px] text-slate-400 space-y-1 pt-1 font-mono">
              <p>&bull; Approved by AICTE, New Delhi &bull; Affiliated to Anna University, Chennai</p>
              <p>&bull; Accredited with NAAC &ldquo;A&rdquo; Grade &bull; ISO 9001:2015 Certified</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold text-cyan-400 uppercase tracking-wider text-[11px] mb-3 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">About IT Dept</a></li>
              <li><a href="#events" className="hover:text-cyan-300 transition-colors">Symposium Events</a></li>
              <li><a href="#perks" className="hover:text-cyan-300 transition-colors">Perks &amp; Prizes</a></li>
              <li><a href="#schedule" className="hover:text-cyan-300 transition-colors">Agenda (Oct 12)</a></li>
              <li><a href="#register" className="hover:text-cyan-300 transition-colors">Instant Digital Pass</a></li>
              <li><a href="#venue" className="hover:text-cyan-300 transition-colors">Campus Map &amp; Transit</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Key Coordinators & Action (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-cyan-400 uppercase tracking-wider text-[11px] mb-3 font-mono">
              Direct Contact
            </h4>
            <p className="text-slate-300">
              Student Hotline: <br />
              <span className="font-mono text-cyan-300 font-bold">+91 9342661192</span>
            </p>
            <p className="text-slate-300">
              Venue: <br />
              <span className="text-slate-400">APEC Central Library, Melmaruvathur</span>
            </p>
            <button
              onClick={scrollToTop}
              className="mt-3 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-400/50 flex items-center gap-1.5 text-xs transition-all cursor-pointer shadow-sm"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; 2026 Department of Information Technology, Adhiparasakthi Engineering College. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed by</span>
            <span className="font-bold text-cyan-400 tracking-wide font-mono">{COLLEGE_INFO.designedBy}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
