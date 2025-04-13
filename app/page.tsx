// "use client";
// import { Leaf, TreesIcon as Tree, Brain, Coins } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   const quizCategories = [
//     {
//       id: "wildlife",
//       title: "Wildlife Ecology",
//       icon: <Leaf className="h-6 w-6 text-emerald-400" />,
//       description: "Explore ecosystems, biodiversity, and wildlife conservation principles",
//     },
//     {
//       id: "forest",
//       title: "Forest and Its Management",
//       icon: <Tree className="h-6 w-6 text-green-400" />,
//       description: "Learn about sustainable forestry practices and ecosystem management",
//     },
//     {
//       id: "economics",
//       title: "Conservative Economics",
//       icon: <Coins className="h-6 w-6 text-amber-400" />,
//       description: "Study economic theories focused on fiscal responsibility and market principles",
//     },
//     // {
//     //   id: "psychology",
//     //   title: "Cognitive Psychology",
//     //   icon: <Brain className="h-6 w-6 text-purple-400" />,
//     //   description: "Understand mental processes, perception, memory, and decision-making",
//     // },
//   ];

//   const handleCategoryClick = (categoryId: string) => {
//     router.push(`/quiz/${categoryId}`);
//   };

//   return (
//     <div className="min-h-screen bg-black text-gray-300 font-mono">
//       <header className="border-b-2 border-gray-700 py-6 px-4">
//         <div className="max-w-6xl mx-auto flex justify-between items-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-white">NPTEL</h1>
//           <div className="hidden md:flex space-x-6">
//             {quizCategories.map((category) => (
//               <div key={category.id} className="flex items-center space-x-2">
//                 {category.icon}
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto px-4 py-12">
//         <section className="mb-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Quiz Application</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Master your NPTEL courses with our specialized quiz application.
//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold mb-8 text-white">Select a Category</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {quizCategories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => handleCategoryClick(category.id)}
//                 className="bg-transparent border-2 border-gray-700 hover:border-gray-600 transition-colors p-6 text-left group"
//               >
//                 <div className="mb-4">{category.icon}</div>
//                 <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
//                   {category.title}
//                 </h4>
//                 <p className="text-gray-400 text-sm">{category.description}</p>
//               </button>
//             ))}
//           </div>
//         </section>
//       </main>

//       <div className="text-center text-gray-500 text-sm py-4">
//         <p>Made by sreecha</p>
//       </div>
//     </div>
//   );
// }

"use client";

// Import necessary components and icons
import { Leaf, TreePalm as Tree, Brain, Coins, Github } from "lucide-react"; // Using TreePalm for a potentially clearer tree icon
import Link from "next/link"; // Use Link for navigation instead of router.push for semantics

export default function Home() {
  // No need for useRouter if we use Link components
  // const router = useRouter();

  const quizCategories = [
    {
      id: "wildlife",
      title: "Wildlife Ecology",
      icon: <Leaf className="h-8 w-8 text-emerald-400" />, // Slightly larger icon
      description: "Ecosystems, biodiversity, conservation principles.", // Shorter description
    },
    {
      id: "forest",
      title: "Forest Management", // Shorter title
      icon: <Tree className="h-8 w-8 text-green-500" />, // Adjusted color slightly
      description: "Sustainable forestry and ecosystem management.", // Shorter description
    },
    {
      id: "economics",
      title: "Conservative Economics",
      icon: <Coins className="h-8 w-8 text-amber-400" />,
      description: "Fiscal responsibility and market principles.", // Shorter description
    },
    // { // Keep psychology commented out or add it back if needed
    //   id: "psychology",
    //   title: "Cognitive Psychology",
    //   icon: <Brain className="h-8 w-8 text-purple-400" />,
    //   description: "Mental processes, perception, memory.", // Shorter description
    // },
  ];

  // handleCategoryClick is no longer needed if using Link components
  // const handleCategoryClick = (categoryId: string) => {
  //   router.push(`/quiz/${categoryId}`);
  // };

  return (
    // Root container: AMOLED black, min height, relative positioning for footer, monospace font
    <div className="relative min-h-screen bg-black text-gray-300 font-mono">
      {/* Header: Minimal, border bottom, contains category icons and GitHub link */}
      <header className="border-b border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        {/* Increased border darkness slightly */}
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Left side: Placeholder or leave empty if no logo */}
          <div className="w-8"></div> {/* Acts as spacer */}
          {/* Middle: Category Icons (optional, uncomment if desired) */}
          {/* <div className="hidden md:flex space-x-4">
            {quizCategories.map((category) => (
              <div key={`${category.id}-header-icon`} className="text-gray-600 hover:text-gray-400 transition-colors">
                 {category.icon} // You might need to adjust icon size/color here
              </div>
            ))}
           </div> */}
          {/* Right side: GitHub Link */}
          <Link
            href="https://github.com/sr2echa/nptel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        {" "}
        {/* Increased vertical padding */}
        {/* Hero Section */}
        <section className="mb-16 md:mb-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            {" "}
            {/* Adjusted heading tag, tracking */}
            NPTEL Quiz Zone
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Sharpen your knowledge for NPTEL courses. Select a category below to begin.
          </p>
        </section>
        {/* Category Selection Section */}
        <section>
          {/* Removed explicit "Select a Category" heading for minimalism */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {" "}
            {/* Adjusted grid cols and gap */}
            {quizCategories.map((category) => (
              // Use Link component for navigation
              <Link
                key={category.id}
                href={`/quiz/${category.id}`}
                className="block bg-gray-900/50 border border-gray-700 p-6 text-left group hover:border-blue-500 hover:bg-gray-900 transition-all duration-200 ease-in-out transform hover:-translate-y-1" // Added hover bg, adjusted border/hover colors, added subtle lift
              >
                <div className="mb-4">{category.icon}</div>
                <h2 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-200">
                  {category.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {" "}
                  {/* Adjusted text color/leading */}
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer: Positioned absolutely at the bottom */}
      <footer className="absolute bottom-0 left-0 w-full py-4 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-xs">
          Made by{" "}
          <a
            href="https://sreecha.space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-200 underline underline-offset-2"
          >
            sreecha
          </a>
        </div>
      </footer>
    </div>
  );
}
