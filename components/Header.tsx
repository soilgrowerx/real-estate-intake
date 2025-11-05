import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 py-4 px-4 md:px-8 shadow-lg shadow-cyan-500/10 mb-8">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="logo-white.png"
            alt="Real Estate AI Intake Logo"
            className="h-10 w-10"
          />
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            New Client Intake Form
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;