import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Language } from '../../types/language';

interface CTAButtonProps {
  variant: 'primary' | 'secondary';
  currentLang: Language;
  className?: string;
  showArrow?: boolean;
}

const FORM_LINKS = {
  en: 'https://forms.gle/YHcLT8CWBZM5nzip9',
  de: 'https://forms.gle/s63Bu9baVVuixgg9A'
};

const BUTTON_TEXT = {
  primary: {
    en: 'Chart your horizon',
    de: 'Bestimme deinen Kurs'
  },
  secondary: {
    en: 'Become Part of Horizn',
    de: 'Werde Teil von Horizn'
  }
};

export const CTAButton = ({ 
  variant, 
  currentLang, 
  className = '',
  showArrow = true 
}: CTAButtonProps) => {
  const buttonStyles = variant === 'primary'
    ? 'bg-[#B68D40] text-white hover:bg-[#B68D40]/90 focus:ring-[#B68D40] focus:ring-offset-[#091235]'
    : 'bg-[#121B3F] text-[#B68D40] hover:bg-[#121B3F]/90 focus:ring-[#B68D40] focus:ring-offset-[#121B3F]';

  return (
    <motion.a
      href={FORM_LINKS[currentLang]}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group inline-flex items-center justify-center gap-2 
        px-8 py-4 rounded-full font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${buttonStyles} ${className}
      `}
    >
      <span>{BUTTON_TEXT[variant][currentLang]}</span>
      {showArrow && (
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      )}
    </motion.a>
  );
};