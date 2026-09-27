import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme, animationSpeed, interactiveCursor } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -1000, y: -1000, isMoving: false };
    let mouseTimeout: NodeJS.Timeout | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isMoving = true;
      if (mouseTimeout) clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 2000);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    if (interactiveCursor) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const speedMultiplier = animationSpeed === 'hyper' ? 1.6 : animationSpeed === 'minimal' ? 0.4 : 1.0;

    // ==========================================
    // MATRIX THEME: Matrix Digital Code Rain
    // ==========================================
    const matrixChars = '01{}[]<>/=+$*#~!?ABCDEFIT2026';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    // ==========================================
    // PARTICLES / NODES FOR CYBER / GLASS / SYNTHWAVE
    // ==========================================
    const count = animationSpeed === 'minimal' ? 25 : animationSpeed === 'hyper' ? 65 : 45;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
      pulseVal: number;
    }

    const getColors = () => {
      if (theme === 'cyber') return ['#00F0FF', '#38BDF8', '#60A5FA', '#818CF8', '#A78BFA'];
      if (theme === 'synthwave') return ['#EC4899', '#A855F7', '#38BDF8', '#F43F5E', '#C084FC'];
      if (theme === 'matrix') return ['#00FF66', '#00F0FF', '#10B981', '#34D399'];
      return ['#B0D2EC', '#90BEE0', '#6BA4CE', '#CBD5E1'];
    };

    const colors = getColors();
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7 * speedMultiplier,
        vy: (Math.random() - 0.5) * 0.7 * speedMultiplier,
        size: Math.random() * (theme === 'synthwave' ? 3.5 : 2.5) + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseVal: Math.random() * Math.PI,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;

      if (theme === 'matrix') {
        // Semi-transparent fade for matrix tail
        ctx.fillStyle = 'rgba(10, 15, 29, 0.12)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#00F0FF';
        ctx.font = `${fontSize}px JetBrains Mono, monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Head of the drop is bright white/cyan
          if (Math.random() > 0.85) {
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#00F0FF';
          } else {
            ctx.fillStyle = i % 2 === 0 ? '#00F0FF' : '#10B981';
            ctx.shadowBlur = 4;
            ctx.shadowColor = '#00FF66';
          }

          ctx.fillText(char, x, y);
          ctx.shadowBlur = 0;

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i] += speedMultiplier * 0.9;
        }

        // Draw interactive mouse ripple in matrix
        if (interactiveCursor && mouse.x > 0) {
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 45, 0, Math.PI * 2);
          ctx.strokeStyle = '#00F0FF';
          ctx.globalAlpha = 0.25;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      } else {
        // Clear canvas for cyber/synthwave/glass
        ctx.clearRect(0, 0, width, height);

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];

          p1.x += p1.vx;
          p1.y += p1.vy;
          p1.pulseVal += p1.pulseSpeed;

          // Screen wrap
          if (p1.x < -10) p1.x = width + 10;
          else if (p1.x > width + 10) p1.x = -10;
          if (p1.y < -10) p1.y = height + 10;
          else if (p1.y > height + 10) p1.y = -10;

          // Mouse gravity/repulsion
          if (interactiveCursor && mouse.x > 0) {
            const mdx = p1.x - mouse.x;
            const mdy = p1.y - mouse.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 140) {
              const force = (1 - mDist / 140) * 2;
              p1.x += (mdx / mDist) * force;
              p1.y += (mdy / mDist) * force;

              // Draw laser beam line from cursor to nearby particles
              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(p1.x, p1.y);
              ctx.strokeStyle = theme === 'synthwave' ? '#EC4899' : '#00F0FF';
              ctx.globalAlpha = (1 - mDist / 140) * 0.45;
              ctx.lineWidth = 1.2;
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }

          // Pulsing particle size
          const currentSize = p1.size + Math.sin(p1.pulseVal) * 0.8;

          ctx.beginPath();
          if (theme === 'synthwave' && i % 4 === 0) {
            // Draw diamond star for synthwave
            ctx.save();
            ctx.translate(p1.x, p1.y);
            ctx.rotate(frame * 0.015);
            ctx.rect(-currentSize, -currentSize, currentSize * 2, currentSize * 2);
            ctx.fillStyle = p1.color;
            ctx.globalAlpha = p1.alpha;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p1.color;
            ctx.fill();
            ctx.restore();
          } else {
            ctx.arc(p1.x, p1.y, Math.max(0.5, currentSize), 0, Math.PI * 2);
            ctx.fillStyle = p1.color;
            ctx.globalAlpha = p1.alpha;
            if (theme === 'cyber' || theme === 'synthwave') {
              ctx.shadowBlur = 12;
              ctx.shadowColor = p1.color;
            }
            ctx.fill();
            ctx.shadowBlur = 0;
          }

          // Connect nearby particles with glowing cyber wires
          const maxDist = theme === 'cyber' ? 130 : 100;
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = theme === 'cyber' ? '#00F0FF' : theme === 'synthwave' ? '#C084FC' : '#B0D2EC';
              ctx.globalAlpha = (1 - dist / maxDist) * (theme === 'cyber' ? 0.35 : 0.22);
              ctx.lineWidth = theme === 'cyber' ? 1.0 : 0.75;
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactiveCursor) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (mouseTimeout) clearTimeout(mouseTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, animationSpeed, interactiveCursor]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ${
        theme === 'matrix' ? 'opacity-85' : theme === 'cyber' ? 'opacity-75' : 'opacity-60'
      }`}
      aria-hidden="true"
    />
  );
};
