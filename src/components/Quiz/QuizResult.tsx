import { motion } from 'framer-motion';
import { Language } from '../../types/language';
import { QuizResult as QuizResultType } from './types';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { CTAButton } from '../common/CTAButton';

interface Props {
  result: QuizResultType;
  currentLang: Language;
}

export const QuizResult = ({ result, currentLang }: Props) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto bg-[#121B3F]/80 backdrop-blur-sm p-8 rounded-xl text-center"
      role="alert"
      aria-label={currentLang === 'en' ? 'Quiz Result' : 'Quiz-Ergebnis'}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#B68D40] to-[#E2E6E7] bg-clip-text text-transparent"
      >
        {result.title[currentLang]}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[#88A9C3] mb-12 text-lg leading-relaxed max-w-xl mx-auto"
      >
        {result.description[currentLang]}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <CTAButton 
          variant="primary" 
          currentLang={currentLang}
          className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        />
      </motion.div>
    </motion.div>
  );
};