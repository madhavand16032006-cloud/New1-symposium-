import React from 'react';
import { 
  Laptop, Cpu, BarChart3, Gamepad2, Brain, 
  Crown, Gavel, Calendar, MapPin, Trophy, Utensils, 
  Award, QrCode, Phone, User, Users, Sparkles, CheckCircle2 
} from 'lucide-react';

interface DigitalPosterProps {
  onZoom?: () => void;
  isLightbox?: boolean;
}

export const DigitalPoster: React.FC<DigitalPosterProps> = ({ onZoom, isLightbox = false }) => {
  return (
    <div 
      onClick={onZoom}
      className={`w-full mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-cyan-400/80 shadow-[0_0_60px_rgba(0,180,255,0.4)] relative font-sans text-white select-none transition-all cursor-pointer bg-[#020B24] p-3 sm:p-6 md:p-8 group ${
        isLightbox ? 'max-w-5xl' : 'max-w-4xl'
      }`}
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 12%, rgba(0, 170, 255, 0.35) 0%, transparent 60%),
          radial-gradient(ellipse at 88% 88%, rgba(0, 110, 255, 0.28) 0%, transparent 60%),
          radial-gradient(ellipse at 12% 88%, rgba(0, 230, 255, 0.22) 0%, transparent 60%),
          linear-gradient(135deg, #020718 0%, #031138 50%, #01081F 100%)
        `
      }}
    >
      {/* Background Electric Circuit Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Cyber Diagonal Light Beams */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Corner Cyber Accents */}
      <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400" />

      {/* ============================================================== */}
      {/* SECTION 1: TOP INSTITUTION HEADER & ACCREDITATION BADGES       */}
      {/* ============================================================== */}
      <div className="relative z-10 flex items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-5">
        
        {/* Left: Authentic Red Circular College Seal */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-red-500 bg-red-950/90 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.6)] relative">
            <div className="w-full h-full rounded-full border border-red-400 flex flex-col items-center justify-center text-center p-1 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white relative overflow-hidden">
              <span className="text-[6.5px] sm:text-[8px] font-black uppercase tracking-tighter leading-tight drop-shadow">
                ADHIPARASAKTHI
              </span>
              <span className="text-[5.5px] sm:text-[7px] font-bold opacity-95 leading-none my-0.5">
                ENGINEERING COLLEGE
              </span>
              <span className="text-[5px] sm:text-[6px] font-mono tracking-tighter opacity-90">
                MELMARUVATHUR
              </span>
              <div className="w-4/5 h-[0.5px] bg-red-300 my-0.5" />
              <span className="text-[4.5px] sm:text-[5.5px] font-black text-amber-200 tracking-tight leading-none uppercase">
                STUDY • SPIRITUALITY • SERVICE
              </span>
            </div>
          </div>
        </div>

        {/* Center: College Accreditation Titles */}
        <div className="text-center flex-1 px-1 sm:px-2">
          <span className="text-xs sm:text-base font-serif italic text-cyan-200 font-bold tracking-widest block drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">
            Om Sakthi
          </span>
          <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight font-display uppercase leading-tight drop-shadow-[0_2px_15px_rgba(0,240,255,0.8)] mt-0.5">
            ADHIPARASAKTHI ENGINEERING COLLEGE
          </h2>
          
          <div className="inline-block my-1 px-3 sm:px-4 py-0.5 rounded-full bg-blue-700 border border-cyan-300 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-100 uppercase shadow-[0_0_12px_rgba(0,240,255,0.5)]">
            AUTONOMOUS
          </div>

          <p className="text-[9px] sm:text-xs md:text-sm text-slate-100 font-medium leading-tight">
            Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai
          </p>
          <p className="text-[8.5px] sm:text-xs text-cyan-300 font-medium">
            Accredited by NAAC &ldquo;A&rdquo; Grade &bull; (An ISO 9001:2015 Certified Institution)
          </p>
          <p className="text-[9px] sm:text-xs font-bold text-white font-mono mt-0.5 tracking-wide">
            Melmaruvathur &ndash; 603319
          </p>
        </div>

        {/* Right: Motto + Gold NAAC Laurel Wreath Badge */}
        <div className="flex flex-col items-center shrink-0">
          <span className="text-[10px] sm:text-sm font-serif italic font-black text-cyan-300 leading-tight mb-1 text-right drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
            Dream<br />Innovate<br />Achieve
          </span>

          <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 border-2 border-amber-200 flex flex-col items-center justify-center text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.6)] p-1 text-center font-bold">
            <span className="text-lg sm:text-2xl font-black leading-none">A</span>
            <span className="text-[8.5px] sm:text-[10px] font-black uppercase tracking-tight">NAAC</span>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-wider font-extrabold opacity-95">APRIL</span>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* SECTION 2: GLOWING TITLE BANNER (INTELLECTRA 2K26)             */}
      {/* ============================================================== */}
      <div className="relative z-10 text-center my-3 sm:my-5 py-2.5 sm:py-4 border-y border-cyan-500/40 bg-gradient-to-r from-transparent via-cyan-950/60 to-transparent">
        <div className="flex items-center justify-center gap-2 sm:gap-6">
          
          {/* Digital Brain Outline Profile */}
          <div className="relative w-12 h-12 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-lg animate-pulse" />
            <Brain className="w-10 h-10 sm:w-16 sm:h-16 text-cyan-300 drop-shadow-[0_0_15px_#00F0FF]" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white italic drop-shadow-[0_0_35px_rgba(0,240,255,0.9)]">
            INTELLECTRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">2K26</span>
          </h1>
        </div>

        <p className="text-xs sm:text-base md:text-lg font-black tracking-[0.25em] text-cyan-300 uppercase mt-1 sm:mt-2 drop-shadow-md font-mono">
          NATIONAL LEVEL SYMPOSIUM
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] text-slate-200 uppercase font-mono mt-0.5">
          BY DEPARTMENT OF INFORMATION TECHNOLOGY
        </p>

        {/* 12 OCTOBER 2026 Date Pill */}
        <div className="inline-flex items-center gap-2 mt-2 sm:mt-3 px-4 sm:px-6 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 text-white border border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] text-xs sm:text-base font-mono font-black">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-200" />
          <span>12 OCTOBER 2026</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* SECTION 3: 7 EVENTS SHOWCASE (TECHNICAL & NON-TECHNICAL)       */}
      {/* ============================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 my-3 sm:my-5">
        
        {/* Technical Events (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-cyan-950/50 border-2 border-cyan-400/60 p-3 sm:p-4 shadow-lg flex flex-col justify-between">
          <div className="inline-block px-3 sm:px-4 py-1 rounded-lg bg-blue-600 text-white font-mono font-black text-[10px] sm:text-xs tracking-wider uppercase mb-2 shadow-md text-center">
            TECHNICAL EVENTS
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            {/* 1. PROMPT STACK */}
            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex flex-col items-center justify-between shadow-sm">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border border-cyan-400/50">
                <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-black text-white leading-tight uppercase font-mono">
                PROMPT STACK
              </span>
            </div>

            {/* 2. CODESMITH INNOVATION MEET */}
            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex flex-col items-center justify-between shadow-sm">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border border-cyan-400/50">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[9.5px] sm:text-[11px] font-black text-white leading-tight uppercase font-mono">
                CODESMITH<br />INNOVATION MEET
              </span>
            </div>

            {/* 3. INFOGRAPHIX */}
            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex flex-col items-center justify-between shadow-sm">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border border-cyan-400/50">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-black text-white leading-tight uppercase font-mono">
                INFOGRAPHIX
              </span>
            </div>
          </div>
        </div>

        {/* Non-Technical Events (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-cyan-950/50 border-2 border-cyan-400/60 p-3 sm:p-4 shadow-lg flex flex-col justify-between">
          <div className="inline-block px-3 sm:px-4 py-1 rounded-lg bg-blue-600 text-white font-mono font-black text-[10px] sm:text-xs tracking-wider uppercase mb-2 shadow-md text-center">
            NON-TECHNICAL EVENTS
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            {/* 1. BOOYAH BATTLE */}
            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex flex-col items-center justify-between shadow-sm">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border border-cyan-400/50">
                <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[9.5px] sm:text-[11px] font-black text-white leading-tight uppercase font-mono">
                BOOYAH<br />BATTLE
              </span>
            </div>

            {/* 2. NEUROLINK */}
            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex flex-col items-center justify-between shadow-sm">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border border-cyan-400/50">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-black text-white leading-tight uppercase font-mono">
                NEUROLINK
              </span>
            </div>

            {/* 3. CHECKMATE CLASH */}
            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex flex-col items-center justify-between shadow-sm">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border border-cyan-400/50">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[9.5px] sm:text-[11px] font-black text-white leading-tight uppercase font-mono">
                CHECKMATE<br />CLASH
              </span>
            </div>

            {/* 4. AUCTION ARENA */}
            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex flex-col items-center justify-between shadow-sm">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border border-cyan-400/50">
                <Gavel className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[9.5px] sm:text-[11px] font-black text-white leading-tight uppercase font-mono">
                AUCTION<br />ARENA
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* SECTION 4: COORDINATORS & REGISTRATION PERKS ROW               */}
      {/* ============================================================== */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 my-2 sm:my-4">
        
        {/* Left Side: Faculty, Convener, HOD & Student Coordinators (7 cols) */}
        <div className="md:col-span-7 space-y-2.5">
          
          {/* Top Coordinators Bar */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/35 text-[10px] sm:text-xs">
              <span className="text-cyan-400 font-bold block uppercase font-mono text-[9px] sm:text-[10px]">
                FACULTY CO-ORDINATORS
              </span>
              <p className="font-bold text-slate-200 mt-1 leading-tight text-[9px] sm:text-[10.5px]">
                • Mrs. S. SASIREKHA, AP/IT<br />
                • Mrs. S. LAVANYA, AP/IT
              </p>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/35 text-[10px] sm:text-xs">
              <span className="text-cyan-400 font-bold block uppercase font-mono text-[9px] sm:text-[10px]">
                CONVENER
              </span>
              <p className="font-bold text-white mt-1.5 leading-tight text-[10px] sm:text-[11px]">
                Mr. P. SAKTHIVEL, APIT
              </p>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/35 text-[10px] sm:text-xs">
              <span className="text-cyan-400 font-bold block uppercase font-mono text-[9px] sm:text-[10px]">
                HOD/IT
              </span>
              <p className="font-bold text-white mt-1.5 leading-tight text-[10px] sm:text-[11px]">
                Mr. K. HEMAKUMAR
              </p>
            </div>
          </div>

          {/* Student Coordinators Strip */}
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-cyan-500/35 text-xs">
            <span className="text-cyan-400 font-bold uppercase font-mono text-[9.5px] sm:text-[11px] block mb-1">
              STUDENT CO-ORDINATORS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-[11px] font-mono">
              <div>
                <span className="font-bold text-white block">Mr. K. VENKATESH</span>
                <span className="text-cyan-300 font-semibold">(9342661192)</span>
              </div>
              <div>
                <span className="font-bold text-white block">Ms. P. JAYASRI</span>
                <span className="text-cyan-300 font-semibold">(9655777274)</span>
              </div>
              <div>
                <span className="font-bold text-white block">Mr. L. BALAJI</span>
                <span className="text-cyan-300 font-semibold">(8608802727)</span>
              </div>
              <div>
                <span className="font-bold text-white block">Ms. S. MOHANAPRIYA</span>
                <span className="text-cyan-300 font-semibold">(6374663499)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Registration, Cash Prizes, Lunch & QR Code (5 cols) */}
        <div className="md:col-span-5 grid grid-cols-12 gap-2">
          
          {/* Cash Prizes & Free Lunch Banner (7 cols) */}
          <div className="col-span-7 flex flex-col justify-between space-y-2">
            
            {/* Cash Prize & Lunch Badge */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 border-2 border-cyan-400 text-center shadow-md">
              <span className="text-[10px] sm:text-xs font-serif italic text-cyan-300 block">
                Register Now EXO
              </span>
              <p className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wide drop-shadow-sm flex items-center justify-center gap-1">
                <span>EXCITING CASH PRIZES</span>
                <Trophy className="w-4 h-4 text-amber-300" />
              </p>
              <div className="mt-1 pt-1 border-t border-cyan-500/50 flex items-center justify-center gap-1 text-[10px] sm:text-xs text-emerald-300 font-bold">
                <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                <span>Free Lunch &amp; Refreshment</span>
              </div>
            </div>

            {/* Registration Details */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-center font-mono">
              <span className="text-[9px] sm:text-[10px] text-slate-400 block uppercase font-bold">ONLINE REGISTRATION</span>
              <span className="text-lg sm:text-xl font-black text-white">150</span>
              <span className="text-[10px] text-cyan-300 font-bold ml-1">PER HEAD</span>
              <span className="text-[8.5px] sm:text-[9.5px] text-amber-400 block font-bold mt-0.5">ON-SPOT REGISTRATION AVAILABLE</span>
              <div className="flex items-center justify-center gap-1 text-[9px] sm:text-[10px] text-slate-300 mt-1 font-semibold">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Venue: Central Library</span>
              </div>
            </div>

          </div>

          {/* Scannable QR Code Box (5 cols) */}
          <div className="col-span-5 p-2 rounded-xl bg-slate-900/90 border-2 border-cyan-400 flex flex-col items-center justify-center text-center shadow-lg">
            <div className="w-18 h-18 sm:w-22 sm:h-22 bg-white p-1 rounded-lg shadow-sm mb-1.5 flex items-center justify-center">
              <QrCode className="w-full h-full text-slate-900" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-tight block">
              SCAN TO REGISTER
            </span>
          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* SECTION 5: INSTITUTIONAL LEADERSHIP FOOTER                     */}
      {/* ============================================================== */}
      <div className="relative z-10 pt-2.5 mt-2 border-t border-cyan-500/40 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
        <div className="p-1.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <span className="text-[8.5px] sm:text-[9.5px] text-cyan-400 uppercase font-bold block">AO</span>
          <span className="text-[10px] sm:text-[11px] font-bold text-white">Mr. M. SADHANANDAN</span>
        </div>
        <div className="p-1.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <span className="text-[8.5px] sm:text-[9.5px] text-cyan-400 uppercase font-bold block">DEAN</span>
          <span className="text-[10px] sm:text-[11px] font-bold text-white">APEC DEAN</span>
        </div>
        <div className="p-1.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <span className="text-[8.5px] sm:text-[9.5px] text-cyan-400 uppercase font-bold block">VICE PRINCIPAL</span>
          <span className="text-[10px] sm:text-[11px] font-bold text-white">Dr. V. RAMASAMY</span>
        </div>
        <div className="p-1.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <span className="text-[8.5px] sm:text-[9.5px] text-cyan-400 uppercase font-bold block">PRINCIPAL</span>
          <span className="text-[10px] sm:text-[11px] font-bold text-white">Dr. A. BHUVANESWARI</span>
        </div>
      </div>

    </div>
  );
};
