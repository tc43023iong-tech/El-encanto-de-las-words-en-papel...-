
import React from 'react';
import { Poem } from '../types';

interface PoemSelectorProps {
  poems: Poem[];
  currentId: string;
  onSelect: (id: string) => void;
}

const PoemSelector: React.FC<PoemSelectorProps> = ({ poems, currentId, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {poems.map((poem, idx) => (
        <button
          key={poem.id}
          onClick={() => onSelect(poem.id)}
          className={`
            relative px-6 py-3 font-bold transition-all transform hover:-translate-y-1
            ${currentId === poem.id 
              ? 'bg-black text-white scale-105' 
              : 'bg-white text-black hover:bg-gray-50'
            }
          `}
        >
          {/* Rough sticky note effect */}
          <div className={`
            absolute inset-0 border-2 border-black rough-border pointer-events-none
            ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}
          `}></div>
          <span className="relative z-10 handwriting text-lg">{poem.title}</span>
          
          {currentId === poem.id && (
            <div className="absolute -top-2 -right-2 text-xl animate-bounce">📍</div>
          )}
        </button>
      ))}
    </div>
  );
};

export default PoemSelector;
