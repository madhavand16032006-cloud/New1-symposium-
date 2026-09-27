import React, { useState } from 'react';
import { 
  Phone, Mail, MessageCircle, Send, CheckCircle, 
  User, ShieldCheck, HelpCircle, Sparkles, MapPin, Zap 
} from 'lucide-react';
import { 
  COLLEGE_INFO, LEADERSHIP_COORDINATORS, STUDENT_COORDINATORS 
} from '../data/symposiumData';
import { audioFX } from '../utils/audioFX';

export const Contact: React.FC = () => {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    eventInterest: 'General Query',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.message) return;
    audioFX.playSuccessChime();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryData({
        name: '',
        email: '',
        phone: '',
        eventInterest: 'General Query',
        message: ''
      });
    }, 4000);
  };

  const primaryCoordinatorPhone = '919342661192'; // Mr. K. Venkatesh
  const whatsappUrl = `https://wa.me/${primaryCoordinatorPhone}?text=${encodeURIComponent(
    'Hello IT Spectrum 2026 Organizing Committee, I have an inquiry regarding INTELLECTRA Symposium participation.'
  )}`;

  return (
    <section id="contact" className="py-20 relative z-20 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2 font-mono">
            Organizing Committee &bull; Reach Out
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Contact &amp; Support Desk
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Have questions about paper formatting, rules, team registrations, or travel assistance? 
            Our coordinators are readily available.
          </p>
        </div>

        {/* 2-Column Contact Info + Quick Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Contact Directory (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* WhatsApp Fast Track Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>DIRECT WHATSAPP CONCIERGE</span>
                </div>
                <h4 className="text-lg font-bold text-white font-display">
                  Have an Instant Question?
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Chat directly with student secretary Mr. K. Venkatesh on WhatsApp.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioFX.playClick()}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center gap-2 cursor-pointer shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp</span>
              </a>
            </div>

            {/* Leadership & Faculty */}
            <div className="p-6 rounded-3xl bg-[#0A1020]/90 border border-slate-800 shadow-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
                Department Leadership &amp; Faculty
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LEADERSHIP_COORDINATORS.map((leader) => (
                  <div key={leader.name} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs font-bold text-white">{leader.name}</p>
                    <p className="text-[11px] text-cyan-300 font-mono">{leader.role}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{leader.designation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Coordinators Phone Directory */}
            <div className="p-6 rounded-3xl bg-[#0A1020]/90 border border-slate-800 shadow-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
                Student Event Coordinators (Direct Call)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STUDENT_COORDINATORS.map((student) => (
                  <a
                    key={student.name}
                    href={`tel:${student.phone}`}
                    onClick={() => audioFX.playClick()}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {student.name}
                      </p>
                      <p className="text-[10px] text-slate-400 font-mono">{student.role}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 group-hover:underline">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{student.phone}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Quick Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0A1020]/90 border border-cyan-500/30 shadow-xl backdrop-blur-xl">
            <h4 className="text-lg font-bold text-white mb-1 font-display flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-400" />
              <span>Send Message to Help Desk</span>
            </h4>
            <p className="text-xs text-slate-400 mb-6">
              Drop your query and our team will get back via WhatsApp/Email within 2 hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center animate-in fade-in">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h5 className="text-sm font-bold text-white">Message Dispatched!</h5>
                <p className="text-xs text-slate-300 mt-1">
                  Our student coordinator will respond to your WhatsApp/Email promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyadharshini"
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-900/90 text-white focus:border-cyan-400 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-900/90 text-white focus:border-cyan-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Category
                    </label>
                    <select
                      value={inquiryData.eventInterest}
                      onChange={(e) => setInquiryData({ ...inquiryData, eventInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-900/90 text-white focus:border-cyan-400 focus:outline-hidden"
                    >
                      <option value="General Query">General Query</option>
                      <option value="Paper Presentation">Paper Presentation</option>
                      <option value="Prompt Stack AI">Prompt Stack AI</option>
                      <option value="Web Dev Battle">Web Dev Battle</option>
                      <option value="Free Lunch & Bus">Free Lunch &amp; Bus</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message / Question *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ask about team size, presentation topics, or transport details..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-900/90 text-white focus:border-cyan-400 focus:outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Query</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
