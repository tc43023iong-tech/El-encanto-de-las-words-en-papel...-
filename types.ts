
export interface Sentence {
  spanish: string;
  chinese: string;
  appreciation: string;
}

export interface Poem {
  id: string;
  title: string;
  author: string;
  sentences: Sentence[];
  backgroundInfo: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
