import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 py-4 px-4 md:px-8 shadow-lg shadow-cyan-500/10 mb-8">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA2YjZkNCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCI+PHBhdGggZD0iTTEwIDIwdi02aDR2Nmg1di04aDNMMTIgMyAyIDEyaDN2OHoiLz48L3N2Zz4="
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