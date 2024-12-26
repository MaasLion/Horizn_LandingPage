import { Brain, Compass, AlertCircle, Users2, UserPlus, HelpCircle } from 'lucide-react';
import { Language } from '../types/language';

export interface Problem {
  icon: typeof Brain;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
}

export const problems: Problem[] = [
  {
    icon: Compass,
    title: {
      en: 'Lack of clear career direction',
      de: 'Fehlende klare Karriererichtung'
    },
    description: {
      en: 'Feeling stuck without a roadmap to success.',
      de: 'Sich festgefahren fühlen ohne einen Fahrplan zum Erfolg.'
    }
  },
  {
    icon: Brain,
    title: {
      en: 'Overwhelmed by too much information',
      de: 'Überwältigt von zu vielen Informationen'
    },
    description: {
      en: 'Social media is filled with people showing off their wealth and success, making you feel undervalued and lost.',
      de: 'Soziale Medien sind voll von Menschen, die ihren Reichtum und Erfolg zur Schau stellen, wodurch man sich unterbewertet und verloren fühlt.'
    }
  },
  {
    icon: AlertCircle,
    title: {
      en: 'Difficulty finding actionable, tailored advice',
      de: 'Schwierigkeiten, praktische, maßgeschneiderte Ratschläge zu finden'
    },
    description: {
      en: "Most tips online don't match your specific goals or career path.",
      de: 'Die meisten Online-Tipps passen nicht zu deinen spezifischen Zielen oder deinem Karriereweg.'
    }
  },
  {
    icon: Users2,
    title: {
      en: 'No one to share your journey or struggles with',
      de: 'Niemand, mit dem du deine Reise oder Herausforderungen teilen kannst'
    },
    description: {
      en: 'Many young professionals lack a trusted mentor or buddy for guidance.',
      de: 'Vielen jungen Berufstätigen fehlt ein vertrauenswürdiger Mentor oder Begleiter zur Orientierung.'
    }
  },
  {
    icon: UserPlus,
    title: {
      en: 'Shyness and lack of confidence',
      de: 'Schüchternheit und mangelndes Selbstvertrauen'
    },
    description: {
      en: "Applying for jobs, negotiating salaries, or asking for promotions are intimidating because they're rare, high-stakes tasks.",
      de: 'Bewerbungen, Gehaltsverhandlungen oder das Fragen nach Beförderungen sind einschüchternd, weil es seltene, wichtige Aufgaben sind.'
    }
  },
  {
    icon: HelpCircle,
    title: {
      en: 'Impersonal AI guidance',
      de: 'Unpersönliche KI-Beratung'
    },
    description: {
      en: 'Current AI feels like a foreigner giving generic advice, without truly knowing your goals or what drives you.',
      de: 'Aktuelle KI wirkt wie ein Fremder, der allgemeine Ratschläge gibt, ohne deine Ziele oder Antriebe wirklich zu kennen.'
    }
  }
];