import React from 'react';
import { ShieldCheck, Award, Users, BookOpen, GraduationCap, Building2, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { COLLEGE_INFO } from '../data/symposiumData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2 font-mono">
            Institutional Legacy &bull; 23+ Years of Technical Excellence
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Department of Information Technology
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Adhiparasakthi Engineering College (APEC), Melmaruvathur is an autonomous engineering institution 
            accredited with NAAC &ldquo;A&rdquo; Grade and approved by AICTE, New Delhi, affiliated to Anna University, Chennai.
          </p>
        </div>

        {/* 2-Column Story / Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Card 1: About the IT Department */}
          <div className="p-8 rounded-3xl bg-[#0A1020]/85 border border-cyan-500/25 shadow-xl flex flex-col justify-between hover-glow backdrop-blur-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                Empowering Next-Gen Technologists
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                The Department of Information Technology at Adhiparasakthi Engineering College is dedicated to 
                nurturing technically competent, ethically grounded, and innovative software engineers. Equipped 
                with high-throughput computing clusters, cloud labs, and specialized centers for Artificial Intelligence 
                and Full-Stack Web Development, our department prepares students to conquer global industry demands.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Anna University Affiliated Curriculum with Industry 4.0 Integrations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dedicated Research Centers in Machine Learning &amp; Cyber Systems</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Robust Industry Collaborations, Hackathons &amp; Tier-1 Placements</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
              <span className="text-cyan-300">HOD: Mr. K. Hemakumar</span>
              <span className="text-emerald-400">ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Card 2: About INTELLECTRA 2026 */}
          <div className="p-8 rounded-3xl bg-[#0A1020]/85 border border-purple-500/25 shadow-xl flex flex-col justify-between hover-glow backdrop-blur-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-400/40 text-purple-400 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                About INTELLECTRA 2026
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                <strong>INTELLECTRA 2026</strong> is the premier national-level technical symposium hosted annually 
                by the Department of Information Technology. Serving as a crucible of technological creativity, 
                this grand symposium convenes over 1,000+ collegiate innovators, developers, and designers from across India.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>7 High-Stakes Competitions (Coding, Paper Pres., Web Dev, Gaming &amp; Quiz)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>₹25,000+ Cash Prize Pool with Rolling Trophies and Mementos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>100% Free Buffet Lunch and Refreshments for all Registered Delegates</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
              <span className="text-purple-300">Edition: INTELLECTRA &apos;26</span>
              <span className="text-cyan-400">Date: 12-OCT-2026</span>
            </div>
          </div>

        </div>

        {/* 4 Stat Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#080D1A]/90 border border-slate-800 text-center">
            <span className="block text-3xl font-extrabold text-cyan-400 font-mono">23+</span>
            <span className="text-xs text-slate-400 mt-1 block">Years of Legacy</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#080D1A]/90 border border-slate-800 text-center">
            <span className="block text-3xl font-extrabold text-emerald-400 font-mono">1,000+</span>
            <span className="text-xs text-slate-400 mt-1 block">Expected Delegates</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#080D1A]/90 border border-slate-800 text-center">
            <span className="block text-3xl font-extrabold text-amber-400 font-mono">₹25K+</span>
            <span className="text-xs text-slate-400 mt-1 block">Prize Pool</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#080D1A]/90 border border-slate-800 text-center">
            <span className="block text-3xl font-extrabold text-purple-400 font-mono">100%</span>
            <span className="text-xs text-slate-400 mt-1 block">Free Entry &amp; Buffet</span>
          </div>
        </div>

      </div>
    </section>
  );
};
