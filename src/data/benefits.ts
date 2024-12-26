import { Map, Bot, Users } from 'lucide-react';
import { Language } from '../types/language';

export interface Benefit {
  icon: typeof Map;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
}

export const benefits: Benefit[] = [
  {
    icon: Map,
    title: {
      en: 'Personalized career roadmaps',
      de: 'Personalisierte Karriere-Roadmaps'
    },
    description: {
      en: 'Your personalized 1-5 year goals, crafted to match your unique career aspirations.',
      de: 'Deine personalisierten 1-5 Jahres-Ziele, abgestimmt auf deine einzigartigen Karrierebestrebungen.'
    }
  },
  {
    icon: Bot,
    title: {
      en: 'AI-powered mentorship',
      de: 'Exklusive KI-Mentorship'
    },
    description: {
      en: 'Get 24/7 guidance from industry-optimized AI trained to help with career decisions.',
      de: 'Erhalte 24/7 Unterstützung von branchenoptimierter KI, die für Karriereentscheidungen trainiert wurde.'
    }
  },
  {
    icon: Users,
    title: {
      en: 'Access to real industry experts',
      de: 'Zugang zu echten Branchenexperten'
    },
    description: {
      en: 'Connect with industry leaders for personalized, hands-on advice and insider tips.',
      de: 'Vernetze dich mit Branchenführern für persönliche, praktische Beratung und Insider-Tipps.'
    }
  }
];