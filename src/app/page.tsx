import Link from "next/link";
import { Book, Brain, Award, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          NPTEL Wildlife & Ecology Quiz
        </h1>
        <p className="text-2xl mb-12 text-gray-300">Master your knowledge. Ace the NPTEL exam.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard icon={Book} title="Comprehensive" description="Cover all course weeks" />
          <FeatureCard icon={Brain} title="Challenging" description="Real exam-like questions" />
          <FeatureCard
            icon={Award}
            title="Progress Tracking"
            description="Monitor your improvement"
          />
        </div>
        <Link
          href="/quiz"
          className="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-blue-700"
        >
          Start Quiz
          <ArrowRight className="ml-2" size={24} />
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-800">
      <Icon size={48} className="text-purple-400 mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
