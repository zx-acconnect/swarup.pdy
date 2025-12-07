import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { memo, useState } from 'react';
import { cn } from '../../lib/utils';
import { SkillGroup } from '../../types';
import { Reveal } from '../ui/Reveal';

interface SkillModuleProps {
  group: SkillGroup;
  index: number;
}

const SkillPill = memo(({ skill, index, parentHovered }: { skill: string, index: number, parentHovered: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { delay: index * 0.05 }
      }}
      viewport={{ once: true }}
      className={cn(
        "px-3 py-1.5 rounded text-xs font-mono font-medium border transition-all duration-300 cursor-default",
        parentHovered
          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
          : "bg-zinc-100 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
      )}
    >
      {skill}
    </motion.div>
  );
});

SkillPill.displayName = 'SkillPill';

export const SkillModule = memo(({ group, index }: SkillModuleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = group.icon || Terminal;

  return (
    <Reveal delay={index * 0.1} width="100%">
      <div
        className="group relative h-full bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 backdrop-blur-sm hover:border-emerald-500/30 transition-colors duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="article"
        aria-label={`Skill category: ${group.category}`}
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-300 dark:border-zinc-700 group-hover:border-emerald-500 transition-colors duration-300" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-300 dark:border-zinc-700 group-hover:border-emerald-500 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-300 dark:border-zinc-700 group-hover:border-emerald-500 transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-300 dark:border-zinc-700 group-hover:border-emerald-500 transition-colors duration-300" />

        <div className="flex items-center justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 group-hover:text-emerald-500 transition-colors duration-300">
              <Icon size={16} aria-hidden="true" />
            </span>
            <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-700 dark:text-zinc-200">
              {group.category}
            </h3>
          </div>
          <span className="font-mono text-[10px] text-zinc-400" aria-hidden="true">
            0{index + 1}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {group.items.map((skill: string, i: number) => (
            <SkillPill key={skill} skill={skill} index={i} parentHovered={isHovered} />
          ))}
        </div>
      </div>
    </Reveal>
  );
});

SkillModule.displayName = 'SkillModule';
