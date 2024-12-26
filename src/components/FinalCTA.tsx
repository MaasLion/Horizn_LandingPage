import { motion } from 'framer-motion';
import { Language, translations } from '../types/language';
import { CTAButton } from './common/CTAButton';

interface Props {
  currentLang: Language;
}

export const FinalCTA = ({ currentLang }: Props) => {
  return (
    <section className="py-24 bg-[#0D1A40] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2850&q=80)'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-[#E2E6E7] mb-6"
        >
          {translations.final_cta_title[currentLang]}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[#88A9C3] mb-12"
        >
          {translations.final_cta_subtitle[currentLang]}
        </motion.p>
        
        <CTAButton variant="primary" currentLang={currentLang} />
      </div>
    </section>
  );
};