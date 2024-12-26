import { useState } from 'react';
import { Language } from '../../types/language';
import { QuizComponent } from './QuizComponent';
import { QuizResult } from './QuizResult';
import { QuizResult as QuizResultType } from './types';

interface Props {
  currentLang: Language;
}

export const Quiz = ({ currentLang }: Props) => {
  const [result, setResult] = useState<QuizResultType | null>(null);

  return (
    <section className="py-24 bg-[#091235] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#B68D40] to-[#E2E6E7] bg-clip-text text-transparent">
          {currentLang === 'en' 
            ? 'Find Your Career Path with Horizn'
            : 'Finde deinen Karriere-Weg mit Horizn'
          }
        </h2>
        
        <p className="text-[#88A9C3] text-center mb-12 max-w-2xl mx-auto">
          {currentLang === 'en'
            ? 'Answer the following questions and discover how Horizn can help you achieve your career goals.'
            : 'Beantworte die folgenden Fragen und entdecke, wie Horizn dir helfen kann, deine beruflichen Ziele zu erreichen.'
          }
        </p>

        {result ? (
          <QuizResult result={result} currentLang={currentLang} />
        ) : (
          <QuizComponent currentLang={currentLang} onComplete={setResult} />
        )}
      </div>
    </section>
  );
};