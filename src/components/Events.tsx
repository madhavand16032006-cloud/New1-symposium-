import React, { useState } from 'react';
import { 
  Code2, Sparkles, Users, Clock, MapPin, Trophy, 
  ExternalLink, CheckCircle2, ChevronRight, X, PhoneCall, Zap 
} from 'lucide-react';
import { EVENTS } from '../data/symposiumData';
import { EventItem } from '../types';
import { audioFX } from '../utils/audioFX';

interface EventsProps {
  onSelectEventForRegistration: (eventId: string) => void;
}

export const Events: React.FC<EventsProps> = ({ onSelectEventForRegistration }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'non-technical'>('all');
  const [selectedModalEvent, setSelectedModalEvent] = useState<EventItem | null>(null);

  const filteredEvents = EVENTS.filter((event) => {
    if (activeCategory === 'all') return true;
    return event.category === activeCategory;
  });

  return (
    <section id="events" className="py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2 font-mono">
            Compete &bull; Showcase &bull; Conquer
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Symposium Event Arenas
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Handcrafted technical crucible and strategic non-technical tournaments. 
            Win exciting cash awards from ₹25,000+ pool, prestigious trophies, and Anna University recognized certificates.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="inline-flex items-center p-1.5 bg-[#0A1020]/90 border border-cyan-500/30 rounded-2xl shadow-lg mt-8 backdrop-blur-md">
            <button
              onClick={() => {
                audioFX.playClick();
                setActiveCategory('all');
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              All Events ({EVENTS.length})
            </button>
            <button
              onClick={() => {
                audioFX.playClick();
                setActiveCategory('technical');
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Technical ({EVENTS.filter((e) => e.category === 'technical').length})
            </button>
            <button
              onClick={() => {
                audioFX.playClick();
                setActiveCategory('non-technical');
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'non-technical'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Non-Technical ({EVENTS.filter((e) => e.category === 'non-technical').length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#0A1020]/90 rounded-3xl border border-cyan-500/25 overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:border-cyan-400/60 transition-all duration-300 flex flex-col group backdrop-blur-xl hover:-translate-y-1"
            >
              {/* Image banner with fail-safe CSS fallback */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add(
                        'bg-gradient-to-br',
                        'from-[#0A1020]',
                        'to-[#1E1B4B]',
                        'flex',
                        'items-center',
                        'justify-center'
                      );
                    }
                  }}
                />
                
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020] via-black/40 to-transparent" />
                
                {/* Category label */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg backdrop-blur-md shadow-md border ${
                    event.category === 'technical'
                      ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400/50'
                      : 'bg-purple-950/90 text-purple-300 border-purple-400/50'
                  }`}>
                    {event.category === 'technical' ? '⚡ Technical' : '🎯 Non-Technical'}
                  </span>
                </div>

                {/* Team size tag */}
                <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-md">
                  <Users className="w-3.5 h-3.5 text-cyan-300" />
                  <span className="font-mono">{event.teamSize}</span>
                </div>

                {/* Time slot */}
                <div className="absolute bottom-3 right-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-md">
                  <Clock className="w-3.5 h-3.5 text-cyan-300" />
                  <span className="font-mono">{event.time.split('-')[0].trim()}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                      {event.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 shrink-0">
                      🏆 Cash Prize
                    </span>
                  </div>
                  
                  <p className="text-xs font-semibold text-cyan-400 mt-1 font-mono">
                    {event.shortTagline}
                  </p>
                  
                  <p className="text-sm text-slate-300 mt-3 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="font-semibold text-cyan-300">Focus:</span>
                    {event.skills.slice(0, 3).map((skill, idx) => (
                      <React.Fragment key={skill}>
                        <span className="text-slate-300">{skill}</span>
                        {idx < Math.min(event.skills.length, 3) - 1 && (
                          <span aria-hidden="true" className="text-slate-600">&bull;</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      audioFX.playClick();
                      setSelectedModalEvent(event);
                    }}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-cyan-400/50 hover:text-cyan-300 rounded-xl transition-all cursor-pointer text-center"
                  >
                    Rules &amp; Rounds
                  </button>
                  <button
                    onClick={() => {
                      audioFX.playLaserWhoosh();
                      onSelectEventForRegistration(event.id);
                    }}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer text-center flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>Register</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Event Modal */}
      {selectedModalEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedModalEvent(null)}
        >
          <div 
            className="bg-[#0A1020] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-cyan-500/40 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedModalEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title & Category */}
            <div className="mb-4">
              <span className="text-xs font-bold tracking-wider uppercase text-cyan-400 block mb-1 font-mono">
                {selectedModalEvent.category === 'technical' ? '⚡ Technical Event Track' : '🎯 Non-Technical Event Track'}
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                {selectedModalEvent.title}
              </h3>
              <p className="text-sm font-semibold text-slate-400 mt-1 font-mono">
                {selectedModalEvent.shortTagline}
              </p>
            </div>

            {/* Event Key Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs mb-6 font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">Team Size</span>
                <span className="font-bold text-slate-100">{selectedModalEvent.teamSize}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Timing</span>
                <span className="font-bold text-cyan-300">{selectedModalEvent.time}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Venue</span>
                <span className="font-bold text-slate-100 truncate block" title={selectedModalEvent.venue}>
                  {selectedModalEvent.venue}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Prize</span>
                <span className="font-bold text-amber-400">Cash Award 🏆</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                Event Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedModalEvent.description}
              </p>
            </div>

            {/* Rounds */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                Competition Rounds
              </h4>
              <div className="space-y-2">
                {selectedModalEvent.rounds.map((round, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold text-[10px] flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{round}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                Rules &amp; Guidelines
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedModalEvent.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Coordinators */}
            <div className="mb-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                Event Student Coordinators
              </h4>
              <div className="flex flex-wrap gap-4 text-xs">
                {selectedModalEvent.coordinators.map((coord) => (
                  <a
                    key={coord.name}
                    href={`tel:${coord.phone}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 font-semibold"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{coord.name} ({coord.phone})</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedModalEvent(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const eventId = selectedModalEvent.id;
                  setSelectedModalEvent(null);
                  audioFX.playLaserWhoosh();
                  onSelectEventForRegistration(eventId);
                }}
                className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
              >
                Proceed to Register for {selectedModalEvent.title}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
