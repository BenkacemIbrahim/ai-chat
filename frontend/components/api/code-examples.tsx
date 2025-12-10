import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CodeExamples() {
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Code Examples</h2>
      {/* Add your code examples here */}

      <div className="text-center">
        <Link href="/docs/tutorials">
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8">
            View All Examples
          </Button>
        </Link>
      </div>
    </div>
  )
}
