import React, { useState } from 'react';
import { 
  Sparkles, Zap, Shield, Eye, Volume2, VolumeX, 
  Sliders, Terminal, Radio, Palette, CheckCircle, Info, Home 
} from 'lucide-react';
import { useTheme, ThemeType, AnimationSpeed } from '../context/ThemeContext';
import { audioFX } from '../utils/audioFX';

interface ThemeSwitcherProps {
  onOpenPassGuide: () => void;
  onOpenPassTracker: () => void;
  onOpenWelcome: () => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  onOpenPassGuide,
  onOpenPassTracker,
  onOpenWelcome,
}) => {
  const { 
    theme, setTheme, 
    animationSpeed, setAnimationSpeed, 
    soundEnabled, toggleSound,
    interactiveCursor, toggleInteractiveCursor 
  } = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);

  const themesList: { id: ThemeType; name: string; tag: string; icon: string; color: string }[] = [
    { id: 'cyber', name: 'Cyber Neon', tag: 'Neon Pulse & Lasers', icon: '⚡', color: '#00F0FF' },
    { id: 'matrix', name: 'Matrix Code', tag: 'Digital Rain Stream', icon: '🌌', color: '#00FF66' },
    { id: 'synthwave', name: 'Anime Synth', tag: 'Holo Glow & Stars', icon: '🔮', color: '#EC4899' },
    { id: 'glass', name: 'Cosmic Glass', tag: 'Obsidian Tech UI', icon: '💎', color: '#38BDF8' },
  ];

  const speedOptions: { id: AnimationSpeed; label: string }[] = [
    { id: 'hyper', label: 'Hyper ⚡' },
    { id: 'smooth', label: 'Smooth 🌊' },
    { id: 'minimal', label: 'Eco 🌿' },
  ];

  return (
    <div className="fixed bottom-5 left-5 z-40">
      {/* Floating Pill Toggle Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
            audioFX.playClick();
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer border bg-[#0A1020]/95 text-cyan-300 border-cyan-500/50 hover:border-cyan-400"
          title="Customize Animation Theme & SFX"
        >
          <Palette className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          <span className="hidden sm:inline">Theme &amp; FX:</span>
          <span className="uppercase tracking-wider font-mono font-bold text-[11px] text-white">
            {theme}
          </span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
        </button>

        {/* Quick Welcome Page Button */}
        <button
          onClick={() => {
            audioFX.playLaserWhoosh();
            onOpenWelcome();
          }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-[#0A1020]/95 text-cyan-300 hover:text-white hover:bg-slate-900 transition-all shadow-md border border-cyan-500/40 cursor-pointer"
          title="Open Welcome Portal"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Welcome Gate</span>
        </button>

        {/* Quick Audio Toggle */}
        <button
          onClick={() => {
            toggleSound();
          }}
          className={`p-2 rounded-full text-xs transition-all shadow-md backdrop-blur-md border cursor-pointer ${
            soundEnabled
              ? 'bg-slate-900 text-cyan-300 border-cyan-400/50'
              : 'bg-slate-900 text-slate-500 border-slate-700'
          }`}
          title={soundEnabled ? 'Mute SFX Synth' : 'Enable Audio Synth FX'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Quick Pass Tracker Pill */}
        <button
          onClick={() => {
            audioFX.playClick();
            onOpenPassTracker();
          }}
          className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold bg-[#0A1020]/90 text-slate-200 hover:text-white hover:bg-slate-900 transition-all shadow-md border border-slate-700 hover:border-cyan-500/50 cursor-pointer"
        >
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Track Pass</span>
        </button>
      </div>

      {/* Expanded Theme Customizer Panel */}
      {isExpanded && (
        <div className="mt-2 p-4 rounded-3xl w-80 sm:w-96 shadow-2xl backdrop-blur-2xl border border-cyan-500/40 bg-[#0A1020]/98 text-slate-100 transition-all animate-float-slow text-left shadow-[0_0_35px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-sm tracking-tight font-display text-white">
                Symposium Visual &amp; Animation FX
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Theme Mode Selector */}
          <div className="mb-4">
            <label className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-2 font-mono">
              Choose Animation Theme
            </label>
            <div className="grid grid-cols-2 gap-2">
              {themesList.map((t) => {
                const isSelected = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-500/15 shadow-[0_0_15px_rgba(0,240,255,0.25)] ring-1 ring-cyan-400 text-white'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-950/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-base">{t.icon}</span>
                      {isSelected && <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">{t.name}</p>
                      <p className="text-[10px] text-slate-400">{t.tag}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animation Intensity & Speed */}
          <div className="mb-3">
            <label className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1.5 font-mono">
              Animation Intensity
            </label>
            <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              {speedOptions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setAnimationSpeed(s.id)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    animationSpeed === s.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xs font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Extra Toggles */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
            <button
              onClick={toggleInteractiveCursor}
              className={`p-2.5 rounded-xl border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                interactiveCursor
                  ? 'border-cyan-400/60 bg-cyan-500/10 text-cyan-300'
                  : 'border-slate-800 text-slate-400 bg-slate-950/60'
              }`}
            >
              <Zap className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
              <span className="text-[11px] leading-tight font-medium">
                Cursor Nodes: {interactiveCursor ? 'Active' : 'Off'}
              </span>
            </button>

            <button
              onClick={toggleSound}
              className={`p-2.5 rounded-xl border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                soundEnabled
                  ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-300'
                  : 'border-slate-800 text-slate-400 bg-slate-950/60'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 shrink-0" />}
              <span className="text-[11px] leading-tight font-medium">
                Audio Tone: {soundEnabled ? 'ON' : 'Muted'}
              </span>
            </button>
          </div>

          {/* Direct Pass Action Links */}
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <button
              onClick={() => {
                setIsExpanded(false);
                onOpenWelcome();
              }}
              className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Open Welcome Gate</span>
            </button>
            <span className="text-[10px] text-slate-400 font-mono">Oct 12, 2026</span>
          </div>
        </div>
      )}
    </div>
  );
};
