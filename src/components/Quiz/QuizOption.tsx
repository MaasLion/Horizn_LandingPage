import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  id: string;
  text: string;
  onClick: (id: string) => void;
  index: number;
}

export const QuizOption = ({ id, text, onClick, index }: Props) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onClick(id)}
      className="w-full text-left p-4 rounded-lg bg-[#091235] hover:bg-[#B68D40] transition-base focus-ring text-[#E2E6E7] flex items-center justify-between group"
      role="option"
      aria-selected="false"
    >
      <span>{text}</span>
      <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
    </motion.button>
  );
};