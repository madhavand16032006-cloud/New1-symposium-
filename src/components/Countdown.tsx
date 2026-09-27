import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Bell, Volume2, VolumeX, Sparkles, Radio } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

export const Countdown: React.FC = () => {
  // Target date requested by user: 12th Oct 2026 9:00 AM IST
  const targetDate = new Date('2026-10-12T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  const [toneEnabled, setToneEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Pleasant subtle synthesized audio chime function
  const playChimeTone = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15); // E5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // Audio autoplay gracefully handled
    }
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const toggleTone = () => {
    const nextState = !toneEnabled;
    setToneEnabled(nextState);
    if (nextState) {
      playChimeTone();
    }
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent('IT Spectrum 2026 - INTELLECTRA (Adhiparasakthi Engineering College)');
    const details = encodeURIComponent('National Level Technical Symposium by B.Tech Information Technology Department, APEC Melmaruvathur. Venue: Central Library. Contact: 9342661192');
    const location = encodeURIComponent('Adhiparasakthi Engineering College, Melmaruvathur - 603319');
    // 12th Oct 2026 09:00 AM IST = 03:30 AM UTC
    const start = '20261012T033000Z';
    const end = '20261012T110000Z';
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const timerUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section className="py-8 bg-[#070B18]/90 border-y border-cyan-500/25 relative z-20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#0A1022] via-[#0C152B] to-[#0A1022] border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Label zone */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-semibold mb-2 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono">REGISTRATION LIVE &bull; FREE ENTRY &amp; BUFFET</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Symposium Grand Opening
            </h3>
            
            <p className="text-sm font-semibold text-cyan-300 mt-1 flex items-center justify-center lg:justify-start gap-1.5 font-mono">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>12th October 2026 &bull; 09:00 AM IST</span>
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              APEC Central Library &amp; IT Dept Auditorium &bull; Melmaruvathur
            </p>
          </div>

          {/* Time digits */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full sm:w-auto">
            {timerUnits.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#050813] text-white min-w-[70px] sm:min-w-[92px] shadow-md hover:scale-105 transition-transform border border-cyan-500/30 group hover:border-cyan-400"
              >
                <span className="text-2xl sm:text-4xl font-extrabold font-mono text-cyan-300 tabular-nums leading-none drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1.5 tracking-wider group-hover:text-cyan-300 transition-colors">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action buttons (Calendar & Count Tone) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <button
              onClick={toggleTone}
              className={`px-3.5 py-2.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                toneEnabled
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] ring-1 ring-cyan-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500/50 hover:text-white'
              }`}
              title="Toggle countdown sound tone chime"
            >
              {toneEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              <span>{toneEnabled ? 'Chime Active' : 'Start Count Tone'}</span>
            </button>

            <button
              onClick={handleAddToCalendar}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Bell className="w-4 h-4 text-cyan-400" />
              <span>Add to Calendar</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
