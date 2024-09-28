"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { questionsByWeek } from "@/data/questions";
import WeekSelector from "@/components/WeekSelector";

export default function QuizWeekSelector() {
  const router = useRouter();
  const weeks = Object.keys(questionsByWeek);

  const handleWeekSelect = (week: string) => {
    router.push(`/quiz/${week}`);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <WeekSelector weeks={weeks} onSelectWeek={handleWeekSelect} />
    </div>
  );
}
