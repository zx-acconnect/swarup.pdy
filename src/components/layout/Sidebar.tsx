
import React from 'react';
import { SOCIAL_LINKS } from '../../data/content';
import { Magnetic } from '../ui/Magnetic';

interface SidebarProps {
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav className="flex flex-col space-y-12 font-mono text-sm justify-between pb-12">
      {/* Fixed Social Links with "System Port" aesthetic */}
      <div className="hidden lg:flex flex-col gap-8 fixed top-1/2 -translate-y-1/2 left-8 z-30 mix-blend-difference text-white">

        {/* Decorative Top Line */}
        <div className="w-px h-12 bg-zinc-400/30 mx-auto" />

        <div className="flex flex-col items-center gap-8">
          {SOCIAL_LINKS.map((link) => (
            <Magnetic key={link.label} strength={10}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center"
                aria-label={link.label}
              >
                {/* Vertical Text Label */}
                <span
                  className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  {link.label}
                </span>

                {/* Active Dot Indicator */}
                <div className="absolute -right-3 w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Decorative Bottom Line */}
        <div className="w-px h-12 bg-zinc-400/30 mx-auto" />
      </div>
    </nav>
  );
};
