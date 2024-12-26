import { motion } from 'framer-motion';
import { Language, translations } from '../types/language';
import { testimonials } from '../data/testimonials';

interface Props {
  currentLang: Language;
}

export const Testimonials = ({ currentLang }: Props) => {
  return (
    <section className="py-24 bg-[#091235] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2850&q=80)'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#E2E6E7] mb-16"
        >
          {translations.testimonials_title[currentLang]}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121B3F]/80 backdrop-blur-sm p-8 rounded-xl"
            >
              <p className="text-[#E2E6E7] text-lg mb-4 italic">"{testimonial.quote[currentLang]}"</p>
              <p className="text-[#B68D40] font-medium">— {testimonial.author[currentLang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};