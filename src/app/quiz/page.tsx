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

  return <WeekSelector weeks={weeks} onSelectWeek={handleWeekSelect} />;
}
