import { Globe } from 'lucide-react';
import { Language } from '../types/language';

interface Props {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageToggle = ({ currentLang, onToggle }: Props) => {
  return (
    <button
      onClick={() => onToggle(currentLang === 'en' ? 'de' : 'en')}
      className="fixed top-4 right-4 flex items-center gap-2 bg-[#091235]/80 text-[#E2E6E7] px-4 py-2 rounded-full backdrop-blur-sm transition-all hover:bg-[#091235]"
    >
      <Globe size={16} />
      <span className="uppercase font-medium">{currentLang}</span>
    </button>
  );
};