import { Language } from '../types/language';

export interface Testimonial {
  quote: {
    en: string;
    de: string;
  };
  author: {
    en: string;
    de: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: 'Horizon gave me the confidence and clarity to land my first international role.',
      de: 'Horizon gab mir das Selbstvertrauen und die Klarheit, meine erste internationale Position zu bekommen.'
    },
    author: {
      en: 'Future You',
      de: 'Dein zukünftiges Ich'
    }
  },
  {
    quote: {
      en: 'With Horizon, I negotiated my salary up by 20% within months.',
      de: 'Mit Horizon konnte ich mein Gehalt innerhalb weniger Monate um 20% steigern.'
    },
    author: {
      en: 'Future You',
      de: 'Dein zukünftiges Ich'
    }
  },
  {
    quote: {
      en: 'I went from stuck to unstoppable, all thanks to Horizon.',
      de: 'Ich ging von festgefahren zu unaufhaltsam, alles dank Horizon.'
    },
    author: {
      en: 'Future You',
      de: 'Dein zukünftiges Ich'
    }
  }
];