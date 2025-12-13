
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, Maximize2, Minimize2, Terminal } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { LogType, useConsole } from '../../context/ConsoleContext';
import { cn } from '../../lib/utils';

export const SystemConsole: React.FC = () => {
  const { logs } = useConsole();
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewLogs, setHasNewLogs] = useState(false);

  // Auto-scroll to bottom when new logs arrive
  useEffect(() => {
    if (bottomRef.current && isOpen) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (!isOpen && logs.length > 0) {
      setHasNewLogs(true);
      // Optional: Play subtle beep sound here
    }
  }, [logs, isOpen]);

  const toggleConsole = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setHasNewLogs(false);
  };

  const getTypeColor = (type: LogType) => {
    switch (type) {
      case 'success': return 'text-emerald-400';
      case 'warning': return 'text-amber-400';
      case 'error': return 'text-rose-400';
      case 'system': return 'text-zinc-500';
      default: return 'text-zinc-300';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">

      {/* The Console Window (Easter Egg Reveal) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[320px] sm:w-[400px] bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-md shadow-2xl overflow-hidden"
          >
            {/* Console Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-emerald-500" />
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">/var/log/sys.log</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
            </div>

            {/* Logs Area */}
            <div className="p-3 font-mono text-[10px] h-[200px] overflow-y-auto scrollbar-hide">
              <div className="flex flex-col gap-1.5">
                {logs.map((log) => (
                  <div key={log.id} className="flex gap-2 opacity-90 hover:opacity-100 transition-opacity">
                    <span className="text-zinc-600 shrink-0 select-none">[{log.timestamp}]</span>
                    <span className={cn("break-all", getTypeColor(log.type))}>
                      {log.type === 'system' ? '> ' : ''}{log.message}
                    </span>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Typing Cursor */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-1.5 h-3 bg-emerald-500 mt-1"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Trigger Badge (Always Visible) */}
      <motion.button
        onClick={toggleConsole}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "flex items-center gap-3 px-4 py-2 rounded-full border shadow-lg backdrop-blur-sm transition-all duration-300",
          isOpen
            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
            : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600"
        )}
      >
        <div className="relative">
          <Activity size={14} className={cn(isOpen && "animate-pulse")} />
          {hasNewLogs && !isOpen && (
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          )}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest font-medium">
          {isOpen ? 'Connected' : 'Online'}
        </span>
        {isOpen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
      </motion.button>
    </div>
  );
};
