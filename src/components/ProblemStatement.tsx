import { motion } from 'framer-motion';
import { Language, translations } from '../types/language';
import { problems } from '../data/problems';

interface Props {
  currentLang: Language;
}

export const ProblemStatement = ({ currentLang }: Props) => {
  return (
    <section className="py-24 bg-[#0D1A40]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#E2E6E7] mb-16"
        >
          {translations.problem_title[currentLang]}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121B3F] p-6 rounded-xl hover:transform hover:scale-105 transition-all"
            >
              <problem.icon className="w-10 h-10 text-[#B68D40] mb-4" />
              <h3 className="text-xl font-semibold text-[#E2E6E7] mb-2">
                {problem.title[currentLang]}
              </h3>
              <p className="text-[#88A9C3]">
                {problem.description[currentLang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};