import React, { useState } from 'react';
import { 
  Sparkles, Download, Maximize2, X, Share2, Check, 
  Trophy, Utensils, Award, BookOpen, User, Eye, Layers, 
  Laptop, Cpu, BarChart3, Gamepad2, Brain, Crown, Gavel, MapPin, QrCode, Printer 
} from 'lucide-react';
import { COLLEGE_INFO, STUDENT_COORDINATORS, LEADERSHIP_COORDINATORS } from '../data/symposiumData';
import { DigitalPoster } from './DigitalPoster';
import { audioFX } from '../utils/audioFX';

interface PosterSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export const PosterSection: React.FC<PosterSectionProps> = ({ 
  isModalOpen = false, 
  onCloseModal 
}) => {
  const [internalLightboxOpen, setInternalLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const isLightboxActive = isModalOpen || internalLightboxOpen;
  const handleClose = () => {
    setInternalLightboxOpen(false);
    if (onCloseModal) onCloseModal();
  };

  const handleShare = () => {
    audioFX.playClick();
    if (navigator.share) {
      navigator.share({
        title: 'IT Spectrum 2026 - INTELLECTRA 2K26 Official Poster',
        text: 'Official National Level Technical Symposium Poster - Adhiparasakthi Engineering College, Melmaruvathur.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrintOrDownload = () => {
    audioFX.playLaserWhoosh();
    window.print();
  };

  return (
    <section id="poster" className="py-20 relative z-20 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 text-xs font-semibold mb-2 shadow-sm font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>OFFICIAL SYMPOSIUM BROCHURE &amp; POSTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight text-balance">
            Official Symposium Poster &bull; INTELLECTRA 2K26
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-mono">
            Adhiparasakthi Engineering College (Autonomous), Melmaruvathur &bull; Department of Information Technology
          </p>
        </div>

        {/* Primary Poster Display: 100% Authentic, Vector-Crisp Digital Blueprint */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-5xl transition-all duration-300 hover:scale-[1.005]">
            <DigitalPoster onZoom={() => setInternalLightboxOpen(true)} />
          </div>

          {/* Poster Quick Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={() => {
                audioFX.playClick();
                setInternalLightboxOpen(true);
              }}
              className="px-5 py-2.5 text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Maximize2 className="w-4 h-4 text-cyan-400" />
              <span>Full Screen Inspection</span>
            </button>
            
            <button
              onClick={handlePrintOrDownload}
              className="px-5 py-2.5 text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print / Save Official Poster</span>
            </button>

            <button
              onClick={handleShare}
              className="px-5 py-2.5 text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied Link</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-cyan-400" />
                  <span>Share Brochure</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {isLightboxActive && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
        >
          <div
            className="relative max-w-6xl w-full my-auto flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top action controls */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold font-display">INTELLECTRA 2K26 &bull; Official Symposium Poster</span>
                <span className="text-xs text-cyan-400 hidden sm:inline font-mono">Adhiparasakthi Engineering College</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintOrDownload}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                  title="Print / Save Poster"
                >
                  <Printer className="w-4 h-4 text-cyan-400" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                  title="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Poster high-res frame */}
            <div className="w-full max-h-[88vh] overflow-y-auto rounded-3xl p-1">
              <DigitalPoster isLightbox={true} />
            </div>
            
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Adhiparasakthi Engineering College (Autonomous), Melmaruvathur &bull; Department of Information Technology
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
