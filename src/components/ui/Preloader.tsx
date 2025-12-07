
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle2, ChevronRight } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "Initializing Kernel...",
  "Loading Graphic Assets...",
  "Verifying Mathematical Proofs...",
  "Connecting to Secure Node...",
  "Optimizing Viewport...",
  "Calibrating Sensors...",
  "Checking System Integrity...",
  "Establishing Uplink...",
  "Syncing Databases...",
  "Compiling Modules...",
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  // Track real page load
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Log sequence logic
  useEffect(() => {
    let logIndex = 0;
    const interval = setInterval(() => {
      // If page is loaded, we can speed up or finish
      if (isLoaded && logIndex >= 3) { // Ensure at least a few logs show for effect
        clearInterval(interval);
        setAccessGranted(true);
      } else {
        setLogs(prev => {
          const nextLog = BOOT_LOGS[logIndex % BOOT_LOGS.length];
          const newLogs = [...prev, nextLog];
          if (newLogs.length > 6) newLogs.shift(); // Keep only last 6 lines
          return newLogs;
        });
        logIndex++;
      }
    }, 150); // Speed of logs

    return () => clearInterval(interval);
  }, [isLoaded]);

  // Exit transition
  useEffect(() => {
    if (accessGranted) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1200); // Time to read "ACCESS GRANTED"
      return () => clearTimeout(timeout);
    }
  }, [accessGranted, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[999] bg-zinc-950 flex flex-col items-center justify-center p-4 font-mono overflow-hidden"
    >
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-6">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-emerald-500" />
            <span className="text-xs text-zinc-400 uppercase tracking-widest">System Boot</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>
        </div>

        {/* Logs */}
        <div className="h-40 flex flex-col justify-end gap-2 mb-8">
          <AnimatePresence mode='popLayout'>
            {!accessGranted ? (
              logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-xs md:text-sm text-zinc-500"
                >
                  <ChevronRight size={12} className="text-zinc-700" />
                  <span>{log}</span>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4"
              >
                <CheckCircle2 size={48} className="text-emerald-500" />
                <span className="text-emerald-500 font-bold tracking-[0.2em] text-lg animate-pulse">
                  ACCESS GRANTED
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Loading Bar */}
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden relative">
          {!accessGranted ? (
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-emerald-500/50 w-1/3"
              animate={{ x: ["-100%", "400%"] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          ) : (
            <motion.div
              className="h-full bg-emerald-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};
