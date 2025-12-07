import React from 'react';
import { PORTFOLIO_DATA } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { MapPin, Activity, Fingerprint, Globe } from 'lucide-react';
import { MetaCard, StatRow } from '../features/ProfileWidgets';

export const AboutSection: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  const getMetaIcon = (index: number) => {
    return index === 0 ? <MapPin size={18} /> : <Globe size={18} />;
  };

  return (
    <section className="py-24 relative">
      <div className="absolute left-[1.5rem] md:left-[3rem] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden lg:block" />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">

        <div className="flex flex-col mb-16 px-4 md:px-0 lg:pl-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-emerald-500" />
              <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
                {about.label}
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100">
              {about.title}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:pl-24">

          <div className="lg:col-span-8 flex flex-col gap-12">
            <Reveal delay={0.2}>
              <div className="relative p-8 border-l-2 border-emerald-500/20 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm">
                <Fingerprint className="absolute top-8 right-8 text-zinc-200 dark:text-zinc-800 w-24 h-24 opacity-20 -rotate-12" aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6">Subject Description</h3>
                <article className="prose prose-zinc dark:prose-invert prose-lg lg:prose-xl leading-loose font-light text-zinc-800 dark:text-zinc-300 max-w-none">
                  <p>{about.bio}</p>
                </article>

                <div className="mt-8 flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                    Clearance: {about.status.clearance}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px] font-mono uppercase tracking-wider">
                    Status: {about.status.current}
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {about.metadata.map((meta, i) => (
                <MetaCard
                  key={i}
                  icon={getMetaIcon(i)}
                  label={meta.label}
                  value={meta.value}
                  sub={meta.sub || ''}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 p-8 rounded-lg shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full translate-x-16 -translate-y-16" />

              <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
                <Activity size={20} className="text-emerald-500" />
                {about.serviceRecord.title}
              </h3>

              <div className="flex flex-col gap-8">
                {about.serviceRecord.stats.map((stat, i) => {
                  const Icon = stat.icon || Activity;
                  return (
                    <StatRow
                      key={i}
                      label={stat.label}
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      icon={<Icon size={16} />}
                    />
                  );
                })}
              </div>

              <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider opacity-60">
                  <span>Last Audit: {about.serviceRecord.lastAudit}</span>
                  <span>ID: {about.serviceRecord.id}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
