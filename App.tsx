
import React, { useState } from 'react';
import { SAMPLE_POEMS } from './constants';
import PaperHeader from './components/PaperHeader';
import PoemSelector from './components/PoemSelector';
import ManuscriptSheet from './components/ManuscriptSheet';

const App: React.FC = () => {
  const [currentPoemId, setCurrentPoemId] = useState(SAMPLE_POEMS[0].id);

  const currentPoem = SAMPLE_POEMS.find(p => p.id === currentPoemId) || SAMPLE_POEMS[0];

  return (
    <div className="min-h-screen bg-[#f9f9f9] pb-24 px-4 selection:bg-black selection:text-white">
      {/* Background Doodles */}
      <div className="fixed top-20 left-10 opacity-20 pointer-events-none hidden lg:block floating print:hidden">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
          <path d="M20,20 C40,40 60,0 80,20 S100,60 80,80 S20,100 0,80" />
        </svg>
      </div>
      <div className="fixed bottom-40 right-10 opacity-20 pointer-events-none hidden lg:block floating-delayed print:hidden">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
          <rect x="20" y="20" width="50" height="70" rx="5" />
          <line x1="30" y1="40" x2="60" y2="40" />
          <line x1="30" y1="60" x2="60" y2="60" />
          <path d="M75,30 L85,20 L90,25 L80,35 Z" fill="black" />
        </svg>
      </div>

      <div className="print:hidden">
        <PaperHeader />
      </div>
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="print:hidden">
          <PoemSelector 
            poems={SAMPLE_POEMS} 
            currentId={currentPoemId} 
            onSelect={setCurrentPoemId} 
          />
        </div>

        <div className="relative group">
          {/* A cute pencil character decoration */}
          <div className="absolute -right-16 top-0 text-5xl hidden xl:block floating print:hidden">✏️</div>
          <ManuscriptSheet poem={currentPoem} />
        </div>
      </div>

      <footer className="mt-24 text-center print:hidden">
        <div className="flex justify-center gap-4 mb-4 text-2xl opacity-30">
          <span>🎨</span><span>✍️</span><span>📚</span><span>🇪🇸</span>
        </div>
        <div className="bg-black text-white inline-block px-4 py-1 mb-2 handwriting">
          © 2024 西語美文賞析・小學堂
        </div>
        <p className="text-gray-400 text-xs">由 Gemini AI 輔助生成的文學教學</p>
      </footer>
    </div>
  );
};

export default App;
