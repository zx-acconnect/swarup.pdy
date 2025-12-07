import React from 'react';

export const SkipLink: React.FC = () => {
    return (
        <a
            href="#main-content"
            className="fixed top-4 left-4 z-[100] -translate-y-[150%] focus:translate-y-0 bg-emerald-500 text-zinc-950 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider rounded shadow-xl transition-transform duration-200"
        >
            Skip to Content
        </a>
    );
};