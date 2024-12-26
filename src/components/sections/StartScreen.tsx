import { motion } from 'framer-motion';
import { Language } from '../../types/language';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Props {
  currentLang: Language;
}

export const StartScreen = ({ currentLang }: Props) => {
  const prefersReducedMotion = useReducedMotion();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      ref={elementRef}
      className="relative py-24 bg-[#091235] overflow-hidden"
      aria-label={currentLang === 'en' ? 'Start Screen' : 'Startbildschirm'}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="w-[280px] h-[560px] relative">
              <img
                src={`/images/${currentLang === 'en' ? 'start2.png' : 'start1_DE.png'}`}
                alt={currentLang === 'en' ? 'Horizn App Welcome Screen' : 'Horizn App Willkommensbildschirm'}
                className="rounded-2xl shadow-2xl w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#B68D40] to-[#E2E6E7] bg-clip-text text-transparent">
              {currentLang === 'en' 
                ? 'Start Your Journey Today'
                : 'Starte deine Reise heute'}
            </h2>
            <p className="text-[#88A9C3] text-lg mb-8">
              {currentLang === 'en'
                ? 'Take the first step towards your dream career with our intuitive and powerful app.'
                : 'Mache den ersten Schritt in Richtung deiner Traumkarriere mit unserer intuitiven und leistungsstarken App.'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}