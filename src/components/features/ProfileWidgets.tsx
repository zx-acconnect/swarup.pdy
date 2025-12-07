import React, { memo } from 'react';
import { Reveal } from '../ui/Reveal';
import { CountUp } from '../ui/CountUp';

interface MetaCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}

export const MetaCard = memo(({ icon, label, value, sub }: MetaCardProps) => (
  <Reveal width="100%">
    <div className="p-6 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-colors group h-full">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md group-hover:text-emerald-500 transition-colors">
          {icon}
        </div>
        <div>
          <span className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">{label}</span>
          <span className="block font-sans text-lg font-medium text-zinc-900 dark:text-zinc-100">{value}</span>
          <span className="block font-sans text-sm text-zinc-500 mt-1">{sub}</span>
        </div>
      </div>
    </div>
  </Reveal>
));

MetaCard.displayName = 'MetaCard';

interface StatRowProps {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
  icon: React.ReactNode;
}

export const StatRow = memo(({ label, value, suffix, decimals = 0, icon }: StatRowProps) => (
  <div className="group">
    <div className="flex justify-between items-end mb-2">
      <span className="font-mono text-xs uppercase tracking-wider opacity-70 flex items-center gap-2">
        {icon} {label}
      </span>
      <span className="font-display text-3xl font-bold">
        <CountUp value={value} suffix={suffix} decimals={decimals} />
      </span>
    </div>
    <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-emerald-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"
        style={{ width: '100%' }}
      />
    </div>
  </div>
));

StatRow.displayName = 'StatRow';
