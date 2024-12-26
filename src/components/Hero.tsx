import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Language, translations } from '../types/language';

interface Props {
  currentLang: Language;
}

export const Hero = ({ currentLang }: Props) => {
  return (
    <section className="relative min-h-screen bg-[#091235] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#091235] via-[#091235]/90 to-[#091235]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#E2E6E7] mb-8"
        >
          {translations.hero_title[currentLang]}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-[#88A9C3] mb-12 max-w-4xl mx-auto"
        >
          {translations.hero_subtitle[currentLang]}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#B68D40] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-[#B68D40]/90 hover:scale-105"
        >
          {translations.hero_cta[currentLang]}
        </motion.button>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#E2E6E7]/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};