"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  const handleStartJourney = () => {
    // Navigate to /start for conversational onboarding
    window.location.href = "/start"
  }

  return (
    <section className={cn("bg-green-50 py-12 sm:py-16 md:py-20 lg:py-24", className)} aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
              >
                BUILD YOUR{" "}
                <span className="text-green-600">PERSONALIZED</span>{" "}
                LEARNING JOURNEY
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Define any learning goal and get an AI-powered, adaptive curriculum. From technical skills to personal growth — master any topic with structured guidance and real-time progress tracking.
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <Button
                  onClick={handleStartJourney}
                  size="lg"
                  className="h-14 px-8 sm:px-12 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Start your personalized learning journey"
                >
                  Start Your Journey
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center lg:text-left">
                ✨ Conversational goal scoping • AI-powered curriculum • Adaptive learning paths
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="text-center lg:text-left">
                <div className="text-green-600 font-semibold text-sm uppercase tracking-wide">Goal Scoping</div>
                <div className="text-gray-700 text-sm mt-1">AI clarifies and breaks down your learning goals</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-green-600 font-semibold text-sm uppercase tracking-wide">Skill Assessment</div>
                <div className="text-gray-700 text-sm mt-1">Personalized curriculum based on your level</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-green-600 font-semibold text-sm uppercase tracking-wide">AI Assistant</div>
                <div className="text-gray-700 text-sm mt-1">Get help and clarification anytime</div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Learning Paths</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Goal Achievement</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Diverse group of students collaborating and learning together, representing Pathwise's inclusive and personalized learning approach"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
            
            {/* Floating Elements for Visual Interest */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-yellow-400 text-yellow-900 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              AI-Powered
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              Adaptive
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 