
import React from 'react';

const PaperHeader: React.FC = () => {
  return (
    <div className="text-center mb-10 pt-12 relative">
      {/* Decorative Doodles around header */}
      <div className="absolute top-4 left-1/4 floating opacity-40">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M20 2 L24 15 L38 15 L27 24 L31 37 L20 30 L9 37 L13 24 L2 15 L16 15 Z" fill="none" stroke="black" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute top-10 right-1/4 floating-delayed opacity-40">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="10" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
      </div>

      <div className="relative inline-block px-8 py-4">
        <div className="absolute inset-0 border-2 border-black rough-border -rotate-1"></div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-black relative z-10">
          西文賞析・稿紙上的美
        </h1>
      </div>
      
      <div className="mt-6">
        <p className="text-gray-600 italic handwriting text-lg">El encanto de las words en papel... ✨</p>
      </div>
    </div>
  );
};

export default PaperHeader;
