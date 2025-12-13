import { AnimatePresence, motion } from 'framer-motion';
import { Activity, ArrowUpRight, Cpu, Database, Globe, Shield, Zap } from 'lucide-react';
import { memo, useState } from 'react';
import { useConsole } from '../../context/ConsoleContext';
import { Project } from '../../types';
import { CountUp } from '../ui/CountUp';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addLog } = useConsole();

  const handleMouseEnter = () => {
    setIsHovered(true);
    addLog(`ACCESS_PROJECT: ${project.id} // ${project.title}`, 'system');
  };

  const getMetricIcon = (i: number) => {
    const icons = [Activity, Zap, Shield, Cpu, Database, Globe];
    const Icon = icons[i % icons.length];
    return <Icon size={14} className="text-emerald-500" />;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative py-16 md:py-24 w-full border-t border-zinc-100 dark:border-zinc-800/50 first:border-t-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ left: '0%', opacity: 0 }}
            animate={{ left: '100%', opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent z-0 pointer-events-none hidden md:block"
          />
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start relative z-10 px-4 md:px-0">

        <div className="md:col-span-2 flex flex-col items-start pl-2 md:pl-0">
          <span className="font-mono text-4xl font-light text-zinc-300 dark:text-zinc-800 group-hover:text-emerald-500 transition-colors duration-500">
            {project.id}
          </span>
          <span className="mt-2 font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Case Study
          </span>
        </div>

        <div className="md:col-span-6 flex flex-col">
          <motion.h3
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 leading-[0.95] mb-6"
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {project.title}
          </motion.h3>

          <div className="pl-0 md:pl-8 border-l-0 md:border-l border-zinc-200 dark:border-zinc-800 md:ml-2">
            <p className="font-sans text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-[10px] font-mono uppercase tracking-wider rounded-sm border border-zinc-200 dark:border-zinc-800 group-hover:border-emerald-500/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-4 mt-8 md:mt-0">
          <div className="bg-white/50 dark:bg-zinc-900/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 group-hover:border-emerald-500/30 transition-colors backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">System Output</span>
            </div>

            <div className="flex flex-col gap-6">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex items-center justify-between group/metric">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-400 dark:text-zinc-500 group-hover/metric:text-emerald-500 group-hover/metric:bg-emerald-500/10 transition-colors">
                      {getMetricIcon(i)}
                    </div>
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      {metric.label}
                    </span>
                  </div>
                  <div className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                    {typeof metric.value === 'number' ? (
                      <CountUp value={metric.value} suffix={metric.suffix} />
                    ) : (
                      <span>{metric.value}{metric.suffix}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-lg group/btn hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors mt-2"
              aria-label={`View source code for ${project.title}`}
            >
              <span className="font-mono text-xs font-bold uppercase tracking-widest">View Source</span>
              <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          )}
        </div>

      </div>
    </motion.article>
  );
});

ProjectCard.displayName = 'ProjectCard';
