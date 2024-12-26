import { motion } from 'framer-motion';
import { Language } from '../../types/language';
import { journeySteps } from '../../data/journey';
import { JourneyStep } from './JourneyStep';

interface Props {
  currentLang: Language;
}

export const Journey = ({ currentLang }: Props) => {
  return (
    <section className="py-24 bg-[#091235] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#B68D40] to-[#E2E6E7] bg-clip-text text-transparent"
        >
          {currentLang === 'en' 
            ? 'Begin Your Professional Journey in 3 Simple Steps'
            : 'Starte deine berufliche Reise in 3 einfachen Schritten'}
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 h-0.5 bg-[#B68D40] w-[calc(100%-100px)] hidden md:block" />
          
          {journeySteps.map((step, index) => (
            <JourneyStep
              key={index}
              icon={step.icon}
              step={index + 1}
              title={step.title}
              description={step.description}
              currentLang={currentLang}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};