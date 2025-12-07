import { useEffect } from 'react';
import { useConsole } from '../context/ConsoleContext';

export const useTelemetry = () => {
    const { addLog } = useConsole();

    useEffect(() => {
        // 1. Observe Paint Timing (FCP)
        const paintObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.name === 'first-contentful-paint') {
                    const value = Math.round(entry.startTime);
                    const rating = value < 1800 ? 'GOOD' : value < 3000 ? 'NEEDS_IMPROVEMENT' : 'POOR';
                    addLog(`METRIC_FCP: ${value}ms [${rating}]`, 'success');
                }
            });
        });

        // 2. Observe Layout Shifts (CLS)
        const layoutShiftObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: any) => {
                if (!entry.hadRecentInput && entry.value > 0) {
                    addLog(`LAYOUT_SHIFT_DETECTED: ${entry.value.toFixed(4)}`, 'warning');
                }
            });
        });

        // 3. Observe Long Tasks (Main Thread Blocking)
        const longTaskObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                addLog(`LONG_TASK: ${Math.round(entry.duration)}ms blocking main thread`, 'error');
            });
        });

        try {
            paintObserver.observe({ type: 'paint', buffered: true });
            layoutShiftObserver.observe({ type: 'layout-shift', buffered: true });
            longTaskObserver.observe({ type: 'longtask', buffered: true });
        } catch (e) {
            // Fallback for browsers that don't support specific observers
            console.warn("Telemetry observers not fully supported");
        }

        // 4. Report Memory Usage (Chrome only)
        const logMemory = () => {
            if ((performance as any).memory) {
                const mem = (performance as any).memory;
                const usedMB = Math.round(mem.usedJSHeapSize / 1024 / 1024);
                addLog(`MEM_USAGE: ${usedMB}MB / ${Math.round(mem.jsHeapSizeLimit / 1024 / 1024)}MB`, 'info');
            }
        };

        // Log memory 2 seconds after load
        setTimeout(logMemory, 2000);

        return () => {
            paintObserver.disconnect();
            layoutShiftObserver.disconnect();
            longTaskObserver.disconnect();
        };
    }, [addLog]);
};