import React from 'react';

interface FloatingMicButtonProps {
  onClick: () => void;
  isRecording: boolean;
}

const FloatingMicButton: React.FC<FloatingMicButtonProps> = ({ onClick, isRecording }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`fixed bottom-28 md:bottom-24 right-4 md:right-8 h-16 w-16 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-opacity-50 z-20 animate-fade-in ${
        isRecording ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 animate-pulse' : 'bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-400'
      }`}
      aria-label={isRecording ? 'Stop voice input' : 'Start voice input'}
    >
      {isRecording ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
        </svg>

      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" />
          <path fillRule="evenodd" d="M5.5 4.5A2.5 2.5 0 018 2h4a2.5 2.5 0 012.5 2.5v5A2.5 2.5 0 0112 12h-4a2.5 2.5 0 01-2.5-2.5v-5zM8 2a1.5 1.5 0 00-1.5 1.5v5A1.5 1.5 0 008 10h4a1.5 1.5 0 001.5-1.5v-5A1.5 1.5 0 0012 2H8z" clipRule="evenodd" />
          <path d="M10 18a5 5 0 005-5h-1a4 4 0 01-8 0H1a1 1 0 00-1 1v.5a.5.5 0 00.5.5H3a7 7 0 0014 0h1.5a.5.5 0 00.5-.5V14a1 1 0 00-1-1h-4a5 5 0 00-5 5z" />
        </svg>
      )}
    </button>
  );
};

export default FloatingMicButton;