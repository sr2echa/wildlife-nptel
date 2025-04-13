"use client";

import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCategoryData } from "@/utils/data-utils";

// Removed the specific CategoryPageParams interface

const categoryIcons: Record<string, string> = {
  wildlife: "🌿",
  forest: "🌳",
  economics: "💰",
  // psychology: "🧠",
};

const categoryTitles: Record<string, string> = {
  wildlife: "Wildlife Ecology",
  forest: "Forest and Its Management",
  economics: "Conservative Economics",
  // psychology: "Cognitive Psychology",
};

export default function CategoryPage() {
  // Remove the generic type argument <CategoryPageParams>
  const params = useParams();

  // Safely extract the 'category' parameter
  const categoryParam = params?.category;
  const [category, setCategory] = useState<string | undefined>(undefined);

  // Process the param once when it changes
  useEffect(() => {
    let extractedCategory: string | undefined = undefined;
    if (typeof categoryParam === "string") {
      extractedCategory = categoryParam;
    } else if (Array.isArray(categoryParam)) {
      // Handle array case if necessary, e.g., use the first value
      // This is less likely for /quiz/[category] but good practice
      extractedCategory = categoryParam[0];
    }
    setCategory(extractedCategory);
  }, [categoryParam]);

  const [topics, setTopics] = useState<string[]>([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This effect now depends on the processed 'category' state
    if (category === undefined) {
      // Decide if undefined means loading or error based on initial state/previous effect
      // Setting loading false here assumes the param processing effect already ran
      setLoading(false);
      if (params?.category !== undefined) {
        // Check if param existed but was invalid type
        setError("Invalid category parameter type in URL.");
      } else {
        setError("Category parameter not found in URL.");
      }
      setTopics([]); // Clear topics if category is invalid/missing
      setCategoryTitle("");
      return;
    }

    const loadTopics = async () => {
      setLoading(true);
      setError(null);
      setTopics([]);
      setCategoryTitle("");

      try {
        const data = await getCategoryData(category); // Use the validated category state
        if (data) {
          const fetchedTopics = Object.keys(data).filter((key) => key !== "all");
          setTopics(fetchedTopics);
          setCategoryTitle(categoryTitles[category] || category);
        } else {
          setError(`No data found for category: ${category}`);
        }
      } catch (err) {
        console.error("Failed to load topics:", err);
        setError(`Failed to load topics for ${category}`);
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
    // Depend on the validated 'category' state variable
  }, [category]);

  const formatTopicName = (topic: string): string => {
    if (topic === "all") return "All Topics";
    if (topic.startsWith("topic") && /\d+$/.test(topic)) {
      return `Topic ${topic.replace("topic", "")}`;
    }
    return topic.charAt(0).toUpperCase() + topic.slice(1);
  };

  // Display loading state while category is being determined or data fetched
  // The initial state of category is undefined, so this covers initial load
  if (loading && category === undefined && !error) {
    return (
      <div className="min-h-screen bg-black text-gray-300 flex items-center justify-center">
        <p className="text-xl text-gray-400">Loading category details...</p>
      </div>
    );
  }

  // Display error if category validation failed (and not otherwise loading)
  if (category === undefined && error && !loading) {
    return (
      <div className="min-h-screen bg-black text-gray-300 flex items-center justify-center p-4">
        <div className="bg-red-900/30 border-2 border-red-800 p-6 text-center max-w-md">
          <p className="text-red-300 text-lg">{error}</p>
          <p className="mt-2 text-gray-400">Please check the URL.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white flex items-center">
            {/* Render icon/title only if category is valid */}
            <span className="mr-3 text-3xl">
              {category ? categoryIcons[category] ?? "📚" : "📚"}
            </span>
            {categoryTitle || category || "Category"}
          </h1>
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
            title="Back to Categories"
          >
            <ArrowLeft className="mr-1 sm:mr-2" size={20} />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>

        {/* Loading state specific to fetching topics */}
        {loading && category !== undefined && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              Loading topics for {categoryTitle || category}...
            </p>
          </div>
        )}

        {/* Error state specific to fetching topics */}
        {error && !loading && category !== undefined && (
          <div className="bg-red-900/30 border-2 border-red-800 p-6 mb-8 text-center">
            <p className="text-red-300 text-lg">{error}</p>
            <p className="mt-2 text-gray-400">Could not load topics. Please try again later.</p>
          </div>
        )}

        {/* Render topic list only when not loading, no errors, and category is valid */}
        {!loading && !error && category && (
          <div>
            <h2 className="text-xl font-semibold mb-6 text-white">Select a Week to Practice</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <Link
                  key={topic}
                  href={`/quiz/${category}/${topic}`}
                  className="bg-gray-900/50 border-2 border-gray-700 p-4 hover:bg-gray-800 hover:border-blue-600 transition-colors duration-300 flex items-center justify-between"
                >
                  <span className="flex items-center">
                    <BookOpen className="mr-2 text-gray-400" size={20} />
                    <span className="text-lg">{formatTopicName(topic)}</span>
                  </span>
                  <ArrowRight className="text-gray-400" size={20} />
                </Link>
              ))}

              {topics.length > 1 && (
                <Link
                  href={`/quiz/${category}/all`}
                  className="bg-blue-600 text-white p-4 hover:bg-blue-700 transition-colors duration-300 flex items-center justify-between col-span-1 sm:col-span-2 md:col-span-3"
                  title="Practice questions from all topics"
                >
                  <span className="flex items-center">
                    <BookOpen className="mr-2" size={20} />
                    <span className="text-lg">All Topics</span>
                  </span>
                  <ArrowRight size={20} />
                </Link>
              )}
              {topics.length === 1 &&
                topics[0] !== "all" && ( // Avoid showing this if only 'all' topic exists implicitly
                  <p className="text-gray-500 text-sm italic col-span-full text-center mt-4">
                    Only one topic available for this category.
                  </p>
                )}
              {topics.length === 0 && ( // Simplified condition
                <p className="text-gray-500 text-lg col-span-full text-center mt-4">
                  No specific topics found for this category.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
