"use client";

import { questionsByWeek } from "@/data/questions";
import { ArrowLeft, Check, X, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { Question } from "@/types/Question";
import Link from "next/link";

// Main QuizPage component
export default function QuizPage({ params }: { params: { week: string; mode?: string } }) {
  const week = params.week;
  const mode = params.mode || "all"; // Determines which mode to use: 'all', 'first6', or 'last6'
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    shuffleQuestions();
  }, [week, mode]);

  const shuffleQuestions = () => {
    const allQuestions = questionsByWeek[week] || [];
    let selectedQuestions: Question[];

    if (week === "all" || week === "first6" || week === "last6") {
      const allQuestions = Object.values(questionsByWeek).flat();
      if (week === "first6") {
        selectedQuestions = allQuestions.slice(0, 60);
      } else if (week === "last6") {
        selectedQuestions = allQuestions.slice(-60);
      } else {
        selectedQuestions = allQuestions;
      }
    } else {
      selectedQuestions = questionsByWeek[week] || [];
    }
    

    const shuffled = selectedQuestions
      .sort(() => Math.random() - 0.5)
      .map((q) => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5),
      }));
    setQuestions(shuffled);
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleQuizSubmit = () => {
    const newScore = questions.reduce((acc, question, index) => {
      return acc + (userAnswers[index] === question.answer ? 1 : 0);
    }, 0);
    setScore(newScore);
    setQuizCompleted(true);
    window.scrollTo(0, 0);
  };

  const handleRedoQuiz = () => {
    setUserAnswers({});
    setQuizCompleted(false);
    setScore(0);
    shuffleQuestions();
    window.scrollTo(0, 0);
  };

  const weekTitle = week === "all" ? "All Weeks" : `Week ${week.replace("week", "")}`;
  const formatQuestion = (question: string) => {
    return question
      .replace(/-->/g, "→")
      .replace(/"([^"]*)"/g, '"<i>$1</i>"')
      .replace(/\(Fill in the blanks?\)/i, "");
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0 text-white">
            {weekTitle} Quiz {mode === "first6" ? "(First 6)" : mode === "last6" ? "(Last 6)" : ""}
          </h1>
          <Link href="/quiz" className="inline-flex items-center text-blue-400 hover:text-blue-300">
            <ArrowLeft className="mr-2" size={20} />
            Back to Week Selection
          </Link>
        </div>

        {quizCompleted ? (
          <div className="bg-gray-900/40 border-2 border-gray-700 p-6 mb-8 flex justify-between items-center">
            <div className="flex items-baseline">
              <span className="text-6xl font-bold text-blue-400">{score}</span>
              <span className="text-2xl text-gray-500 ml-2">/ {questions.length}</span>
            </div>
            <button
              onClick={handleRedoQuiz}
              className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="mr-2" size={20} />
              Redo Quiz
            </button>
          </div>
        ) : (
          <p className="p-5"></p>
        )}

        {questions.map((question, index) => (
          <div key={index} className="mb-10 bg-transparent border-2 border-gray-700">
            <div className="bg-gray-900/50 p-4 border-b-2 border-gray-700">
              <h2 className="text-lg text-white">
                <span className="text-xl font-bold ml-2 mr-3">{index + 1}.</span>
                <span
                  className=""
                  dangerouslySetInnerHTML={{ __html: formatQuestion(question.question) }}
                />
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`p-3 text-left transition-colors ${
                      userAnswers[index] === option && !quizCompleted
                        ? "bg-blue-900 border-2 border-blue-600"
                        : "border-2 border-gray-700 hover:bg-gray-800"
                    } ${
                      quizCompleted
                        ? option === question.answer
                          ? "bg-green-900 border-2 border-green-600"
                          : userAnswers[index] === option
                          ? "bg-red-900 border-2 border-red-600"
                          : ""
                        : ""
                    }`}
                    onClick={() => !quizCompleted && handleAnswerSelect(index, option)}
                    disabled={quizCompleted}
                  >
                    <span className="flex justify-between items-center">
                      {option}
                      {quizCompleted &&
                        (option === question.answer ? (
                          <Check className="text-green-400" size={20} />
                        ) : userAnswers[index] === option ? (
                          <X className="text-red-400" size={20} />
                        ) : null)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}

        {!quizCompleted && (
          <button
            className="w-full my-6 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-semibold"
            onClick={handleQuizSubmit}
          >
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
}