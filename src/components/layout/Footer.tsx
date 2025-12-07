
import React from 'react';
import { SOCIAL_LINKS } from '../../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-12 pb-12">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Copyright */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="font-mono text-xs text-zinc-500">
              © {new Date().getFullYear()} Swarup Pandy.
            </p>
            <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
              System Status: Nominal
            </p>
          </div>

          {/* Footer Socials (Visible on all screens) */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-500 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
