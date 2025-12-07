import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { PORTFOLIO_DATA } from '../../data/content';
import { Magnetic } from '../ui/Magnetic';
import { cn } from '../../lib/utils';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  activeSection?: string;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, activeSection, onOpenContact }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { navbar, config } = PORTFOLIO_DATA;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none"
      >
        <div
          className={cn(
            "pointer-events-auto w-full max-w-[95%] md:max-w-5xl transition-all duration-500 ease-out rounded-full border flex items-center justify-between pl-2 pr-2 sm:pl-6",
            scrolled || isMobileMenuOpen
              ? "bg-zinc-50/85 dark:bg-zinc-900/85 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-zinc-800/5 py-2"
              : "bg-transparent border-transparent py-4"
          )}
        >
          <div className="flex items-center gap-4">
            <Magnetic strength={20}>
              <a href="#home" className="relative group flex items-center gap-3" aria-label="Go to home">
                <div className="relative w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center overflow-hidden">
                  <span className="font-display font-bold text-zinc-100 dark:text-zinc-900 text-lg relative z-10">
                    {config.logo.main.charAt(0).toUpperCase()}
                  </span>
                  <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">{config.logo.main}</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 dark:text-emerald-500 hidden sm:block">{config.logo.sub}</span>
                </div>
              </a>
            </Magnetic>
          </div>

          <nav className="hidden lg:flex items-center gap-1 bg-white/50 dark:bg-zinc-800/50 p-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-md shadow-sm">
            {navbar.items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "relative px-5 py-2.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider transition-all duration-300",
                    isActive
                      ? "text-zinc-100 bg-zinc-900 dark:text-zinc-900 dark:bg-zinc-100 shadow-md"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700/50"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 hidden lg:block" />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-900/10"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>

            <Magnetic>
              <button
                onClick={onOpenContact}
                className="hidden lg:flex items-center gap-2 pl-6 pr-2 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full group hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors duration-300"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-wider">{navbar.ctaText}</span>
                <div className="w-8 h-8 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight size={14} className="text-zinc-900 dark:text-zinc-100" />
                </div>
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-24 left-4 right-4 z-40 lg:hidden"
          >
            <div className="bg-zinc-50/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-2xl overflow-hidden p-2">
              <div className="flex flex-col gap-1">
                {navbar.items.map((item, i) => (
                  <motion.a
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "p-4 rounded-2xl flex items-center justify-between group transition-all duration-300",
                      activeSection === item.id
                        ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                    )}
                  >
                    <span className="font-display text-lg font-bold tracking-tight">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div layoutId="mobile-indicator" className="w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end px-4 pb-2">
                <div className="flex gap-4">
                  {config.socials.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      aria-label={link.label}
                    >
                      {React.createElement(link.icon, { size: 20 })}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
