import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  icon: ReactNode
  description: string
}

export default function FeatureCard({ title, icon, description }: FeatureCardProps) {
  return (
    <Card className="bg-gray-950 border-gray-800 h-full">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
