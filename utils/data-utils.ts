import type { Question } from "@/types/Question"

// Dynamic import function for category data
export async function getCategoryData(category: string): Promise<Record<string, Question[]> | null> {
  try {
    // Dynamic import based on category - without the .ts extension
    const module = await import(`@/data/${category}`)
    return module.default
  } catch (error) {
    console.error(`Failed to load data for category: ${category}`, error)
    return null
  }
}
