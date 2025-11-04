import React from 'react';

interface StatusBarProps {
    status: string;
    error: string | null;
}

const StatusBar: React.FC<StatusBarProps> = ({ status, error }) => {
    const statusColor = error ? 'bg-red-800 text-red-200' : 'bg-gray-800 text-cyan-300';

    return (
        <div className={`w-full p-3 mb-4 rounded-lg shadow-md transition-colors duration-300 ${statusColor}`}>
            <p className="text-center font-mono text-sm tracking-wide">
                {error ? `Error: ${error}` : status}
            </p>
        </div>
    );
};

export default StatusBar;
