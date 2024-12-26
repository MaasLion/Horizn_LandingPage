import { motion } from 'framer-motion';
import { Language } from '../../types/language';
import { LanguageToggle } from '../LanguageToggle';
import { Logo } from './Logo';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

export const Navbar = ({ currentLang, onLanguageToggle }: Props) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.nav 
      initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 bg-[#091235]/80 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <LanguageToggle currentLang={currentLang} onToggle={onLanguageToggle} />
      </div>
    </motion.nav>
  );
};