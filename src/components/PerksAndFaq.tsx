import React, { useState } from 'react';
import { 
  Trophy, Utensils, Award, Navigation, HelpCircle, 
  ChevronDown, CheckCircle2, Sparkles, Compass, ArrowRight 
} from 'lucide-react';
import { SYMPOSIUM_PERKS, SYMPOSIUM_FAQS, EVENTS } from '../data/symposiumData';
import { audioFX } from '../utils/audioFX';

interface PerksAndFaqProps {
  onSelectEvent: (eventId: string) => void;
}

export const PerksAndFaq: React.FC<PerksAndFaqProps> = ({ onSelectEvent }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedInterest, setSelectedInterest] = useState<string>('ai-coding');

  const recommendationProfiles: Record<string, { label: string; eventIds: string[]; reason: string }> = {
    'ai-coding': {
      label: 'AI & Rapid Code Development',
      eventIds: ['prompt-stack'],
      reason: 'Perfect for coders seeking fast prototyping, LLM prompting, and autonomous systems.'
    },
    'research': {
      label: 'Research & System Defense',
      eventIds: ['codesmith-innovation'],
      reason: 'Articulate your IEEE papers, IoT architectures, or cloud frameworks before academic jurists.'
    },
    'design': {
      label: 'UI/UX & Product Design',
      eventIds: ['infographix-uiux'],
      reason: 'Create pixel-perfect Figma screens, wireframes, and accessible mobile interfaces.'
    },
    'strategy': {
      label: 'Tactics & Esports Arena',
      eventIds: ['booyah-battle', 'neurolink', 'checkmate-clash', 'auction-arena'],
      reason: 'Showcase quick tactical reflexes in Battle Royale gaming, cognitive duels, chess, and auction bidding.'
    }
  };

  const currentRecommendation = recommendationProfiles[selectedInterest];
  const recommendedEvents = EVENTS.filter((e) => currentRecommendation.eventIds.includes(e.id));

  const getPerkIcon = (icon: string) => {
    switch (icon) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-emerald-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-cyan-400" />;
      default:
        return <Navigation className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="perks" className="py-20 relative z-20 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2 font-mono">
            Delegate Value · Experience · Answers
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Delegate Perks &amp; Guidelines
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Every registered attendee receives premium hospitality, authentic credentials, and a fast-tracked paperless digital pass.
          </p>
        </div>

        {/* 4 Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SYMPOSIUM_PERKS.map((perk) => (
            <div
              key={perk.title}
              className="p-6 rounded-3xl bg-[#0A1020]/90 border border-cyan-500/25 shadow-lg hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all flex flex-col justify-between hover:-translate-y-1 backdrop-blur-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 shadow-sm">
                  {getPerkIcon(perk.icon)}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {perk.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {perk.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-300 font-semibold">
                &bull; Included for All Delegates
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Track Recommender */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0A1020] via-[#0D152B] to-[#0A1020] border border-cyan-500/30 shadow-xl mb-16 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4" />
                <span>Smart Track Matcher</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                What is your core interest today?
              </h3>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(recommendationProfiles).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => {
                    audioFX.playClick();
                    setSelectedInterest(key);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    selectedInterest === key
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                      : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {item.label.split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-6 font-mono">
            {currentRecommendation.reason}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recommendedEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 text-[11px] text-cyan-400 font-mono mb-1">
                    <span>{evt.category.toUpperCase()}</span>
                    <span className="text-amber-400">🏆 Cash Award</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {evt.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {evt.shortTagline}
                  </p>
                </div>
                <button
                  onClick={() => {
                    audioFX.playLaserWhoosh();
                    onSelectEvent(evt.id);
                  }}
                  className="mt-4 pt-2 border-t border-slate-800 text-xs font-bold text-cyan-300 hover:text-white flex items-center justify-between cursor-pointer"
                >
                  <span>Register for this event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Everything you need to know about eligibility, lunch, and arrival.
            </p>
          </div>

          <div className="space-y-3">
            {SYMPOSIUM_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#0A1020]/90 border border-slate-800 overflow-hidden transition-all backdrop-blur-md"
                >
                  <button
                    onClick={() => {
                      audioFX.playClick();
                      setOpenFaqIndex(isOpen ? null : idx);
                    }}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white font-display">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
