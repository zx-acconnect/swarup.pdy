
import React from 'react';
import { motion } from 'framer-motion';

export const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-zinc-950 flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center gap-4">
        {/* Minimal Spinner */}
        <div className="relative w-12 h-12">
          <motion.div
            className="absolute inset-0 border-t-2 border-emerald-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-t-2 border-zinc-800 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Subtle Text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-500 text-xs tracking-[0.2em] font-mono uppercase"
        >
          Loading
        </motion.span>
      </div>
    </motion.div>
  );
};
