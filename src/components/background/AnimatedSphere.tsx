import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const AnimatedSphere = () => {
  const prefersReducedMotion = useReducedMotion();

  const pulseAnimation = prefersReducedMotion ? {} : {
    scale: [1, 1.08, 1],
    opacity: [0.5, 0.8, 0.5],
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/3 -right-[20%] transform -translate-y-1/2">
        <motion.div
          animate={pulseAnimation}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative w-[800px] h-[800px]"
        >
          {/* Core sphere */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700] via-[#E5C100] to-[#DAA520] blur-xl" />
          
          {/* Inner glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#FFD700] via-[#F4D03F] to-[#DAA520] opacity-90 blur-md" />
          
          {/* Outer glow */}
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[#FFD700]/30 via-[#DAA520]/20 to-transparent blur-2xl" />
          
          {/* Highlight */}
          <div className="absolute inset-[15%] top-[10%] left-[10%] rounded-full bg-gradient-to-br from-[#FFF]/60 to-transparent blur-sm" />
        </motion.div>
      </div>
    </div>
  );
};