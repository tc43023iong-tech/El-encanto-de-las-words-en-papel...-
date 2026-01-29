
import { Poem } from './types';

export const SAMPLE_POEMS: Poem[] = [
  {
    id: 'machado-camino',
    title: 'Caminante, no hay camino (行者，原本沒有路)',
    author: 'Antonio Machado',
    backgroundInfo: '這首詩告訴我們，人生就像一場旅行。我們不需要害怕未來，因為每一口呼吸、每一步腳印，都是在創造屬於自己的路。',
    sentences: [
      {
        spanish: 'Caminante, son tus huellas el camino y nada más.',
        chinese: '行者，你的腳印就是路，除此之外什麼也沒有。',
        appreciation: '這句話是在說，我們走過的每一步都很重要。人生不是照著別人的地圖走，而是用自己的雙腳踏出來的！'
      },
      {
        spanish: 'Caminante, no hay camino, se hace camino al andar.',
        chinese: '行者，原本沒有路，路是走出來的。',
        appreciation: '這是全詩最有名的一句。它鼓勵我們要勇敢前進，即使前面看起來沒有方向，只要你肯努力走，路就會出現在你腳下。'
      },
      {
        spanish: 'Al andar se hace el camino, y al volver la vista atrás...',
        chinese: '走著走著路就成了，而當你回首往事時...',
        appreciation: '回頭看自己努力過的痕跡，會發現那些汗水都變成了美麗的風景，這就是成長的意義。'
      }
    ]
  },
  {
    id: 'borges-instantes',
    title: 'Instantes (瞬間 - 選段)',
    author: 'Attributed to Jorge Luis Borges',
    backgroundInfo: '這首詩讓我們思考：如果生命能重來，我們會怎麼過？它提醒我們要珍惜當下那些微小而美好的時刻。',
    sentences: [
      {
        spanish: 'Si pudiera vivir nuevamente mi vida...',
        chinese: '如果我能重新活一次...',
        appreciation: '這是一個充滿想像力的開始。人生最重要的意義，往往就在於我們如何選擇度過每一天。'
      },
      {
        spanish: 'Contemplaría más amaneceres.',
        chinese: '我會去觀賞更多的日出。',
        appreciation: '日出代表希望。詩人想告訴我們，人生意義之一就是去感受大自然給我們最純粹、最免費的禮物。'
      },
      {
        spanish: 'Viajaría más liviano.',
        chinese: '我的行李會帶得更輕一點。',
        appreciation: '「輕裝上陣」不僅是旅行，也是人生。不要讓煩惱變成沉重的負擔，開心地去體驗世界吧！'
      }
    ]
  },
  {
    id: 'mistral-riqueza',
    title: 'Riqueza (財富)',
    author: 'Gabriela Mistral',
    backgroundInfo: '智利詩人米斯特拉爾（諾貝爾獎得主）認為，真正的財富不是金錢，而是我們內心擁有的愛與善良。',
    sentences: [
      {
        spanish: 'Tengo la dicha de fiel y la dicha de perdido.',
        chinese: '我有守候的幸福，也有失去的幸福。',
        appreciation: '這句話很有深度喔！得到的很快樂，但失去後學會堅強，也是一種成長的「幸福」呢。'
      },
      {
        spanish: 'Tengo un tesoro que no se ve.',
        chinese: '我擁有一份看不見的寶藏。',
        appreciation: '對小朋友來說，這份寶藏可能是你的勇氣、你的夢想，或者是你對朋友的真心，這些才是最珍貴的。'
      },
      {
        spanish: 'Es el amor que doy y el amor que recibo.',
        chinese: '那就是我付出的愛，與我得到的愛。',
        appreciation: '人生的意義在於連結。當你愛別人的時候，你的世界就會變得閃閃發光。'
      }
    ]
  },
  {
    id: 'benedetti-no-te-rimdas',
    title: 'No te rindas (不要放棄 - 選段)',
    author: 'Mario Benedetti',
    backgroundInfo: '人生有時候會遇到困難，這首詩像一位溫暖的大哥哥，拍拍我們的肩膀，給我們重新開始的勇氣。',
    sentences: [
      {
        spanish: 'No te rindas, por favor no cedas.',
        chinese: '不要放棄，請不要屈服。',
        appreciation: '這是一種對生命的堅持。每一天都是新的機會，就像我們練習運動或樂器一樣，堅持下去就會看到意義。'
      },
      {
        spanish: 'Aunque el frío queme, aunque el miedo muerda.',
        chinese: '雖然寒冷會灼人，雖然恐懼會啃噬。',
        appreciation: '詩人用「灼人」和「啃噬」來形容困難，非常有畫面感。但這些困難都是為了讓我們變得更強大。'
      },
      {
        spanish: 'Porque la vida es tuya y tuyo también el deseo.',
        chinese: '因為生命是你的，夢想也是你的。',
        appreciation: '你是自己生命的小主人！你有權利決定要把生命過得精彩、過得有意義。'
      }
    ]
  },
  {
    id: 'principito-esencial',
    title: 'El Principito (小王子 - 西語選段)',
    author: 'Antoine de Saint-Exupéry',
    backgroundInfo: '雖然原著是法文，但在西語世界這段話也非常有名。它教會我們如何透過心靈去發現人生的真諦。',
    sentences: [
      {
        spanish: 'He aquí mi secreto. Es muy simple.',
        chinese: '這是我的祕密，非常簡單。',
        appreciation: '小狐狸要告訴小王子（還有我們）一個大祕密囉！通常最重要的道理其實都很簡單。'
      },
      {
        spanish: 'No se ve bien sino con el corazón.',
        chinese: '只有用心，才能看得清。',
        appreciation: '眼睛看到的只是外表，人生的意義——比如友情、愛、快樂——都要用「心」去感覺才找得到。'
      },
      {
        spanish: 'Lo esencial es invisible a los ojos.',
        chinese: '真正重要的東西，是眼睛看不見的。',
        appreciation: '就像空氣、愛和夢想，雖然看不見，卻是支持我們活下去最重要的力量。這就是人生的終極意義！'
      }
    ]
  }
];
