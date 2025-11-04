import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 border-b-2 border-cyan-500/50 pb-3 mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
};

export default Section;
