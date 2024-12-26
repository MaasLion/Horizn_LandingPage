import { Language } from '../../types/language';

export type QuizQuestion = {
  id: number;
  text: {
    en: string;
    de: string;
  };
  options: {
    id: string;
    text: {
      en: string;
      de: string;
    };
  }[];
};

export type QuizResult = {
  id: string;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  ctaText: {
    en: string;
    de: string;
  };
};

export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: {
      en: "What is your main goal?",
      de: "Was ist dein Hauptziel?"
    },
    options: [
      { id: "A", text: { en: "Earn more money", de: "Mehr Geld verdienen" } },
      { id: "B", text: { en: "Climb the corporate ladder", de: "Im Unternehmen aufsteigen" } },
      { id: "C", text: { en: "Work abroad", de: "Im Ausland arbeiten" } },
      { id: "D", text: { en: "Work at my dream company", de: "In meinem Lieblingsunternehmen arbeiten" } }
    ]
  },
  {
    id: 2,
    text: {
      en: "Do you already have a job?",
      de: "Hast du bereits einen Job?"
    },
    options: [
      { id: "A", text: { en: "Yes", de: "Ja" } },
      { id: "B", text: { en: "No", de: "Nein" } }
    ]
  },
  {
    id: 3,
    text: {
      en: "How much would you like to earn?",
      de: "Wie viel Geld möchtest du verdienen?"
    },
    options: [
      { id: "A", text: { en: "50-75k EUR", de: "50-75k EUR" } },
      { id: "B", text: { en: "75-100k EUR", de: "75-100k EUR" } },
      { id: "C", text: { en: "Over 100k EUR", de: "Über 100k EUR" } }
    ]
  },
  {
    id: 4,
    text: {
      en: "How much effort are you willing to put into your career?",
      de: "Wie viel Aufwand bist du bereit, in deine Karriere zu stecken?"
    },
    options: [
      { id: "A", text: { en: "Work-Life Balance 4 Life", de: "Work-Life-Balance 4 Life" } },
      { id: "B", text: { en: "Normal - 40-50 hours per week", de: "Normal – 40-50 Stunden pro Woche" } },
      { id: "C", text: { en: "Everything for my goal", de: "Alles für mein Ziel" } }
    ]
  }
];

export const results: Record<string, QuizResult> = {
  A: {
    id: "A",
    title: {
      en: "Work-Life Balance Champion",
      de: "Work-Life-Balance Champion"
    },
    description: {
      en: "You value quality of life and understand that success isn't just about working more hours. With Horizn, learn how to maximize your impact while maintaining a healthy work-life balance. Our strategies help you work smarter, not harder.",
      de: "Du schätzt Lebensqualität und verstehst, dass Erfolg nicht nur von der Arbeitszeit abhängt. Mit Horizn lernst du, wie du deinen Einfluss maximierst und dabei eine gesunde Work-Life-Balance beibehältst. Unsere Strategien helfen dir, intelligenter statt härter zu arbeiten."
    },
    ctaText: {
      en: "Chart Your Path",
      de: "Plane deinen Weg"
    }
  },
  B: {
    id: "B",
    title: {
      en: "Career Growth Enthusiast",
      de: "Karrierewachstums-Enthusiast"
    },
    description: {
      en: "You're ready to put in the work to achieve your career goals. Horizn will help you channel that energy effectively, providing you with strategies and insights to maximize your professional growth.",
      de: "Du bist bereit, die Arbeit zu investieren, um deine Karriereziele zu erreichen. Horizn hilft dir, diese Energie effektiv zu kanalisieren und bietet dir Strategien und Einblicke, um dein berufliches Wachstum zu maximieren."
    },
    ctaText: {
      en: "Start Your Journey",
      de: "Starte deine Reise"
    }
  },
  C: {
    id: "C",
    title: {
      en: "Global Career Explorer",
      de: "Globaler Karriere-Explorer"
    },
    description: {
      en: "Your ambitions know no borders. With Horizn, access international opportunities and learn how to position yourself for global success. We'll guide you through every step of your international career journey.",
      de: "Deine Ambitionen kennen keine Grenzen. Mit Horizn erhältst du Zugang zu internationalen Möglichkeiten und lernst, wie du dich für globalen Erfolg positionierst. Wir begleiten dich durch jeden Schritt deiner internationalen Karrierereise."
    },
    ctaText: {
      en: "Explore Opportunities",
      de: "Entdecke Möglichkeiten"
    }
  },
  D: {
    id: "D",
    title: {
      en: "Dream Company Achiever",
      de: "Traumfirmen-Eroberer"
    },
    description: {
      en: "You have your sights set on specific companies. Horizn will help you develop the skills, network, and strategy needed to land your dream role at your target organization.",
      de: "Du hast bestimmte Unternehmen im Visier. Horizn hilft dir dabei, die Fähigkeiten, das Netzwerk und die Strategie zu entwickeln, die du brauchst, um deine Traumposition in deiner Zielorganisation zu erreichen."
    },
    ctaText: {
      en: "Make It Happen",
      de: "Mach es möglich"
    }
  }
};