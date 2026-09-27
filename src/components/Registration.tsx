import React, { useState, useEffect } from 'react';
import { 
  FileText, QrCode, Search, CheckCircle, Sparkles, 
  ArrowRight, ShieldCheck, Utensils, Printer, 
  RefreshCw, Calendar, AlertCircle, Copy, Check, HelpCircle,
  Clock, MapPin, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COLLEGE_INFO, EVENTS } from '../data/symposiumData';
import { audioFX } from '../utils/audioFX';

interface RegistrationProps {
  preselectedEventId?: string;
  forceTab?: 'form' | 'track' | 'qr';
  onOpenGuideModal?: () => void;
}

export interface StoredPass {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  dept: string;
  year: string;
  events: string[];
  eventObjects: { id: string; title: string; venue: string; time: string }[];
  date: string;
  lunchTokenStatus: 'VALID' | 'CLAIMED';
  registrationTimestamp: string;
}

export const Registration: React.FC<RegistrationProps> = ({ 
  preselectedEventId,
  forceTab,
  onOpenGuideModal,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    department: 'Information Technology',
    year: 'III Year',
    selectedEvents: [] as string[],
  });

  const [submittedPass, setSubmittedPass] = useState<StoredPass | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'track' | 'qr'>('form');
  const [searchQuery, setSearchQuery] = useState('');
  const [trackedPass, setTrackedPass] = useState<StoredPass | null>(null);
  const [searchError, setSearchError] = useState('');
  const [copiedId, setCopiedId] = useState(false);
  const [gateCheckinSimulated, setGateCheckinSimulated] = useState(false);

  // Initialize and load saved passes from localStorage
  const getStoredPasses = (): StoredPass[] => {
    try {
      const data = localStorage.getItem('it_spectrum_2026_passes');
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // fallback
    }
    // Default sample passes for instant demonstration
    return [
      {
        id: 'IT26-2026',
        name: 'Madhavan D',
        email: 'madhavand734@gmail.com',
        phone: '9342661192',
        college: 'Adhiparasakthi Engineering College',
        dept: 'Information Technology',
        year: 'Final Year B.Tech',
        events: ['Prompt Stack (AI Hackathon)', 'Infographix (UI/UX Sprint)'],
        eventObjects: [
          { id: 'prompt-stack', title: 'Prompt Stack (AI Hackathon)', venue: 'Computer Center Lab 3', time: '10:30 AM' },
          { id: 'infographix-uiux', title: 'Infographix (UI/UX Sprint)', venue: 'Multimedia Lab 2', time: '10:30 AM' }
        ],
        date: 'October 12, 2026',
        lunchTokenStatus: 'VALID',
        registrationTimestamp: 'Pre-registered'
      },
      {
        id: 'IT26-8842',
        name: 'Priya R',
        email: 'priya.it26@aec.edu.in',
        phone: '9840123456',
        college: 'Madras Institute of Technology',
        dept: 'Information Technology',
        year: 'III Year B.Tech',
        events: ['Bug Smash (Code Debugging)', 'Codesmith Innovation Meet'],
        eventObjects: [
          { id: 'bug-smash', title: 'Bug Smash (Code Debugging)', venue: 'IT Dept Lab 1', time: '10:30 AM' },
          { id: 'paper-presentation', title: 'Codesmith Innovation Meet (Paper)', venue: 'Central Library Hall', time: '10:30 AM' }
        ],
        date: 'October 12, 2026',
        lunchTokenStatus: 'VALID',
        registrationTimestamp: 'Pre-registered'
      }
    ];
  };

  const savePassToStorage = (newPass: StoredPass) => {
    try {
      const current = getStoredPasses();
      const updated = [newPass, ...current.filter((p) => p.id !== newPass.id)];
      localStorage.setItem('it_spectrum_2026_passes', JSON.stringify(updated));
    } catch {
      // fallback
    }
  };

  useEffect(() => {
    if (forceTab) {
      setActiveTab(forceTab);
      if (forceTab === 'track' && !trackedPass) {
        const passes = getStoredPasses();
        if (passes.length > 0) {
          setTrackedPass(passes[0]);
        }
      }
    }
  }, [forceTab]);

  useEffect(() => {
    if (preselectedEventId) {
      if (!formData.selectedEvents.includes(preselectedEventId)) {
        setFormData((prev) => ({
          ...prev,
          selectedEvents: [...prev.selectedEvents, preselectedEventId]
        }));
      }
      setActiveTab('form');
    }
  }, [preselectedEventId]);

  const toggleEventSelection = (id: string) => {
    audioFX.playClick();
    setFormData((prev) => {
      const exists = prev.selectedEvents.includes(id);
      return {
        ...prev,
        selectedEvents: exists
          ? prev.selectedEvents.filter((item) => item !== id)
          : [...prev.selectedEvents, id]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.collegeName) {
      alert('Please fill out all required fields.');
      return;
    }

    if (formData.selectedEvents.length === 0) {
      alert('Please select at least one symposium event.');
      return;
    }

    audioFX.playSuccessChime();

    // Trigger celebratory confetti
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 }
    });

    const passId = `IT26-${Math.floor(1000 + Math.random() * 9000)}`;
    const eventDetails = formData.selectedEvents.map((id) => {
      const ev = EVENTS.find((e) => e.id === id);
      return {
        id,
        title: ev?.title || id,
        venue: ev?.venue || 'Central Library Hall',
        time: ev?.time || '10:30 AM'
      };
    });

    const newPass: StoredPass = {
      id: passId,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      college: formData.collegeName,
      dept: formData.department,
      year: formData.year,
      events: eventDetails.map((e) => e.title),
      eventObjects: eventDetails,
      date: 'October 12, 2026',
      lunchTokenStatus: 'VALID',
      registrationTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    savePassToStorage(newPass);
    setSubmittedPass(newPass);
    setTrackedPass(newPass);
  };

  const handleSearchPass = (e: React.FormEvent) => {
    e.preventDefault();
    audioFX.playClick();
    setSearchError('');
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchError('Please enter a Pass ID (e.g. IT26-2026) or phone number.');
      return;
    }

    const allPasses = getStoredPasses();
    const found = allPasses.find(
      (p) =>
        p.id.toLowerCase() === query ||
        p.phone.includes(query) ||
        p.email.toLowerCase() === query
    );

    if (found) {
      audioFX.playLaserWhoosh();
      setTrackedPass(found);
    } else {
      setSearchError(`No pass found matching "${searchQuery}". Please check your Pass ID or register below.`);
    }
  };

  const handleCopyPassId = (id: string) => {
    audioFX.playClick();
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handlePrintPass = () => {
    audioFX.playClick();
    window.print();
  };

  const loadSamplePass = (id: string) => {
    audioFX.playClick();
    setSearchQuery(id);
    const passes = getStoredPasses();
    const found = passes.find((p) => p.id === id);
    if (found) {
      setTrackedPass(found);
      setSearchError('');
    }
  };

  return (
    <section id="register" className="py-20 bg-slate-900/10 border-t border-b border-sky-400/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-xs font-bold tracking-widest text-sky-500 uppercase mb-2">
            Free Entry &bull; Lunch Included &bull; Cash Prizes
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-balance">
            Symposium Registration &amp; Pass Desk
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Generate your Instant Digital Pass for paperless entry, or track an existing pass and allocated event halls.
          </p>

          {/* Explainer Banner */}
          <div className="mt-4 p-3 rounded-2xl bg-sky-500/10 border border-sky-400/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs text-left">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎫</span>
              <div>
                <span className="font-bold text-sky-400">What is the Instant Digital Pass &amp; How to Track?</span>
                <p className="text-slate-400 text-[11px]">
                  Official e-badge with QR code for entry, meal voucher, and hall allocation.
                </p>
              </div>
            </div>
            {onOpenGuideModal && (
              <button
                onClick={() => {
                  audioFX.playClick();
                  onOpenGuideModal();
                }}
                className="px-3 py-1.5 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Explain Pass &amp; Tracking</span>
              </button>
            )}
          </div>

          {/* Registration Mode Tabs */}
          <div className="inline-flex items-center p-1.5 glass-panel rounded-xl shadow-xs mt-6 flex-wrap justify-center gap-1.5">
            <button
              onClick={() => {
                audioFX.playClick();
                setActiveTab('form');
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'form'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Instant Digital Pass</span>
            </button>

            <button
              onClick={() => {
                audioFX.playClick();
                setActiveTab('track');
                if (!trackedPass && submittedPass) {
                  setTrackedPass(submittedPass);
                } else if (!trackedPass) {
                  const passes = getStoredPasses();
                  if (passes.length > 0) setTrackedPass(passes[0]);
                }
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'track'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Track / Verify Pass</span>
            </button>

            <button
              onClick={() => {
                audioFX.playClick();
                setActiveTab('qr');
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'qr'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>Scan QR &amp; Form</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Instant Digital Pass Registration Form */}
        {activeTab === 'form' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl shadow-sm">
              {!submittedPass ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display mb-1 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-sky-400" />
                      <span>Delegate Registration Form</span>
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Fill out your details to receive an instant scannable e-pass for October 12, 2026.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-800/80 focus:border-sky-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-800/80 focus:border-sky-400 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp Mobile No. *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-800/80 focus:border-sky-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Year of Study *
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-800/80 focus:border-sky-400 focus:outline-hidden"
                      >
                        <option value="I Year">I Year B.E / B.Tech</option>
                        <option value="II Year">II Year B.E / B.Tech</option>
                        <option value="III Year">III Year B.E / B.Tech</option>
                        <option value="IV Year">IV Year B.E / B.Tech</option>
                        <option value="Post Graduate">M.E / M.Tech / MCA</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        College / Institution Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Adhiparasakthi Engineering College"
                        value={formData.collegeName}
                        onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-800/80 focus:border-sky-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Department / Branch *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. B.Tech Information Technology"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-800/80 focus:border-sky-400 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Event Selection Matrix */}
                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Select Events to Participate * (Select one or more)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto p-2 bg-slate-800/60 rounded-xl border border-slate-700">
                      {EVENTS.map((event) => {
                        const isChecked = formData.selectedEvents.includes(event.id);
                        return (
                          <div
                            key={event.id}
                            onClick={() => toggleEventSelection(event.id)}
                            className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all flex items-center justify-between text-xs ${
                              isChecked
                                ? 'bg-sky-500/20 border-sky-400 text-white'
                                : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-slate-500'
                            }`}
                          >
                            <div className="pr-2">
                              <p className="font-bold leading-snug">{event.title}</p>
                              <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-0.5">
                                {event.category}
                              </span>
                            </div>
                            <div className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 border ${
                              isChecked ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-600'
                            }`}>
                              {isChecked && <CheckCircle className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submission Notice */}
                  <div className="p-3 bg-sky-500/10 rounded-xl border border-sky-400/30 text-[11px] text-slate-300 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Free Lunch Token &amp; Welcome Kit will be provisioned automatically upon pass generation.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Generate Instant Delegate Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Success Pass Preview */
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Registration Confirmed! Your digital pass is saved and ready.</span>
                    </div>
                    <button
                      onClick={() => handleCopyPassId(submittedPass.id)}
                      className="px-2 py-1 bg-slate-800 rounded border border-emerald-400/40 text-[10px] font-mono font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId ? 'Copied' : submittedPass.id}</span>
                    </button>
                  </div>

                  {/* Digital Badge Layout with Laser Scanner */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-2xl border-2 border-sky-400/70 relative overflow-hidden">
                    <div className="laser-scanner" />
                    <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-sky-400/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-start justify-between border-b border-slate-700 pb-4 mb-4">
                      <div>
                        <span className="text-[10px] text-sky-400 font-mono tracking-wider uppercase block">
                          OM SAKTHI &bull; ADHIPARASAKTHI ENGG COLLEGE
                        </span>
                        <h4 className="text-xl font-bold font-display text-white">
                          INTELLECTRA 2026
                        </h4>
                        <p className="text-[11px] text-slate-400">
                          IT Spectrum &bull; National Level Symposium
                        </p>
                      </div>
                      <div className="px-2.5 py-1 rounded-md bg-sky-400 text-slate-950 text-xs font-mono font-bold">
                        {submittedPass.id}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Delegate Name</span>
                        <span className="text-base font-bold text-white">{submittedPass.name}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide block">College / Dept</span>
                        <span className="text-slate-300">{submittedPass.college} &bull; {submittedPass.dept} ({submittedPass.year})</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wide block">Registered Tracks &amp; Venues</span>
                        <div className="flex flex-col gap-1.5 mt-1">
                          {submittedPass.eventObjects.map((ev, i) => (
                            <div key={i} className="px-2.5 py-1.5 rounded-lg bg-white/10 text-slate-200 text-xs flex items-center justify-between">
                              <span className="text-sky-300 font-semibold">{ev.title}</span>
                              <span className="text-[11px] text-slate-400 font-mono">{ev.venue}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1 font-semibold text-emerald-400">
                        <Utensils className="w-3.5 h-3.5" />
                        <span>Lunch Token: {submittedPass.lunchTokenStatus}</span>
                      </span>
                      <span>Date: <strong>12th October 2026</strong></span>
                    </div>
                  </div>

                  {/* Actions for pass */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrintPass}
                      className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-sky-400/40 hover:bg-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-4 h-4 text-sky-400" />
                      <span>Print / Save PDF</span>
                    </button>
                    <button
                      onClick={() => setSubmittedPass(null)}
                      className="py-2.5 px-4 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Register Another</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Instructions Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* How it works info */}
              <div className="p-6 rounded-3xl glass-panel shadow-xs text-left">
                <h4 className="text-sm font-bold font-display mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>What is the Instant Digital Pass?</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  The <strong>Instant Digital Pass</strong> is your official paperless delegate credential for 
                  <strong> IT Spectrum 2026 – INTELLECTRA</strong>.
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-bold text-[10px] flex items-center justify-center shrink-0">1</span>
                    <span><strong>Direct Campus Admission</strong>: Show this pass on your phone at APEC Central Library registration desk on October 12, 2026.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-bold text-[10px] flex items-center justify-center shrink-0">2</span>
                    <span><strong>Free Lunch Token</strong>: Automatically encodes your complimentary lunch buffet voucher for the dining hall.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-bold text-[10px] flex items-center justify-center shrink-0">3</span>
                    <span><strong>Trackable Any Time</strong>: Enter your Pass ID (e.g. <code>IT26-2026</code>) to verify venue halls and certificate approvals anytime.</span>
                  </div>
                </div>
              </div>

              {/* Quick Google Form Alternative */}
              <div className="p-6 rounded-3xl glass-panel shadow-xs text-left">
                <h4 className="text-sm font-bold font-display mb-1">
                  Google Form Registration
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  Prefer submitting via the traditional Google Form?
                </p>
                <a
                  href={COLLEGE_INFO.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Official Google Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Track & Verify Pass Status */}
        {activeTab === 'track' && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Search Input Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-xs text-left">
              <h3 className="text-lg font-bold font-display mb-1 flex items-center gap-2">
                <Search className="w-5 h-5 text-sky-400" />
                <span>Track Your Registration &amp; Venue Pass</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Enter your Pass ID (e.g. <code>IT26-2026</code>) or registered WhatsApp mobile number to verify hall allocations, lunch status, and event timings.
              </p>

              {/* Quick Sample Passes To Click */}
              <div className="mb-4 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-[11px] text-slate-400 font-semibold">Test Sample Passes:</span>
                <button
                  type="button"
                  onClick={() => loadSamplePass('IT26-2026')}
                  className="px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-400/40 text-sky-300 font-mono text-xs hover:bg-sky-500/25 cursor-pointer"
                >
                  IT26-2026 (Madhavan D)
                </button>
                <button
                  type="button"
                  onClick={() => loadSamplePass('IT26-8842')}
                  className="px-2.5 py-1 rounded-md bg-purple-500/15 border border-purple-400/40 text-purple-300 font-mono text-xs hover:bg-purple-500/25 cursor-pointer"
                >
                  IT26-8842 (Priya R)
                </button>
              </div>

              <form onSubmit={handleSearchPass} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter Pass ID (e.g. IT26-2026) or Phone Number"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-700 bg-slate-800/80 focus:border-sky-400 focus:outline-hidden text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <Search className="w-4 h-4" />
                  <span>Track Status</span>
                </button>
              </form>

              {searchError && (
                <div className="mt-3 p-3 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{searchError}</span>
                </div>
              )}
            </div>

            {/* Tracked Result Pass View */}
            {trackedPass && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-400/50 shadow-xl animate-in fade-in space-y-6 text-left relative overflow-hidden">
                <div className="laser-scanner" />

                {/* Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-bold">
                      Pass Status: <span className="text-emerald-400">CONFIRMED &bull; APPROVED</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Pass ID:</span>
                    <span className="px-2.5 py-1 rounded bg-sky-400 text-slate-950 font-mono text-xs font-bold">
                      {trackedPass.id}
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700">
                    <span className="text-slate-400 block font-medium text-[11px]">Delegate Name</span>
                    <span className="text-sm font-bold text-white block mt-0.5">{trackedPass.name}</span>
                    <span className="text-slate-300 text-[11px] block mt-0.5">{trackedPass.college}</span>
                    <span className="text-slate-400 text-[11px] block">{trackedPass.dept} ({trackedPass.year})</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Symposium Date:</span>
                      <span className="font-bold text-white">12th October 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Reporting Time:</span>
                      <span className="font-bold text-sky-400">08:30 AM IST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Lunch Buffet Token:</span>
                      <span className="font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                        {trackedPass.lunchTokenStatus} &bull; UNUSED
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[11px]">Reporting Desk:</span>
                      <span className="font-bold text-slate-200">Central Library Foyer</span>
                    </div>
                  </div>
                </div>

                {/* Enrolled Events */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Enrolled Events &amp; Room Allocations
                  </h4>
                  <div className="space-y-2">
                    {trackedPass.eventObjects.map((ev, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-400" />
                          <span className="font-bold text-white">{ev.title}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 text-[11px] font-mono">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-sky-400" />
                            {ev.venue}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {ev.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gate Entry QR Simulation */}
                <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl">
                      <QrCode className="w-8 h-8 text-slate-900" />
                    </div>
                    <div>
                      <span className="font-bold text-white block">Official Gate QR Code Ready</span>
                      <span className="text-slate-400 text-[11px]">
                        Scan at Adhiparasakthi Engineering College entrance desk.
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      audioFX.playLaserWhoosh();
                      setGateCheckinSimulated(true);
                      setTimeout(() => setGateCheckinSimulated(false), 3000);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-sky-400/40 text-sky-300 font-semibold text-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{gateCheckinSimulated ? '✓ Gate Check-in Verified!' : 'Simulate Gate Check-in'}</span>
                  </button>
                </div>

                {/* Print & Copy Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-700">
                  <button
                    onClick={() => handleCopyPassId(trackedPass.id)}
                    className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId ? 'Copied ID' : 'Copy Pass ID'}</span>
                  </button>
                  <button
                    onClick={handlePrintPass}
                    className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save Badge PDF</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Scannable QR Code Showcase */}
        {activeTab === 'qr' && (
          <div className="max-w-2xl mx-auto glass-panel p-8 rounded-3xl shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto mb-4 border border-sky-400/30">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold font-display">
              Scan QR Code to Register
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mt-2">
              Scan with any mobile camera or Google Lens to immediately open the registration portal on your smartphone.
            </p>

            {/* High-Contrast Clean QR Code Visual */}
            <div className="my-8 inline-block p-6 rounded-2xl bg-white border-2 border-sky-400 shadow-xl">
              <svg 
                className="w-56 h-56 mx-auto" 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="200" height="200" fill="white"/>
                {/* Top-Left */}
                <rect x="15" y="15" width="50" height="50" rx="6" fill="#373737"/>
                <rect x="23" y="23" width="34" height="34" rx="3" fill="white"/>
                <rect x="31" y="31" width="18" height="18" rx="2" fill="#373737"/>
                {/* Top-Right */}
                <rect x="135" y="15" width="50" height="50" rx="6" fill="#373737"/>
                <rect x="143" y="23" width="34" height="34" rx="3" fill="white"/>
                <rect x="151" y="31" width="18" height="18" rx="2" fill="#373737"/>
                {/* Bottom-Left */}
                <rect x="15" y="135" width="50" height="50" rx="6" fill="#373737"/>
                <rect x="23" y="143" width="34" height="34" rx="3" fill="white"/>
                <rect x="31" y="151" width="18" height="18" rx="2" fill="#373737"/>
                
                {/* Data blocks */}
                <rect x="75" y="20" width="12" height="12" fill="#373737"/>
                <rect x="95" y="20" width="22" height="12" fill="#373737"/>
                <rect x="75" y="40" width="12" height="25" fill="#373737"/>
                <rect x="100" y="45" width="15" height="15" fill="#373737"/>
                <rect x="20" y="75" width="15" height="15" fill="#373737"/>
                <rect x="45" y="80" width="20" height="12" fill="#373737"/>
                <rect x="75" y="75" width="50" height="50" rx="8" fill="#B0D2EC"/>
                <text x="100" y="105" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="bold" fontFamily="monospace">&lt;IT&gt;</text>
                <rect x="135" y="75" width="20" height="15" fill="#373737"/>
                <rect x="165" y="85" width="15" height="25" fill="#373737"/>
                <rect x="75" y="135" width="25" height="15" fill="#373737"/>
                <rect x="110" y="140" width="18" height="18" fill="#373737"/>
                <rect x="140" y="135" width="45" height="15" fill="#373737"/>
                <rect x="80" y="165" width="30" height="18" fill="#373737"/>
                <rect x="125" y="160" width="20" height="25" fill="#373737"/>
                <rect x="155" y="165" width="25" height="20" fill="#373737"/>
              </svg>
              <div className="mt-3 text-xs font-mono font-bold text-slate-800 tracking-wider">
                {COLLEGE_INFO.website}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={COLLEGE_INFO.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Direct Google Form Link</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400 mt-4">
              Online Registration Available &bull; Spot Registration available on October 12, 2026
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
