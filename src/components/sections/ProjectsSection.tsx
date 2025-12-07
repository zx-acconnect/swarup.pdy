import React from 'react';
import { PROJECTS } from '../../data/content';
import { ProjectCard } from '../features/ProjectCard';
import { Reveal } from '../ui/Reveal';

export const ProjectsSection: React.FC = () => {
  return (
    <section className="py-24 relative">
      {/* Decorative Timeline Line - Continuous Guide */}
      <div className="absolute left-[1.5rem] md:left-[3rem] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden lg:block" />

      <div className="flex flex-col mb-20 px-4 md:px-0 lg:pl-24">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-emerald-500" />
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-widest">
              Engineering Logs
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100">
            Selected Case Studies
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col lg:pl-24">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
