import { motion } from 'framer-motion';
import { Language } from '../../types/language';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Props {
  currentLang: Language;
}

export const DashboardPreview = ({ currentLang }: Props) => {
  const prefersReducedMotion = useReducedMotion();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      ref={elementRef}
      className="relative py-24 bg-[#0D1A40] overflow-hidden"
      aria-label={currentLang === 'en' ? 'Dashboard Preview' : 'Dashboard-Vorschau'}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#E2E6E7]">
              {currentLang === 'en' 
                ? 'Horizn: Your Partner in Career Success'
                : 'Horizn: Dein Partner für Karriereerfolg'}
            </h2>
            <p className="text-[#88A9C3] text-lg mb-8">
              {currentLang === 'en'
                ? 'Track your progress, set goals, and receive personalized guidance all in one place.'
                : 'Verfolge deinen Fortschritt, setze Ziele und erhalte personalisierte Beratung an einem Ort.'}
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[9/19.5] max-w-[375px] mx-auto">
              <img
                src={`/images/${currentLang === 'en' ? 'Dashboard.png' : 'Dashboard_DE.png'}`}
                alt={currentLang === 'en' ? 'Horizn Dashboard Interface' : 'Horizn Dashboard-Oberfläche'}
                className="rounded-[2.5rem] shadow-2xl w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-[2.5rem] shadow-inner pointer-events-none border border-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}