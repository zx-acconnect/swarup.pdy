import React, { useEffect, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

interface CountUpProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ value, duration = 2, decimals = 0, suffix = '', className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });

  const displayValue = useTransform(springValue, (current) =>
    current.toFixed(decimals) + suffix
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
};
