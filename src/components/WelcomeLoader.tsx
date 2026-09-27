import React, { useState, useEffect, useRef } from 'react';

interface WelcomeLoaderProps {
  onComplete?: () => void;
}

export const WelcomeLoader: React.FC<WelcomeLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'terminal' | 'reveal' | 'scan' | 'exit' | 'done'>('terminal');
  const [typedCode, setTypedCode] = useState('');
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const targetCode = 'print("welcome intellectra")';

  const handleSkip = () => {
    setIsExiting(true);
    setPhase('exit');
    setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 280);
  };

  // Lock scrolling while loader is active
  useEffect(() => {
    if (phase !== 'done') {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [phase]);

  // Reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      handleSkip();
    }
  }, []);

  // Background Circuit Traces & Slow Floating Particles Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || phase === 'done') return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle Circuit Traces
    interface CircuitLine {
      startX: number;
      startY: number;
      midX: number;
      midY: number;
      endX: number;
      endY: number;
      progress: number;
      speed: number;
    }

    const circuits: CircuitLine[] = [];
    for (let i = 0; i < 9; i++) {
      const sx = Math.random() * w;
      const sy = Math.random() * h;
      const dx = (Math.random() - 0.5) * 220;
      const dy = (Math.random() - 0.5) * 160;
      circuits.push({
        startX: sx,
        startY: sy,
        midX: sx + dx,
        midY: sy,
        endX: sx + dx,
        endY: sy + dy,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004
      });
    }

    // Small Cyan / Blue slow floating particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.4 + 0.15
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw faint circuit traces
      ctx.lineWidth = 1;
      for (const c of circuits) {
        c.progress += c.speed;
        if (c.progress > 1) c.progress = 0;

        ctx.strokeStyle = 'rgba(0, 240, 255, 0.07)';
        ctx.beginPath();
        ctx.moveTo(c.startX, c.startY);
        ctx.lineTo(c.midX, c.midY);
        ctx.lineTo(c.endX, c.endY);
        ctx.stroke();

        // Pulsing spark on circuit
        const t = c.progress;
        let px: number;
        let py: number;
        if (t < 0.5) {
          const segT = t / 0.5;
          px = c.startX + (c.midX - c.startX) * segT;
          py = c.startY + (c.midY - c.startY) * segT;
        } else {
          const segT = (t - 0.5) / 0.5;
          px = c.midX + (c.endX - c.midX) * segT;
          py = c.midY + (c.endY - c.midY) * segT;
        }
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.35)';
        ctx.fill();
      }

      // Draw slow particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [phase]);

  // Overall Timeline orchestrator with print("welcome intellectra") typing
  useEffect(() => {
    // 1. Progress counter animation from 0% to 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const step = Math.max(1, Math.floor((100 - prev) * 0.12));
        return Math.min(100, prev + step);
      });
    }, 38);

    // 2. Character-by-character typing of print("welcome intellectra")
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      charIndex++;
      if (charIndex <= targetCode.length) {
        setTypedCode(targetCode.slice(0, charIndex));
      } else {
        clearInterval(typeInterval);
      }
    }, 28);

    // 3. Execution output steps
    const tOutput1 = setTimeout(() => {
      setOutputLines(['welcome intellectra']);
    }, 850);

    const tOutput2 = setTimeout(() => {
      setOutputLines([
        'welcome intellectra',
        '> initializing technology & creativity...',
      ]);
    }, 1050);

    const tOutput3 = setTimeout(() => {
      setOutputLines([
        'welcome intellectra',
        '> initializing technology & creativity...',
        '> loading innovation... ready!'
      ]);
    }, 1250);

    // 4. Main title reveal transition (1450ms)
    const tReveal = setTimeout(() => {
      setPhase('reveal');
    }, 1450);

    // 5. Digital scanline effect (2500ms)
    const tScan = setTimeout(() => {
      setPhase('scan');
    }, 2500);

    // 6. Dissolve / Exit transition (3100ms)
    const tExit = setTimeout(() => {
      setIsExiting(true);
      setPhase('exit');
    }, 3100);

    // 7. Complete & Unmount (3500ms)
    const tDone = setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(typeInterval);
      clearTimeout(tOutput1);
      clearTimeout(tOutput2);
      clearTimeout(tOutput3);
      clearTimeout(tReveal);
      clearTimeout(tScan);
      clearTimeout(tExit);
      clearTimeout(tDone);
    };
  }, []);

  if (phase === 'done') return null;

  const intellectraLetters = 'INTELLECTRA'.split('');

  // Subtle floating background symbols
  const codeSymbols = ['</>', '{ }', '( )', '[ ]', '=>', '01', '10'];
  const techLabels = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'AI', 'Cloud'];

  // Syntax highlight the typed print("welcome intellectra") command
  const renderHighlightedCode = (text: string) => {
    if (text.startsWith('print("')) {
      const insideStr = text.slice(7);
      const endsQuote = insideStr.endsWith('")');
      const cleanStr = endsQuote ? insideStr.slice(0, -2) : insideStr.replace(/"$/, '');
      return (
        <span>
          <span className="text-pink-400 font-bold">print</span>
          <span className="text-slate-400">(</span>
          <span className="text-emerald-300 font-semibold">&quot;{cleanStr}&quot;</span>
          {endsQuote && <span className="text-slate-400">)</span>}
        </span>
      );
    } else if (text.startsWith('print(')) {
      return (
        <span>
          <span className="text-pink-400 font-bold">print</span>
          <span className="text-slate-400">(</span>
          <span className="text-emerald-300 font-semibold">{text.slice(6)}</span>
        </span>
      );
    } else if (text.startsWith('print')) {
      return <span className="text-pink-400 font-bold">{text}</span>;
    }
    return <span className="text-cyan-300">{text}</span>;
  };

  return (
    <div
      role="dialog"
      aria-label="Welcome Loading Screen"
      aria-modal="true"
      className={`fixed inset-0 z-[9999] flex flex-col justify-between select-none overflow-hidden bg-[#030611] text-slate-100 transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-102 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic Background Canvas for subtle circuits & particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Subtle Digital Grid Pattern */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 z-1 ${
          phase === 'scan' ? 'opacity-40' : 'opacity-15'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px'
        }}
      />

      {/* Subtle Floating Code Symbols in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-2">
        {codeSymbols.map((sym, i) => (
          <span
            key={`sym-${i}`}
            className="absolute font-mono text-cyan-400/15 font-bold tracking-widest text-xs sm:text-sm animate-float-slow"
            style={{
              top: `${14 + (i * 12) % 72}%`,
              left: `${8 + (i * 15) % 84}%`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            {sym}
          </span>
        ))}

        {techLabels.map((tag, i) => (
          <span
            key={`tag-${i}`}
            className="absolute font-mono text-blue-400/15 text-[10px] sm:text-xs tracking-wider uppercase border border-cyan-500/10 px-2 py-0.5 rounded-md animate-float-reverse hidden sm:inline-block"
            style={{
              bottom: `${16 + (i * 11) % 68}%`,
              right: `${7 + (i * 14) % 85}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Horizontal Cyan Scanline Sweep (triggers during 'scan' phase) */}
      {phase === 'scan' && (
        <div 
          className="absolute left-0 right-0 z-50 pointer-events-none h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent shadow-[0_0_20px_#00F0FF,0_0_35px_#00F0FF]"
          style={{
            animation: 'scanSweep 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          }}
        />
      )}

      {/* Top Bar: Minimal Status Header */}
      <div className="relative z-10 w-full px-6 pt-6 flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
          <span className="tracking-wider text-slate-300">SYS_INIT :: 2026</span>
        </div>
        <div className="text-[11px] text-slate-500 tracking-widest">
          IT_SPECTRUM_OS // PYTHON_3.12
        </div>
      </div>

      {/* Center Zone: Either Terminal or Revealed Typography */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto w-full text-center">
        
        {/* 1. Terminal Window (Phase: 'terminal') */}
        {phase === 'terminal' && (
          <div className="w-full max-w-lg bg-[#070B18]/90 border border-cyan-500/30 rounded-2xl p-5 shadow-[0_0_35px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-[11px] text-cyan-300 font-semibold tracking-wider">
                main.py &bull; INTELLECTRA
              </span>
              <span className="text-[10px] text-cyan-400/80 font-mono">Python 3.12</span>
            </div>

            {/* Terminal Output Lines */}
            <div className="font-mono text-left space-y-2 text-xs sm:text-sm min-h-[120px]">
              {/* The command line */}
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold select-none">&gt;&gt;&gt;</span>
                <span className="font-mono">
                  {renderHighlightedCode(typedCode)}
                </span>
                {typedCode.length < targetCode.length && (
                  <span className="w-2 h-4 bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF] inline-block ml-0.5" />
                )}
              </div>

              {/* Output when print executes */}
              {outputLines.length > 0 && (
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 animate-in fade-in duration-150">
                  <div className="text-cyan-300 font-bold tracking-wide flex items-center gap-2">
                    <span className="text-emerald-400 text-xs select-none">▶</span>
                    <span className="drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">
                      {outputLines[0]}
                    </span>
                  </div>

                  {outputLines.slice(1).map((line, idx) => (
                    <div key={idx} className="text-slate-400 text-xs flex items-center gap-2 pl-4">
                      <span>{line}</span>
                    </div>
                  ))}

                  {/* Blinking cursor at the end of output */}
                  <div className="inline-flex items-center text-cyan-400 mt-1 pl-4">
                    <span className="w-2 h-3.5 bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. Main Title Reveal (Phase: 'reveal', 'scan', 'exit') */}
        {(phase === 'reveal' || phase === 'scan' || phase === 'exit') && (
          <div className="flex flex-col items-center justify-center animate-in fade-in duration-300">
            
            {/* INTELLECTRA Letter-by-Letter Animation */}
            <div className="overflow-hidden py-2">
              <h1 
                className="font-display font-black tracking-tight text-white flex items-center justify-center text-4xl sm:text-7xl md:text-8xl drop-shadow-[0_0_30px_rgba(0,240,255,0.45)]"
                style={{
                  transition: 'letter-spacing 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  letterSpacing: phase === 'reveal' ? '0.04em' : '0.06em'
                }}
              >
                {intellectraLetters.map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transform transition-all duration-500 ease-out"
                    style={{
                      animation: `letterSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.035}s forwards`,
                      opacity: 0,
                      textShadow: '0 0 25px rgba(0, 240, 255, 0.65)'
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>

            {/* Sub-titles */}
            <div 
              className="mt-3 space-y-1.5 opacity-0"
              style={{
                animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards'
              }}
            >
              <p className="text-xs sm:text-base font-bold font-mono tracking-[0.25em] text-cyan-300 uppercase">
                NATIONAL LEVEL SYMPOSIUM
              </p>
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-slate-400 uppercase font-mono">
                DEPARTMENT OF INFORMATION TECHNOLOGY
              </p>
            </div>

          </div>
        )}

      </div>

      {/* Bottom Zone: Progress Bar & Skip Button */}
      <div className="relative z-10 w-full px-6 pb-6">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          
          {/* Status Label & Percentage */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono mb-2 text-slate-400">
            <span className="tracking-wider uppercase text-cyan-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>INITIALIZING EXPERIENCE</span>
            </span>
            <span className="text-cyan-300 font-bold tabular-nums">
              {progress}%
            </span>
          </div>

          {/* Thin Animated Progress Bar (0% -> 100%) */}
          <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 shadow-[0_0_12px_#00F0FF] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

        {/* Skip button in bottom-right */}
        <div className="absolute bottom-5 right-6">
          <button
            onClick={handleSkip}
            className="text-xs font-mono font-semibold text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 cursor-pointer backdrop-blur-md"
            aria-label="Skip welcome animation"
          >
            <span>Skip</span>
            <span className="text-cyan-400">→</span>
          </button>
        </div>
      </div>

      {/* Inline styles for custom keyframe animations */}
      <style>{`
        @keyframes letterSlideIn {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.92);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scanSweep {
          0% {
            top: 0%;
            opacity: 0.9;
          }
          100% {
            top: 100%;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};
