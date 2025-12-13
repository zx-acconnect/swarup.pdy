import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Magnetic } from '../ui/Magnetic';
import { CountUp } from '../ui/CountUp';
import { PORTFOLIO_DATA } from '../../data/content';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const { hero } = PORTFOLIO_DATA;
  /* const container removed as unused */

  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskRadius = useMotionValue(250);

  useEffect(() => {
    const controls = animate(maskRadius, [250, 400, 250], {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [maskRadius]);

  const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    const { left, top } = wrapperRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(${maskRadius}px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <motion.section
      initial="initial"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-16 pb-8 overflow-hidden"
      id="home"
    >
      <div
        ref={wrapperRef}
        className="absolute top-0 right-[-10%] lg:right-0 -z-10 select-none pointer-events-none w-[90vw] lg:w-[50vw] h-auto mix-blend-multiply dark:mix-blend-lighten opacity-30 dark:opacity-40"
      >
        <svg viewBox="0 0 800 500" className="w-full h-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="fill-emerald-500/20" />
            </pattern>
          </defs>

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-display font-bold text-[400px] fill-transparent stroke-zinc-300/50 dark:stroke-zinc-800/50"
            strokeWidth="2"
            style={{ letterSpacing: '0.01em' }}
          >
            {hero.watermark}
          </text>
        </svg>

        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage: maskImage,
            WebkitMaskImage: maskImage,
          }}
        >
          <svg viewBox="0 0 800 500" className="w-full h-full overflow-visible" aria-hidden="true">
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-display font-bold text-[400px]"
              strokeWidth="3"
              stroke="url(#trace-gradient)"
              fill="url(#dot-grid)"
              style={{
                letterSpacing: '0.01em',
                filter: 'drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.3))'
              }}
              animate={{ strokeDashoffset: [0, 200] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear"
              }}
              strokeDasharray="10 30"
            >
              {hero.watermark}
            </motion.text>
          </svg>
        </motion.div>
      </div>

      <div className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10 px-4 sm:px-6">

        <div className="flex items-center gap-6 mb-6">
          <Reveal width="100%">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-medium">{hero.status.label}</span>
              </div>
              <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700 hidden sm:block" />
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest hidden sm:block">
                <Terminal className="inline w-3 h-3 mr-2 mb-0.5" />
                {hero.status.version} // {hero.status.readyText}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col font-display font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 leading-[0.9] mb-8 lg:mb-12">
          <Reveal>
            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8.5rem]">
              {hero.headline.primary}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8.5rem] text-zinc-400 dark:text-zinc-700 ml-[5vw] lg:ml-[8vw]">
              {hero.headline.secondary}<span className="text-emerald-500">.</span>
            </h1>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-zinc-200 dark:border-zinc-800 pt-8 lg:pt-8">

          <div className="lg:col-span-5">
            <Reveal delay={0.3}>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-xl">
                {hero.bio.prefix} <span className="text-zinc-900 dark:text-zinc-100 font-medium">{hero.bio.highlight}</span> {hero.bio.suffix}
                <span className="block mt-2 text-sm text-zinc-500 dark:text-zinc-500 font-mono uppercase tracking-wider">
                  {hero.bio.tagline}
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-6 flex flex-wrap gap-4">
                <Magnetic>
                  <div className="flex items-center gap-4 sm:flex-row">
                    {/* Primary Action: Download Resume (Both Skins) */}
                    <a
                      href={PORTFOLIO_DATA.config.resumeUrl}
                      download={PORTFOLIO_DATA.config.resumeFileName}
                      className="flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-zinc-900 transition-all"
                    >
                      {hero.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Mobile Secondary: Contact Link */}
                    <button
                      onClick={onOpenContact}
                      className="lg:hidden flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Contact</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex justify-start lg:justify-end mt-6 lg:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12">
              {hero.stats.map((stat, i) => (
                <Reveal key={i} delay={0.5 + (i * 0.1)}>
                  <div className={`flex flex-col border-l-2 ${stat.highlight ? 'border-emerald-500/50' : 'border-zinc-200 dark:border-zinc-800'} pl-4 sm:pl-6`}>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                      <CountUp value={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} />
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 mt-1">
                      {stat.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
