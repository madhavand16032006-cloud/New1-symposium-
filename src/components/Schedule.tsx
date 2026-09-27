import React, { useState } from 'react';
import { Clock, MapPin, Coffee, Utensils, Trophy, Sparkles, BookOpen, Layers } from 'lucide-react';
import { SCHEDULE } from '../data/symposiumData';
import { audioFX } from '../utils/audioFX';

export const Schedule: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'technical' | 'non-technical'>('all');

  const filteredSchedule = SCHEDULE.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'technical') return item.type === 'technical' || item.type === 'general';
    if (filterType === 'non-technical') return item.type === 'non-technical' || item.type === 'general';
    return true;
  });

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'technical':
        return {
          badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-400/50',
          dot: 'bg-cyan-400 shadow-[0_0_10px_#00F0FF]',
          border: 'border-cyan-500/30',
        };
      case 'non-technical':
        return {
          badge: 'bg-purple-950/80 text-purple-300 border-purple-400/50',
          dot: 'bg-purple-400 shadow-[0_0_10px_#A855F7]',
          border: 'border-purple-500/30',
        };
      case 'break':
        return {
          badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-400/50',
          dot: 'bg-emerald-400 shadow-[0_0_10px_#10B981]',
          border: 'border-emerald-500/30',
        };
      default:
        return {
          badge: 'bg-slate-900 text-slate-300 border-slate-700',
          dot: 'bg-blue-400 shadow-[0_0_10px_#38BDF8]',
          border: 'border-slate-800',
        };
    }
  };

  return (
    <section id="schedule" className="py-20 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2 font-mono">
            Hour-By-Hour Roadmap
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Symposium Schedule &amp; Agenda
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Monday, October 12, 2026 &bull; Central Library &amp; IT Department, APEC Melmaruvathur
          </p>

          {/* Schedule view toggles */}
          <div className="inline-flex items-center p-1.5 bg-[#0A1020]/90 border border-cyan-500/30 rounded-2xl shadow-lg mt-8 backdrop-blur-md">
            <button
              onClick={() => {
                audioFX.playClick();
                setFilterType('all');
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Master Agenda
            </button>
            <button
              onClick={() => {
                audioFX.playClick();
                setFilterType('technical');
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filterType === 'technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Technical Tracks
            </button>
            <button
              onClick={() => {
                audioFX.playClick();
                setFilterType('non-technical');
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filterType === 'non-technical'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Non-Technical Tracks
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-32 pl-6 sm:pl-8 space-y-8">
          {filteredSchedule.map((item, idx) => {
            const styles = getTypeStyle(item.type);
            return (
              <div key={idx} className="relative group">
                
                {/* Node indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[#060913] ${styles.dot}`}
                />

                {/* Time pill (Desktop Left offset) */}
                <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono font-bold text-cyan-300 mb-1 sm:mb-0">
                  {item.time}
                </div>

                {/* Card Container */}
                <div
                  className={`p-5 rounded-2xl bg-[#0A1020]/90 border ${styles.border} shadow-lg hover:border-cyan-400/50 transition-all backdrop-blur-xl group-hover:-translate-y-0.5`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-white font-display">
                      {item.title}
                    </h3>
                    <span className={`text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full border ${styles.badge}`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item.venue}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
