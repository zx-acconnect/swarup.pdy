
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type LogType = 'info' | 'success' | 'warning' | 'error' | 'system';

export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: LogType;
}

interface ConsoleContextType {
  logs: LogEntry[];
  addLog: (message: string, type?: LogType) => void;
  clearLogs: () => void;
}

const ConsoleContext = createContext<ConsoleContextType | undefined>(undefined);

export const ConsoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = useCallback((message: string, type: LogType = 'info') => {
    const now = new Date();
    const baseTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const ms = now.getMilliseconds().toString().padStart(3, '0');
    const timeString = `${baseTime}.${ms}`;

    const newLog: LogEntry = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: timeString,
      message,
      type,
    };

    setLogs((prev) => {
      const newLogs = [...prev, newLog];
      if (newLogs.length > 8) { // Keep only last 8 logs to prevent clutter
        return newLogs.slice(newLogs.length - 8);
      }
      return newLogs;
    });
  }, []);

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  return (
    <ConsoleContext.Provider value={{ logs, addLog, clearLogs }}>
      {children}
    </ConsoleContext.Provider>
  );
};

export const useConsole = () => {
  const context = useContext(ConsoleContext);
  if (context === undefined) {
    throw new Error('useConsole must be used within a ConsoleProvider');
  }
  return context;
};
