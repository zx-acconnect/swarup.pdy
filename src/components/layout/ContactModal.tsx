import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Mail, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';
import { PORTFOLIO_DATA } from '../../data/content';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);
    const { config } = PORTFOLIO_DATA;

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(config.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={handleBackdropClick}
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                                        Get in Touch
                                    </h2>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                                        Let's discuss something amazing
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-6">

                                {/* Email Action Card */}
                                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Email Address</p>
                                            <p className="font-medium text-zinc-900 dark:text-zinc-100 select-all">{config.email}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={handleCopyEmail}
                                            className={cn(
                                                "flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300",
                                                copied
                                                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                                                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
                                            )}
                                        >
                                            {copied ? <Check size={16} /> : <Copy size={16} />}
                                            {copied ? "Copied" : "Copy"}
                                        </button>

                                        <a
                                            href={`mailto:${config.email}`}
                                            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
                                        >
                                            <ExternalLink size={16} />
                                            Send Mail
                                        </a>
                                    </div>
                                </div>

                                {/* Socials Grid */}
                                <div>
                                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3 px-1">Social Profiles</p>
                                    <div className="grid grid-cols-3 gap-3">
                                        {config.socials.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all group"
                                            >
                                                <div className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                                                    {React.createElement(social.icon, { size: 24 })}
                                                </div>
                                                <span className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 uppercase tracking-wide">
                                                    {social.label}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
