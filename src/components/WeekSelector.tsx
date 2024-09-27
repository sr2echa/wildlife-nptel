import React from "react";
import { Calendar } from "lucide-react";

interface WeekSelectorProps {
  weeks: string[];
  onSelectWeek: (week: string) => void;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({ weeks, onSelectWeek }) => {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Select a Week to Practice</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {weeks.map((week) => (
            <button
              key={week}
              className="flex items-center justify-center p-6 bg-white border-2 border-black rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => onSelectWeek(week)}
            >
              <Calendar className="mr-2 text-blue-600" size={24} />
              <span className="text-lg">{week}</span>
            </button>
          ))}
          <button
            className="flex items-center justify-center p-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={() => onSelectWeek("all")}
          >
            <Calendar className="mr-2" size={24} />
            <span className="text-lg">All Weeks</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekSelector;
