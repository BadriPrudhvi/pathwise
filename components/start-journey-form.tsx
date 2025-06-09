"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, MessageCircle, Target } from "lucide-react"

export function StartJourneyForm() {
  const searchParams = useSearchParams()
  const [goal, setGoal] = React.useState(searchParams?.get("goal") || "")
  const [experience, setExperience] = React.useState("")
  const [timeCommitment, setTimeCommitment] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement goal scoping and curriculum generation
    console.log("Starting journey with:", { goal, experience, timeCommitment })
  }

  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <span className="ml-2 text-sm font-medium text-green-600">Goal Setting</span>
          </div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <span className="ml-2 text-sm font-medium text-gray-500">Assessment</span>
          </div>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <span className="ml-2 text-sm font-medium text-gray-500">Curriculum</span>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Target className="h-6 w-6 text-green-600" />
            What do you want to learn?
          </CardTitle>
                      <CardDescription>
              Be as specific or as broad as you&apos;d like. Our AI will help clarify and scope your learning goal.
            </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="goal">Learning Goal</Label>
              <Textarea
                id="goal"
                placeholder="e.g., I want to become proficient at backend development for building web applications"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Current Experience Level</Label>
              <Textarea
                id="experience"
                placeholder="Tell us about your current knowledge and experience in this area..."
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeCommitment">Time Commitment</Label>
              <Input
                id="timeCommitment"
                placeholder="e.g., 1 hour per day, 5 hours per week"
                value={timeCommitment}
                onChange={(e) => setTimeCommitment(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Brain className="h-5 w-5 mr-2" />
              Start AI Goal Scoping
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Features Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Brain className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">AI Goal Scoping</h3>
            <p className="text-sm text-gray-600">
              Our AI will help clarify and break down your learning goal into achievable milestones.
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Skill Assessment</h3>
            <p className="text-sm text-gray-600">
              We&apos;ll assess your current knowledge to create a personalized starting point.
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Custom Curriculum</h3>
            <p className="text-sm text-gray-600">
              Get a tailored learning path with lessons, projects, and progress tracking.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 