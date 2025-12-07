import React from 'react';
import { PORTFOLIO_DATA } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SkillModule } from '../features/SkillModule';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">

        <div className="flex flex-col mb-16 px-4 md:px-0 lg:pl-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-emerald-500" />
              <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
                {skills.label}
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100">
              {skills.title}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:pl-24">
          {skills.items.map((skillGroup, idx) => (
            <SkillModule key={skillGroup.category} group={skillGroup} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
