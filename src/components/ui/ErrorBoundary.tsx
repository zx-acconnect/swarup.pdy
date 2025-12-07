import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-6 font-mono text-red-500 selection:bg-red-900 selection:text-white">
                    <div className="max-w-2xl w-full border border-red-900/50 bg-red-950/10 p-8 rounded-lg backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-6 border-b border-red-900/30 pb-4">
                            <AlertTriangle size={32} />
                            <div>
                                <h1 className="text-xl font-bold tracking-widest uppercase">Critical System Failure</h1>
                                <p className="text-xs opacity-70">Error Code: KERNEL_PANIC</p>
                            </div>
                        </div>

                        <div className="bg-black/50 p-4 rounded mb-8 overflow-x-auto">
                            <code className="text-sm">
                                {this.state.error?.toString() || "Unknown Error"}
                            </code>
                            <p className="mt-2 text-xs text-red-400/50">
                                &gt; Stack trace suppressed for security.
                            </p>
                        </div>

                        <button
                            onClick={() => window.location.reload()}
                            className="flex items-center gap-2 px-6 py-3 bg-red-900/20 hover:bg-red-900/40 border border-red-800 text-red-400 rounded transition-colors text-sm uppercase tracking-wider font-bold"
                        >
                            <RefreshCcw size={16} />
                            Reboot System
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}