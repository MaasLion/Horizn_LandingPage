import { Upload, Target, Rocket } from 'lucide-react';
import { Language } from '../types/language';

export interface JourneyStep {
  icon: typeof Upload;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
}

export const journeySteps: JourneyStep[] = [
  {
    icon: Upload,
    title: {
      en: 'Connect Your Professional Profile',
      de: 'Verbinde dein berufliches Profil'
    },
    description: {
      en: 'Upload your CV or sync your LinkedIn profile to showcase your expertise and experience',
      de: 'Lade deinen Lebenslauf hoch oder synchronisiere dein LinkedIn-Profil, um deine Expertise und Erfahrung zu präsentieren'
    }
  },
  {
    icon: Target,
    title: {
      en: 'Define Your Career Aspirations',
      de: 'Definiere deine Karriereziele'
    },
    description: {
      en: 'Select your personalized Horizn Goal from our curated opportunities aligned with your skills and ambitions',
      de: 'Wähle dein personalisiertes Horizn-Ziel aus unseren kuratierten Möglichkeiten, die auf deine Fähigkeiten und Ambitionen abgestimmt sind'
    }
  },
  {
    icon: Rocket,
    title: {
      en: 'Launch Your Success Journey',
      de: 'Starte deine Erfolgsreise'
    },
    description: {
      en: 'Access tailored resources, mentorship, and opportunities to transform your career aspirations into achievements',
      de: 'Greife auf maßgeschneiderte Ressourcen, Mentoring und Möglichkeiten zu, um deine Karriereziele in Erfolge zu verwandeln'
    }
  }
];