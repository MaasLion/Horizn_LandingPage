export type Language = 'en' | 'de';

export interface Translations {
  [key: string]: {
    en: string;
    de: string;
  };
}

export const translations: Translations = {
  hero_title: {
    en: 'Unlock Your Dream Career with a Mentor Made Just for You',
    de: 'Deine Traumkarriere mit einem Mentor, der nur für dich gemacht ist'
  },
  hero_subtitle: {
    en: 'Horizn helps you unlock your potential and shape your future career with personalized plans, AI-driven mentorship, and access to industry experts.',
    de: 'Horizn hilft dir, dein Potenzial zu entfalten und deine berufliche Zukunft mit personalisierten Plänen, KI-gesteuertem Mentoring und Zugang zu Branchenexperten zu gestalten.'
  },
  hero_cta: {
    en: 'Join the waitlist',
    de: 'Auf die Warteliste'
  },
  problem_title: {
    en: 'Your Career Feels Like an Endless Grind—But Does Anyone Really Have Your Back?',
    de: 'Deine Karriere fühlt sich an wie ein endloser Grind – aber steht dir wirklich jemand zur Seite?'
  },
  solution_title: {
    en: 'Horizn: Your Partner in Career Success',
    de: 'Horizn: Dein Partner für Karriereerfolg'
  },
  features_title: {
    en: 'What Horizn Offers You',
    de: 'Was dir Horizn bietet'
  },
  testimonials_title: {
    en: 'Imagine Your Future with Horizn',
    de: 'Stelle dir deine Zukunft mit Horizn vor'
  },
  final_cta_title: {
    en: 'Start Your Career Transformation Today',
    de: 'Starte heute deine Karriere-Transformation'
  },
  final_cta_subtitle: {
    en: 'Join ambitious professionals building their futures with Horizn. Take control of your career now—it\'s time to show the world what you\'re capable of.',
    de: 'Schließe dich ehrgeizigen Professionals an, die mit Horizn ihre Zukunft gestalten. Übernimm die Kontrolle über deine Karriere — es ist Zeit, der Welt zu zeigen, was du drauf hast.'
  },
  final_cta_button: {
    en: 'Chart Your Horizn',
    de: 'Bestimme deinen Kurs'
  }
};