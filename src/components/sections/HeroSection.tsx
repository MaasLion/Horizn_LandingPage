import { motion } from 'framer-motion';
import { Language, translations } from '../../types/language';
import { Quiz } from '../Quiz';
import { useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { AnimatedSphere } from '../background/AnimatedSphere';
import { HeroBackground } from '../background/HeroBackground';
import { MarketingVideo } from '../video/MarketingVideo';

interface Props {
  currentLang: Language;
}

export const HeroSection = ({ currentLang }: Props) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-[#091235]"
      aria-labelledby="hero-title"
    >
      {/* Background layers */}
      <HeroBackground />
      <AnimatedSphere />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center">
          <motion.h1
            id="hero-title"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight bg-gradient-to-r from-[#B68D40] to-[#E2E6E7] bg-clip-text text-transparent"
          >
            {translations.hero_title[currentLang]}
          </motion.h1>
          
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-[#88A9C3] mb-4"
          >
            {translations.hero_subtitle[currentLang]}
          </motion.p>

          {!showQuiz ? (
            <motion.button
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setShowQuiz(true)}
              className="group flex items-center gap-2 bg-[#B68D40] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-[#B68D40]/90 focus:outline-none focus:ring-2 focus:ring-[#B68D40] focus:ring-offset-2 focus:ring-offset-[#091235] mb-12"
              aria-label={currentLang === 'en' ? 'Start career assessment quiz' : 'Karriere-Assessment starten'}
            >
              {currentLang === 'en' ? 'Test yourself' : 'Teste dich selbst'}
            </motion.button>
          ) : (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full mb-12"
              role="region"
              aria-label={currentLang === 'en' ? 'Career Assessment Quiz' : 'Karriere-Assessment Quiz'}
            >
              <Quiz currentLang={currentLang} />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MarketingVideo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};