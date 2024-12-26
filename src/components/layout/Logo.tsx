import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Logo = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div 
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-3"
    >
      <img 
        src="/images/Horizn ..png"
        alt="Horizn Logo"
        className="w-10 h-10 rounded-xl"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-[#B68D40] to-[#E2E6E7] bg-clip-text text-transparent">
        Horizn
      </span>
    </motion.div>
  );
}