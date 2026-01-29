
import React, { useState } from 'react';
import { askGeminiAboutPoem } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatPanelProps {
  poemTitle: string;
}

const AIChatPanel: React.FC<AIChatPanelProps> = ({ poemTitle }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askGeminiAboutPoem(poemTitle, input);
      const aiMsg: ChatMessage = { role: 'model', text: response || '哎呀，老師去喝水了，請再試一次！' };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = { role: 'model', text: '系統有點小忙，請稍後再問我喔！' };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 bg-white border-4 border-black p-8 rounded-3xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative">
      <div className="absolute -top-10 -left-4 text-6xl">👩‍🏫</div>
      
      <h3 className="text-2xl font-bold mb-2 handwriting flex items-center gap-2">
        文學老師的諮詢室
      </h3>
      <p className="text-sm text-gray-500 mb-6 italic">「有任何關於這首詩的疑問嗎？老師隨時為你解答喔！」</p>
      
      <div className="h-80 overflow-y-auto mb-6 p-6 border-2 border-black bg-[#fdfdfd] rounded-2xl flex flex-col gap-6 scrollbar-hide">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-20 handwriting">
            在此輸入問題，老師會親自回答你喔！ ✨
          </div>
        )}
        {messages.map((m, idx) => (
          <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <span className="text-xs font-bold mb-1 opacity-50 px-2 uppercase">
              {m.role === 'user' ? '我的提問' : '老師回答'}
            </span>
            <div className={`
              max-w-[90%] p-4 text-lg handwriting
              ${m.role === 'user' 
                ? 'bg-black text-white rounded-2xl rounded-tr-none' 
                : 'bg-white border-2 border-black text-black rounded-2xl rounded-tl-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }
            `}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex flex-col items-start">
             <span className="text-xs font-bold mb-1 opacity-50 px-2 uppercase text-black">老師回答</span>
             <div className="bg-white border-2 border-black p-4 text-lg handwriting rounded-2xl rounded-tl-none animate-pulse shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
               翻翻字典中... 📖
             </div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="老師，這句話是什麼意思呢？"
          className="flex-1 border-4 border-black rounded-full px-6 py-3 focus:outline-none focus:bg-gray-50 text-lg handwriting"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="bg-black text-white rounded-full px-8 py-3 font-bold hover:bg-gray-800 disabled:bg-gray-400 transition-all active:scale-95 shadow-[4px_4px_0px_0px_rgba(100,100,100,1)]"
        >
          問老師
        </button>
      </div>
    </div>
  );
};

export default AIChatPanel;
