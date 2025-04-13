import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface QuizCategoryProps {
  title: string
  icon: ReactNode
  description: string
  href: string
}

export default function QuizCategory({ title, icon, description, href }: QuizCategoryProps) {
  return (
    <Link href={href} className="block group">
      <Card className="bg-gray-950 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
        <CardContent className="p-6">
          <div className="mb-4">{icon}</div>
          <h4 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">{title}</h4>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          <div className="flex items-center text-emerald-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Start Quiz <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
