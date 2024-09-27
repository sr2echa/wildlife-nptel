"use client";

import { questionsByWeek } from "@/data/questions";
import { ArrowLeft, Check, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Question } from "@/types/Question";
import Link from "next/link";

export default function QuizPage({ params }: { params: { week: string } }) {
  const week = params.week;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const allQuestions =
      week === "all" ? Object.values(questionsByWeek).flat() : questionsByWeek[week] || [];
    setQuestions(allQuestions);
  }, [week]);

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleQuizSubmit = () => {
    const newScore = questions.reduce((acc, question, index) => {
      return acc + (userAnswers[index] === question.answer ? 1 : 0);
    }, 0);
    setScore(newScore);
    setQuizCompleted(true);
  };

  const weekTitle = week === "all" ? "All Weeks" : `Week ${week.replace("week", "")}`;

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/quiz"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Week Selection
        </Link>
        <h1 className="text-3xl font-bold mb-8">{weekTitle} Quiz</h1>

        {questions.map((question, index) => (
          <div key={index} className="mb-8 p-4 border-2 border-black rounded-lg">
            <h2 className="text-xl font-bold mb-4">
              Question {index + 1}: {question.question}
            </h2>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`w-full p-3 text-left rounded-md transition-colors ${
                    userAnswers[index] === option
                      ? "border-2 border-blue-600 "
                      : "border border-gray-300"
                  } ${
                    quizCompleted
                      ? option === question.answer
                        ? "bg-green-100 border border-gray-300"
                        : userAnswers[index] === option
                        ? "bg-red-100 border border-gray-300"
                        : ""
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => !quizCompleted && handleAnswerSelect(index, option)}
                  disabled={quizCompleted}
                >
                  {option}
                  {quizCompleted && option === question.answer && (
                    <Check className="inline-block ml-2 text-green-600" size={20} />
                  )}
                  {quizCompleted && userAnswers[index] === option && option !== question.answer && (
                    <X className="inline-block ml-2 text-red-600" size={20} />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}

        {!quizCompleted && (
          <button
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={handleQuizSubmit}
            disabled={Object.keys(userAnswers).length !== questions.length}
          >
            Submit Quiz
          </button>
        )}

        {quizCompleted && (
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-2xl">
              Your Score: {score} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
