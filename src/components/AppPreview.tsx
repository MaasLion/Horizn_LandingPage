import { motion } from 'framer-motion';
import { Language } from '../types/language';

interface Props {
  currentLang: Language;
}

export const AppPreview = ({ currentLang }: Props) => {
  return (
    <section className="py-24 bg-[#0D1A40] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#B68D40] to-[#E2E6E7] bg-clip-text text-transparent mb-6">
            {currentLang === 'en' 
              ? 'Your Career Success in Your Pocket'
              : 'Dein Karriereerfolg in deiner Tasche'
            }
          </h2>
          <p className="text-[#88A9C3] text-xl">
            {currentLang === 'en'
              ? 'Available on iOS and Android'
              : 'Verfügbar für iOS und Android'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-sm mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2850&q=80"
            alt="Horizn App Preview"
            className="rounded-[2.5rem] shadow-2xl"
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            <img src="/horizn-logo.png" alt="Horizn Logo" className="w-16 h-16 rounded-xl shadow-lg" />
          </div>
        </motion.div>

        <div className="mt-20 flex justify-center gap-6">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#121B3F] hover:bg-[#121B3F]/80 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <img src="/app-store.svg" alt="App Store" className="h-8" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#121B3F] hover:bg-[#121B3F]/80 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <img src="/play-store.svg" alt="Play Store" className="h-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};