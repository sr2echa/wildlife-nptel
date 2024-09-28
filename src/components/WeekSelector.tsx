import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface WeekSelectorProps {
  weeks: string[];
  onSelectWeek: (week: string) => void;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({ weeks, onSelectWeek }) => {
  return (
    <div className="text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">
          Select a Week to Practice
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {weeks.map((week) => (
            <Link
              key={week}
              href={`/quiz/${week}`}
              className="bg-gray-900 border-2 border-gray-700 p-4  hover:bg-gray-800 transition-colors duration-300 flex items-center justify-between"
            >
              <span className="flex items-center">
                <Calendar className="mr-2 text-blue-400" size={20} />
                <span className="text-lg">Week {week.replace("week", "")}</span>
              </span>
              <ArrowRight className="text-blue-400" size={20} />
            </Link>
          ))}
          <Link
            href="/quiz/all"
            className="bg-blue-600 text-white p-4  hover:bg-blue-700 transition-colors duration-300 flex items-center justify-between"
          >
            <span className="flex items-center">
              <Calendar className="mr-2" size={20} />
              <span className="text-lg">All Weeks</span>
            </span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeekSelector;
