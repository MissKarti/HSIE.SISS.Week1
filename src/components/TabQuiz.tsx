import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { QUIZ_QUESTIONS } from '../data/lessonData';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  Sparkles, 
  Clock, 
  ChevronRight, 
  BookOpen, 
  Printer,
  GraduationCap
} from 'lucide-react';

interface TabQuizProps {
  soundEnabled: boolean;
  playChime: () => void;
  onQuizComplete?: (score: number) => void;
}

export const TabQuiz: React.FC<TabQuizProps> = ({
  soundEnabled,
  playChime,
  onQuizComplete
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(QUIZ_QUESTIONS.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
    setIsSubmitted(true);

    if (soundEnabled) {
      playChime();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(userAnswers[currentQuestionIndex + 1]);
      setIsSubmitted(userAnswers[currentQuestionIndex + 1] !== null);
    } else {
      setQuizFinished(true);
      const score = calculateScore();
      if (onQuizComplete) onQuizComplete(score);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((total, ans, idx) => {
      return ans === QUIZ_QUESTIONS[idx].correctAnswer ? total + 1 : total;
    }, 0);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers(Array(QUIZ_QUESTIONS.length).fill(null));
    setIsSubmitted(false);
    setQuizFinished(false);
  };

  const score = calculateScore();
  const scorePercent = Math.round((score / QUIZ_QUESTIONS.length) * 100);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-purple-400" />
            <span>Interactive Knowledge Check</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            3-Minute Formative Check: Test your understanding of Balinese origins, social structures, and cultural heritage.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
          <Clock className="w-4 h-4 text-amber-400" />
          <div className="text-xs">
            <span className="text-slate-400 block">Progress</span>
            <span className="font-mono font-bold text-slate-100">
              {quizFinished ? 'Complete' : `Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}`}
            </span>
          </div>
        </div>
      </div>

      {!quizFinished ? (
        /* Active Question View */
        <div className="bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-xl relative">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Header */}
          <div className="space-y-2">
            <span className="inline-block px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-semibold font-mono">
              Era Focus: {currentQuestion.eraContext}
            </span>
            <h3 className="text-lg sm:text-xl font-cinzel font-bold text-slate-100 leading-snug">
              {currentQuestionIndex + 1}. {currentQuestion.question}
            </h3>
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctAnswer;
              
              let buttonStyle = 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600';

              if (isSubmitted) {
                if (isCorrect) {
                  buttonStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold';
                } else if (isSelected && !isCorrect) {
                  buttonStyle = 'bg-rose-500/20 border-rose-400 text-rose-200 font-bold';
                } else {
                  buttonStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
                }
              } else if (isSelected) {
                buttonStyle = 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold shadow-md';
              }

              return (
                <button
                  key={idx}
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${buttonStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Visual Feedback & Historical Explanation */}
          {isSubmitted && (
            <div className={`p-4 rounded-xl border space-y-2 animate-fadeIn ${
              selectedOption === currentQuestion.correctAnswer
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                : 'bg-rose-500/10 border-rose-500/40 text-rose-200'
            }`}>
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                {selectedOption === currentQuestion.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Correct Answer!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span className="text-rose-400">Incorrect Choice</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Bar */}
          <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs text-slate-400 font-mono">
              Score: {userAnswers.filter((a, i) => a === QUIZ_QUESTIONS[i].correctAnswer).length} Correct
            </span>

            {!isSubmitted ? (
              <button
                disabled={selectedOption === null}
                onClick={handleConfirmAnswer}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  selectedOption !== null
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>{currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Final Results'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completion & Certificate View */
        <div className="bg-slate-900/90 p-6 sm:p-10 rounded-2xl border border-amber-500/40 text-center space-y-6 shadow-2xl animate-fadeIn">
          <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border-2 border-amber-400 shadow-xl">
            <Award className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              QUIZ COMPLETED • STAGE 3 HSIE HISTORY
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-slate-100">
              {scorePercent >= 80 ? 'Master Historian Award!' : 'Great Historical Inquiry Effort!'}
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              You scored <strong className="text-amber-300 font-bold text-lg">{score} out of {QUIZ_QUESTIONS.length}</strong> ({scorePercent}% accuracy).
            </p>
          </div>

          {/* Printable Certificate Card */}
          <div className="printable-postcard max-w-xl mx-auto bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 text-slate-900 p-8 rounded-2xl border-4 border-amber-800/40 shadow-xl text-left space-y-4">
            <div className="flex justify-between items-start border-b-2 border-amber-900/20 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-900 uppercase tracking-widest">
                  OFFICIAL HSIE CERTIFICATE OF COMPLETION
                </span>
                <h4 className="font-cinzel font-bold text-xl text-amber-950">
                  The Magic of Bali: History & Origins
                </h4>
              </div>
              <GraduationCap className="w-8 h-8 text-amber-900" />
            </div>

            <p className="text-xs text-amber-950 leading-relaxed font-serif">
              This certifies that the Grade 6 History Scholar has successfully investigated the 6 key eras of Balinese history, analyzed primary source evidence, and passed the Stage 3 HSIE knowledge assessment.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-amber-900/20 text-xs font-semibold text-amber-900">
              <div>
                <span className="text-[10px] text-amber-800 block">SCORE ACHIEVED:</span>
                <span className="text-sm font-bold text-amber-950">{scorePercent}% ({score}/{QUIZ_QUESTIONS.length})</span>
              </div>
              <div>
                <span className="text-[10px] text-amber-800 block">EDUCATOR IN CHARGE:</span>
                <span className="text-sm font-bold text-amber-950">Robinson A. Rubio Jr.</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={handleRestartQuiz}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-700 transition-colors cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>

            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Printer className="w-4 h-4" />
              <span>Print Certificate</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
