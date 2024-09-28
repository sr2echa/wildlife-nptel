"use client";
import React from "react";
import { questionsByWeek } from "@/data/questions";
import WeekSelector from "@/components/WeekSelector";

export default function QuizWeekSelector() {
  const weeks = Object.keys(questionsByWeek);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <WeekSelector weeks={weeks} />
    </div>
  );
}
