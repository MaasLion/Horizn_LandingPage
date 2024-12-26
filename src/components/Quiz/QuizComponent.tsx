import { useState } from 'react';
import { motion } from 'framer-motion';
import { Language } from '../../types/language';
import { questions, results, QuizResult } from './types';
import { QuizOption } from './QuizOption';
import { QuizProgress } from './QuizProgress';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  currentLang: Language;
  onComplete: (result: QuizResult) => void;
}

export const QuizComponent = ({ currentLang, onComplete }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const handleAnswer = (optionId: string) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Get the first answer (A, B, C, or D) and use it to determine the result
      const firstAnswer = answers[0];
      const result = results[firstAnswer];
      onComplete(result);
    }
  };

  const question = questions[currentQuestion];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-2xl mx-auto bg-[#121B3F]/80 backdrop-blur-sm p-8 rounded-xl"
      role="form"
      aria-label={currentLang === 'en' ? 'Career Assessment Quiz' : 'Karriere-Assessment Quiz'}
    >
      <motion.h3 
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-8 text-[#E2E6E7]"
      >
        {question.text[currentLang]}
      </motion.h3>

      <div className="space-y-4" role="listbox">
        {question.options.map((option, index) => (
          <QuizOption
            key={option.id}
            id={option.id}
            text={option.text[currentLang]}
            onClick={handleAnswer}
            index={index}
          />
        ))}
      </div>

      <QuizProgress
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        currentLang={currentLang}
      />
    </motion.div>
  );
};