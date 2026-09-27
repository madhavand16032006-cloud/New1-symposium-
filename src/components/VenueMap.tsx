import React from 'react';
import { MapPin, ExternalLink, Navigation, Train, Bus, Car } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

export const VenueMap: React.FC = () => {
  return (
    <section id="venue" className="py-20 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2 font-mono">
            Campus Location &bull; Melmaruvathur
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Symposium Venue &amp; Navigation
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Adhiparasakthi Engineering College is conveniently situated directly along National Highway 45 (GST Road) in Melmaruvathur, Tamil Nadu.
          </p>
        </div>

        {/* Map & Direction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Google Map Embed Frame (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_25px_rgba(0,0,0,0.6)] relative min-h-[380px] bg-slate-900 flex flex-col">
            <iframe
              title="Adhiparasakthi Engineering College Google Map"
              src={COLLEGE_INFO.mapsEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Overlay badge on map bottom */}
            <div className="p-3.5 bg-[#0A1020]/95 backdrop-blur-md border-t border-cyan-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-semibold text-white">
                  Adhiparasakthi Engineering College, Melmaruvathur - 603319
                </span>
              </div>
              
              <a
                href={COLLEGE_INFO.mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-500/30 text-[11px] font-bold transition-all cursor-pointer shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-cyan-300" />
              </a>
            </div>
          </div>

          {/* Right: How to Reach & Transit Guidance (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Bus transit */}
            <div className="p-5 rounded-2xl bg-[#0A1020]/90 border border-slate-800 shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-400/30">
                <Bus className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1 font-display">
                  By Bus (GST Road NH-45)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All state transport and SETC express buses from Chennai (CMBT / Kilambakkam KCBT) towards Tindivanam, Villupuram, Trichy stop right at Melmaruvathur Bus Stand (2 mins walk).
                </p>
              </div>
            </div>

            {/* Train transit */}
            <div className="p-5 rounded-2xl bg-[#0A1020]/90 border border-slate-800 shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/30">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1 font-display">
                  By Suburban &amp; Express Train
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Melmaruvathur Railway Station (MLMR) is just 800m from the college campus gate. Frequent passenger and express trains run from Chennai Beach / Tambaram directly.
                </p>
              </div>
            </div>

            {/* Free college shuttle bus */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-blue-950/60 border border-cyan-500/30 shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-400/40">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-cyan-300 mb-1 font-display">
                  Free College Transport Available
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated APEC college shuttle vans will be stationed at Melmaruvathur Bus Stand and Railway Station from 07:30 AM to 09:15 AM to escort delegates.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
