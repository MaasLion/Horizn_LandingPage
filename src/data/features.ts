import { Bot, LineChart, Trophy, Users } from 'lucide-react';
import { Language } from '../types/language';

export interface Feature {
  icon: typeof Bot;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
}

export const features: Feature[] = [
  {
    icon: Bot,
    title: {
      en: 'AI-powered career advice',
      de: 'KI-gestützte Karriereberatung'
    },
    description: {
      en: 'Get personalized action plans and guidance tailored to your goals',
      de: 'Erhalte personalisierte Aktionspläne und Beratung, abgestimmt auf deine Ziele'
    }
  },
  {
    icon: LineChart,
    title: {
      en: 'Progress tracking',
      de: 'Fortschrittsverfolgung'
    },
    description: {
      en: 'Clear dashboard of milestones and achievements to monitor your growth',
      de: 'Übersichtliches Dashboard deiner Meilensteine und Erfolge zur Überwachung deiner Entwicklung'
    }
  },
  {
    icon: Trophy,
    title: {
      en: 'Career challenges',
      de: 'Karriere-Challenges'
    },
    description: {
      en: 'Build skills and expand your network through guided challenges',
      de: 'Entwickle Fähigkeiten und erweitere dein Netzwerk durch geführte Challenges'
    }
  },
  {
    icon: Users,
    title: {
      en: 'Expert mentoring',
      de: 'Experten-Mentoring'
    },
    description: {
      en: 'Connect with industry leaders for personalized guidance',
      de: 'Vernetze dich mit Branchenführern für persönliche Beratung'
    }
  }
];