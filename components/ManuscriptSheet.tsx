
import React, { useState } from 'react';
import { Poem, Sentence } from '../types';

interface ManuscriptSheetProps {
  poem: Poem;
}

const ManuscriptSheet: React.FC<ManuscriptSheetProps> = ({ poem }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto bg-white border-2 border-black p-6 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden mb-16">
      {/* Decorative "Masking Tape" at corners */}
      <div className="absolute -top-2 -left-8 w-24 h-8 bg-gray-200 opacity-60 rotate-[-35deg] border border-gray-300 z-20"></div>
      <div className="absolute -top-2 -right-8 w-24 h-8 bg-gray-200 opacity-60 rotate-[35deg] border border-gray-300 z-20 print:hidden"></div>

      {/* Manuscript Grid Background Overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-10 text-center relative">
          <h2 className="text-3xl font-bold handwriting mb-2">{poem.title}</h2>
          <p className="text-md text-gray-500 font-serif">by {poem.author}</p>
          <div className="mt-4 flex justify-center">
             <div className="w-16 h-1 bg-black rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="mb-10 p-6 bg-[#fffdf0] border-2 border-dashed border-black rounded-lg relative">
           <span className="absolute -top-4 -left-2 text-3xl print:hidden">💡</span>
           <p className="italic text-gray-700 leading-relaxed handwriting text-lg">
             {poem.backgroundInfo}
           </p>
        </div>

        <div className="space-y-4">
          {poem.sentences.map((s, idx) => (
            <div 
              key={idx} 
              className={`
                group p-5 transition-all duration-300 rounded-xl
                ${activeIdx === idx 
                  ? 'bg-black text-white shadow-lg scale-[1.02] print:bg-gray-100 print:text-black print:scale-100 print:shadow-none print:border-black print:border' 
                  : 'bg-white border-2 border-transparent hover:border-black hover:bg-gray-50 cursor-pointer print:border-none'
                }
              `}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono opacity-50 ${activeIdx === idx ? 'text-gray-400 print:text-gray-600' : 'text-gray-500'}`}>
                    0{idx + 1}.
                  </span>
                  <span className="text-xl font-bold font-serif leading-tight">{s.spanish}</span>
                </div>
                <span className={`text-md handwriting ml-8 ${activeIdx === idx ? 'text-gray-300 print:text-gray-600' : 'text-gray-500'}`}>
                   {s.chinese}
                </span>
              </div>
              
              {activeIdx === idx && (
                <div className="mt-4 pt-4 border-t border-gray-700 animate-fade-in print:border-gray-300">
                   <div className="flex items-start gap-2">
                     <span className="text-xl print:hidden">✨</span>
                     <p className="text-sm leading-relaxed handwriting text-lg">
                       <span className="hidden print:inline font-bold">賞析：</span>{s.appreciation}
                     </p>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t-2 border-black border-dotted flex justify-between items-center text-gray-400 handwriting">
          <span>{poem.sentences.length} 個精彩句子</span>
          <span className="text-lg print:hidden">✎...</span>
        </div>
      </div>
    </div>
  );
};

export default ManuscriptSheet;
