import React from 'react';
import { 
  ShieldCheck, QrCode, Search, CheckCircle, 
  Utensils, Calendar, MapPin, Printer, ArrowRight,
  Sparkles, X, Smartphone, Award, HelpCircle, CheckCircle2 
} from 'lucide-react';
import { audioFX } from '../utils/audioFX';

interface PassExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTracker: () => void;
  onOpenRegister: () => void;
}

export const PassExplainerModal: React.FC<PassExplainerModalProps> = ({
  isOpen,
  onClose,
  onOpenTracker,
  onOpenRegister,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0A1020] rounded-3xl shadow-2xl border border-cyan-500/40 p-6 sm:p-8 text-left text-slate-100 my-8">
        {/* Close Button */}
        <button
          onClick={() => {
            audioFX.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              Official Symposium Credential
            </span>
            <h3 className="text-2xl font-black font-display tracking-tight text-white">
              Instant Digital Pass &amp; Tracking Guide
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          Everything you need to know about your electronic delegate badge, campus entry, free lunch token, and how to verify your registration status anytime.
        </p>

        {/* Section 1: What is it? */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 mb-6">
          <h4 className="text-base font-bold text-cyan-300 flex items-center gap-2 mb-2 font-display">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>1. What is the Instant Digital Pass?</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            The Instant Digital Pass is a cryptographic, verified electronic delegate badge generated immediately upon completing symposium registration for <strong>INTELLECTRA 2026</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Unique Pass ID (e.g. IT26-2026)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Fast-Track QR Entry at Central Library</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>100% Free Buffet Lunch Token</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Anna University Certificate eligibility</span>
            </div>
          </div>
        </div>

        {/* Section 2: How to Track */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-purple-500/30 mb-6">
          <h4 className="text-base font-bold text-purple-300 flex items-center gap-2 mb-2 font-display">
            <Search className="w-4 h-4 text-purple-400" />
            <span>2. How do I Track My Digital Pass?</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            You can verify your admission and view your scannable pass badge at any time using our built-in <strong>Pass Tracker</strong>:
          </p>
          <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside font-sans">
            <li>Click the <strong className="text-cyan-300">Track Pass</strong> button on the navbar or registration area.</li>
            <li>Enter your <strong className="text-cyan-300">Pass ID</strong> (e.g. <span className="font-mono text-cyan-300">IT26-2026</span>) or your registered <strong>10-digit WhatsApp Phone Number</strong>.</li>
            <li>Instantly view your admission confirmation, selected events, room allocation, and digital badge.</li>
            <li>Save or take a screenshot to show at the reception desk on <strong>12th October 2026</strong>.</li>
          </ol>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
          <button
            onClick={() => {
              audioFX.playLaserWhoosh();
              onClose();
              onOpenTracker();
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-400/50 text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span>Open Pass Tracker Now</span>
          </button>

          <button
            onClick={() => {
              audioFX.playLaserWhoosh();
              onClose();
              onOpenRegister();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] cursor-pointer flex items-center gap-2"
          >
            <span>Generate New Pass</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
