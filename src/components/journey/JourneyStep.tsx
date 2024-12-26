import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Language } from '../../types/language';

interface Props {
  icon: LucideIcon;
  step: number;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  currentLang: Language;
  delay?: number;
}

export const JourneyStep = ({ icon: Icon, step, title, description, currentLang, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-[#B68D40] rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#121B3F] rounded-full flex items-center justify-center border-2 border-[#B68D40]">
        <span className="text-[#E2E6E7] font-bold">{step}</span>
      </div>
      <h3 className="text-xl font-semibold text-[#E2E6E7] mb-4">{title[currentLang]}</h3>
      <p className="text-[#88A9C3]">{description[currentLang]}</p>
    </motion.div>
  );
};