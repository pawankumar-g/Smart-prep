"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { SocialShare } from "@/components/social/social-share"
import { AchievementShare } from "@/components/social/achievement-share"
import { Award, Clock, ArrowLeft, ArrowRight, Flag, CheckCircle, XCircle, RotateCcw } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function PracticeTestPage() {
  const params = useParams()
  const testId = params.id as string

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(2700) // 45 minutes in seconds
  const [isTestStarted, setIsTestStarted] = useState(false)
  const [isTestCompleted, setIsTestCompleted] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Mock test data - in real app this would come from API
  const testData = {
    id: testId,
    title: "Mathematics Foundation Test",
    subject: "Mathematics",
    questions: 25,
    timeLimit: 45,
    difficulty: "Beginner",
    description: "Perfect for students starting their 11+ mathematics journey",
  }

  const questions = [
    {
      id: 1,
      question: "What is 15% of 240?",
      type: "multiple-choice",
      options: ["24", "36", "40", "48"],
      correctAnswer: "36",
      explanation: "To find 15% of 240: (15/100) × 240 = 0.15 × 240 = 36",
      topic: "Percentages",
    },
    {
      id: 2,
      question: "If a train travels 180 miles in 3 hours, what is its average speed?",
      type: "multiple-choice",
      options: ["50 mph", "60 mph", "70 mph", "80 mph"],
      correctAnswer: "60 mph",
      explanation: "Speed = Distance ÷ Time = 180 ÷ 3 = 60 mph",
      topic: "Speed, Distance, Time",
    },
    {
      id: 3,
      question: "What is the next number in the sequence: 2, 6, 18, 54, ?",
      type: "multiple-choice",
      options: ["108", "162", "216", "270"],
      correctAnswer: "162",
      explanation: "Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162",
      topic: "Number Sequences",
    },
    {
      id: 4,
      question: "A rectangle has a length of 12 cm and width of 8 cm. What is its area?",
      type: "multiple-choice",
      options: ["40 cm²", "80 cm²", "96 cm²", "120 cm²"],
      correctAnswer: "96 cm²",
      explanation: "Area of rectangle = length × width = 12 × 8 = 96 cm²",
      topic: "Area and Perimeter",
    },
    {
      id: 5,
      question: "What is 3/4 + 1/8?",
      type: "multiple-choice",
      options: ["4/12", "7/8", "5/6", "11/12"],
      correctAnswer: "7/8",
      explanation: "Convert to common denominator: 3/4 = 6/8, so 6/8 + 1/8 = 7/8",
      topic: "Fractions",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTestStarted && !isTestCompleted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTestCompleted(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTestStarted, isTestCompleted, timeLeft])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleSubmitTest = () => {
    setIsTestCompleted(true)
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / questions.length) * 100)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  if (!isTestStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/practice" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4" />
                Back to Practice Tests
              </Link>
              <div className="flex items-center gap-2">
                <Award className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">11 Plus DIY</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="border-blue-200 shadow-xl">
            <CardHeader className="text-center">
              <Badge className="mx-auto mb-4 bg-blue-100 text-blue-700">{testData.subject}</Badge>
              <CardTitle className="text-3xl mb-4">{testData.title}</CardTitle>
              <CardDescription className="text-lg">{testData.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{testData.questions}</div>
                  <div className="text-sm text-gray-600">Questions</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{testData.timeLimit} min</div>
                  <div className="text-sm text-gray-600">Time Limit</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <Badge className="bg-purple-100 text-purple-700">{testData.difficulty}</Badge>
                  <div className="text-sm text-gray-600 mt-1">Difficulty</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Test Instructions:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Read each question carefully before selecting your answer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You can navigate between questions and change your answers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>The timer will start when you begin the test</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Submit your test before time runs out</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => setIsTestStarted(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                >
                  Start Test
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const correctAnswers = questions.filter((q) => answers[q.id] === q.correctAnswer).length

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/practice" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4" />
                Back to Practice Tests
              </Link>
              <div className="flex items-center gap-2">
                <Award className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">11+ SmartPre</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Results Summary */}
          <Card className="border-blue-200 shadow-xl mb-8">
            <CardHeader className="text-center">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>{score}%</div>
              <CardTitle className="text-2xl mb-2">Test Completed!</CardTitle>
              <CardDescription>
                You answered {correctAnswers} out of {questions.length} questions correctly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {correctAnswers}/{questions.length}
                  </div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{formatTime(2700 - timeLeft)}</div>
                  <div className="text-sm text-gray-600">Time Taken</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Work"}
                  </div>
                  <div className="text-sm text-gray-600">Performance</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/practice">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Take Another Test
                  </Link>
                </Button>
                <AchievementShare
                  achievement={{
                    title: "Test Completed",
                    description: "Successfully completed a practice test",
                    category: "completion",
                  }}
                  score={score}
                  testName={testData.title}
                />
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Your Achievement</h3>
                  <p className="text-gray-600">Let others know about your progress!</p>
                </div>
                <div className="flex justify-center">
                  <SocialShare
                    title={`I just scored ${score}% on ${testData.title}!`}
                    description={`Check out my progress on 11 Plus DIY - comprehensive 11+ exam preparation with practice tests and expert guidance.`}
                    hashtags={["11Plus", "StudySuccess", "ExamPrep", "Education"]}
                    variant="inline"
                    showLabels={true}
                    size="md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle>Question Review</CardTitle>
              <CardDescription>Review your answers and explanations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {questions.map((question, index) => {
                  const userAnswer = answers[question.id]
                  const isCorrect = userAnswer === question.correctAnswer

                  return (
                    <div key={question.id} className="border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isCorrect ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">Question {index + 1}</span>
                            <Badge variant="outline" className="text-xs">
                              {question.topic}
                            </Badge>
                          </div>
                          <p className="text-gray-900 mb-4">{question.question}</p>

                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {question.options.map((option) => (
                              <div
                                key={option}
                                className={`p-2 rounded border text-sm ${
                                  option === question.correctAnswer
                                    ? "bg-green-100 border-green-200 text-green-700"
                                    : option === userAnswer && !isCorrect
                                      ? "bg-red-100 border-red-200 text-red-700"
                                      : "bg-gray-50 border-gray-200"
                                }`}
                              >
                                {option}
                                {option === question.correctAnswer && " ✓"}
                                {option === userAnswer && !isCorrect && " ✗"}
                              </div>
                            ))}
                          </div>

                          <div className="bg-blue-50 p-3 rounded border border-blue-200">
                            <p className="text-sm text-blue-800">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Test Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-gray-900">11 Plus DIY</span>
              </div>
              <div className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-600" />
                <span className={`font-mono ${timeLeft < 300 ? "text-red-600" : "text-gray-900"}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSubmitTest}
                className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Flag className="h-4 w-4 mr-2" />
                Submit Test
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-blue-100 text-blue-700">{currentQ.topic}</Badge>
              <span className="text-sm text-gray-600">Question {currentQuestion + 1}</span>
            </div>
            <CardTitle className="text-xl leading-relaxed">{currentQ.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={answers[currentQ.id] || ""}
              onValueChange={(value) => handleAnswerChange(currentQ.id, value)}
            >
              <div className="grid gap-3">
                {currentQ.options.map((option, index) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <div className="text-sm text-gray-600">
                {Object.keys(answers).length} of {questions.length} answered
              </div>

              {currentQuestion === questions.length - 1 ? (
                <Button onClick={handleSubmitTest} className="bg-green-600 hover:bg-green-700">
                  Submit Test
                  <Flag className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} className="bg-blue-600 hover:bg-blue-700">
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Question Navigation */}
        <Card className="mt-6 border-blue-100">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg border text-sm font-medium transition-colors ${
                    index === currentQuestion
                      ? "bg-blue-600 text-white border-blue-600"
                      : answers[questions[index].id]
                        ? "bg-green-100 text-green-700 border-green-200"
                        : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
