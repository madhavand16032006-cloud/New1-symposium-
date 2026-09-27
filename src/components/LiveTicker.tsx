import React from 'react';
import { Sparkles, Trophy, Utensils, MapPin, Calendar, Award, Phone } from 'lucide-react';

interface LiveTickerProps {
  onOpenWelcome?: () => void;
}

export const LiveTicker: React.FC<LiveTickerProps> = ({ onOpenWelcome }) => {
  const tickerItems = [
    { text: 'IT Spectrum 2026 – INTELLECTRA', highlight: true },
    { text: 'Adhiparasakthi Engineering College, Melmaruvathur', highlight: false },
    { text: 'Symposium Date: 12th October 2026 (09:00 AM IST)', highlight: true },
    { text: '₹25,000+ Exciting Cash Prize Pool & Trophies', highlight: true },
    { text: '100% Free Buffet Lunch & Refreshments for All Delegates', highlight: false },
    { text: 'Approved by AICTE & NAAC "A" Grade Certified', highlight: false },
    { text: 'Spot Registration Available at Central Library Foyer', highlight: true },
    { text: 'Hotline: +91 9342661192 & WhatsApp Desk Active', highlight: false },
  ];

  return (
    <div className="bg-[#050814] text-slate-200 py-1.5 overflow-hidden border-b border-cyan-500/25 text-xs font-mono select-none relative z-30 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
      <div className="flex w-[200%] animate-marquee items-center gap-8 whitespace-nowrap">
        {/* Loop 1 */}
        {tickerItems.map((item, idx) => (
          <div key={`t1-${idx}`} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
            <span className={`tracking-wide ${item.highlight ? 'text-cyan-300 font-semibold' : 'text-slate-300'}`}>
              {item.text}
            </span>
            <span className="text-slate-600 mx-2">&bull;</span>
          </div>
        ))}
        {/* Loop 2 for continuous infinite scroll */}
        {tickerItems.map((item, idx) => (
          <div key={`t2-${idx}`} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
            <span className={`tracking-wide ${item.highlight ? 'text-cyan-300 font-semibold' : 'text-slate-300'}`}>
              {item.text}
            </span>
            <span className="text-slate-600 mx-2">&bull;</span>
          </div>
        ))}
      </div>
    </div>
  );
};
