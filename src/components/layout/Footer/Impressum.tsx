import { motion } from 'framer-motion';
import { Language } from '../../../types/language';

interface Props {
  currentLang: Language;
}

export const Impressum = ({ currentLang }: Props) => {
  const year = new Date().getFullYear();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center text-[#88A9C3]/80 text-sm"
    >
      <p className="mb-1">
        {currentLang === 'en' ? 'Project' : 'Projekt'}: Horizn.
      </p>
      <p>
        © {year} Horizn. {currentLang === 'en' ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
      </p>
    </motion.div>
  );
};