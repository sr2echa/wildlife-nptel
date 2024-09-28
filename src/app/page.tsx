import Link from "next/link";
import { Book, Brain, Award, ArrowRight, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4 font-sans">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8 font-mono text-center">
          NPTEL Wildlife & Ecology Quiz
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={Book}
            title="Comprehensive"
            description="All NPTEL course weeks covered"
          />
          <FeatureCard
            icon={Brain}
            title="Challenging"
            description="Exam-like questions for preparation"
          />
          <FeatureCard
            icon={Award}
            title="Progress Tracking"
            description="Monitor improvement and weak areas"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link
            href="/quiz"
            className="inline-flex items-center bg-gray-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-700"
          >
            Start Practising
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <a
            href="https://github.com/sr2echa/wildlife-nptel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300"
          >
            <Github className="mr-2" size={24} />
            View on GitHub
          </a>
        </div>
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
    <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-800">
      <Icon size={36} className="text-white mb-4" />
      <h2 className="text-xl font-bold mb-2 font-mono">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
