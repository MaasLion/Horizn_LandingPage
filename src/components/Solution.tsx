import { motion } from 'framer-motion';
import { Language, translations } from '../types/language';
import { benefits } from '../data/benefits';

interface Props {
  currentLang: Language;
}

export const Solution = ({ currentLang }: Props) => {
  return (
    <section className="py-24 bg-[#091235] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2850&q=80)'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#E2E6E7] mb-16"
        >
          {translations.solution_title[currentLang]}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#121B3F]/80 backdrop-blur-sm p-8 rounded-xl hover:transform hover:scale-105 transition-all"
            >
              <benefit.icon className="w-12 h-12 text-[#B68D40] mb-6" />
              <h3 className="text-xl font-semibold text-[#E2E6E7] mb-4">{benefit.title[currentLang]}</h3>
              <p className="text-[#88A9C3]">{benefit.description[currentLang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};