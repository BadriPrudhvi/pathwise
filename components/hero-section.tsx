"use client"

import * as React from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleGetStarted = () => {
    // Navigate to /start with optional search query
    const params = searchQuery ? `?goal=${encodeURIComponent(searchQuery)}` : ""
    window.location.href = `/start${params}`
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGetStarted()
    }
  }

  return (
    <section className={cn("bg-green-50 py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                BUILD YOUR{" "}
                <span className="text-green-600">PERSONALIZED</span>{" "}
                LEARNING JOURNEY
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
                Let AI help you master any skill – one goal at a time.
              </p>
            </div>

            {/* Search Bar */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="What do you want to learn?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="h-12 px-8 bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  Get Started
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Popular searches: Web Development, Data Science, Digital Marketing, Python
              </p>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Learning Paths</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Diverse group of students learning together, representing the collaborative and inclusive nature of Pathwise's learning platform"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Floating Elements for Visual Interest */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              AI-Powered
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Personalized
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 