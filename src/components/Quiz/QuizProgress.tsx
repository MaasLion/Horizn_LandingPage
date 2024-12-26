interface Props {
  currentQuestion: number;
  totalQuestions: number;
  currentLang: 'en' | 'de';
}

export const QuizProgress = ({ currentQuestion, totalQuestions, currentLang }: Props) => {
  return (
    <div className="mt-8 flex justify-between items-center text-[#88A9C3]" role="progressbar" aria-valuemin={1} aria-valuemax={totalQuestions} aria-valuenow={currentQuestion + 1}>
      <span>
        {currentLang === 'en' ? 'Question' : 'Frage'} {currentQuestion + 1}/{totalQuestions}
      </span>
      <div className="w-32 h-1 bg-[#091235] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#B68D40] transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
        />
      </div>
    </div>
  );
};