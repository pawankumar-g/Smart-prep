
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Settings,
  Trophy,
  Crown,
  LogOut,
  GraduationCap,
  Target,
  Calendar,
  BookOpen,
  TrendingUp,
  Star,
  Brain,
  Calculator,
} from "lucide-react"

export default function ProfilePage() {
  const [userRole, setUserRole] = useState<"parent" | "child" | "teacher">("parent")

  const streaks = {
    current: 15,
    longest: 28,
    total: 145,
  }

  const badges = [
    { name: "Math Master", icon: Calculator, color: "bg-blue-500", earned: true },
    { name: "Reading Champion", icon: BookOpen, color: "bg-green-500", earned: true },
    { name: "Logic Expert", icon: Brain, color: "bg-purple-500", earned: true },
    { name: "Perfect Score", icon: Target, color: "bg-pink-500", earned: false },
    { name: "Study Streak", icon: Trophy, color: "bg-orange-500", earned: true },
    { name: "Top Performer", icon: Crown, color: "bg-red-500", earned: false },
  ]

  const leaderboard = [
    { rank: 1, name: "Emma Thompson", score: 2850, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 2, name: "Oliver Wilson", score: 2720, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 3, name: "Sophia Chen", score: 2680, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 4, name: "You", score: 2540, avatar: "/placeholder.svg?height=40&width=40", isUser: true },
    { rank: 5, name: "James Parker", score: 2480, avatar: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    
  

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="bg-white shadow-xl rounded-2xl">
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-2xl text-foreground">
                Sarah Thompson
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Parent Account - Emma's Progress
              </CardDescription>

              {/* Role Selector */}
              <div className="flex justify-center gap-2 mt-4">
                <Button
                  variant={userRole === "parent" ? "default" : "outline"}
                  size="lg"
                  onClick={() => setUserRole("parent")}
                  className="rounded-full"
                >
                  Parent
                </Button>
                <Button
                  variant={userRole === "child" ? "default" : "outline"}
                  size="lg"
                  onClick={() => setUserRole("child")}
                  className="rounded-full"
                >
                  Child
                </Button>
                <Button
                  variant={userRole === "teacher" ? "default" : "outline"}
                  size="lg"
                  onClick={() => setUserRole("teacher")}
                  className="rounded-full"
                >
                  Teacher
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Settings & Theme */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Settings className="h-5 w-5" />
                Attendance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold text-blue-500">Present</div>
                  <div className="text-muted-foreground">Days</div>
                </div>
                <div>
                  <div className="font-semibold text-red-500">Absent</div>
                  <div className="text-muted-foreground">Days</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Streaks */}
          <Card className="bg-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Trophy className="h-5 w-5 text-orange-500" />
                Study Streaks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">{streaks.current}</div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="font-semibold text-blue-500">{streaks.longest}</div>
                  <div className="text-muted-foreground">Longest</div>
                </div>
                <div>
                  <div className="font-semibold text-green-500">{streaks.total}</div>
                  <div className="text-muted-foreground">Total Days</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">87%</div>
                <div className="text-sm text-muted-foreground">Overall Score</div>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="font-semibold text-blue-500">24</div>
                  <div className="text-muted-foreground">Tests Taken</div>
                </div>
                <div>
                  <div className="font-semibold text-purple-500">18</div>
                  <div className="text-muted-foreground">Badges</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard Preview */}
          <Card className="bg-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Crown className="h-5 w-5 text-red-500" />
                Your Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">#4</div>
                <div className="text-sm text-muted-foreground">This Month</div>
                <div className="text-lg font-semibold text-blue-500 mt-2">2,540 pts</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Role-based Dashboard Content */}
        {userRole === "parent" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <h2
                className={`text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent`}
              >
                Parent Dashboard
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Child Progress Card */}
              <Card
                className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-xl rounded-2x1 overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-8 w-5" />
                    Progress Section
                  </CardTitle>
                  <CardDescription className="text-emerald-100">Subject Performance Overview</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Calculator className="h-6 w-4 text-blue-600" />
                        <span className="text-gray-700">Mathematics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[92%] h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        </div>
                        <Badge className="bg-blue-500 text-white">92%</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">English</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[88%] h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                        </div>
                        <Badge className="bg-green-500 text-white">88%</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-purple-600" />
                        <span className="text-gray-700">Verbal Reasoning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[85%] h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                        </div>
                        <Badge className="bg-purple-500 text-white">85%</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-orange-600" />
                        <span className="text-gray-700">Non-Verbal Reasoning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[90%] h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                        </div>
                        <Badge className="bg-orange-500 text-white">90%</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Sessions */}
              <Card
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-8 w-5" />
                    Upcoming Sessions
                  </CardTitle>
                  <CardDescription className="text-blue-100">Scheduled Activities</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border-l-4 border-blue-500">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <Calculator className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-blue-900">Math Tutoring</div>
                        <div className="text-sm text-blue-600">Tomorrow, 4:00 PM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-xl border-l-4 border-green-500">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-green-900">Mock Exam</div>
                        <div className="text-sm text-green-600">Friday, 10:00 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl border-l-4 border-purple-500">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-purple-900">Logic Workshop</div>
                        <div className="text-sm text-purple-600">Saturday, 2:00 PM</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Parent Insights */}
              <Card
                className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-8 w-5" />
                    Weekly Insights
                  </CardTitle>
                  <CardDescription className="text-amber-100">Performance Analytics</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-600 mb-2">24</div>
                    <div className="text-sm text-gray-600">
                      Hours Studied This Week
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-green-700">Attendance</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-xs text-blue-700">Tests Completed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {userRole === "child" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h2
                className={`text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent`}
              >
                My Learning Adventure! 
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Today's Quests */}
              <Card
                className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-10 w-5" />
                    Today's Quests ⚡
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-100 to-green-50 rounded-xl border border-green-200">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-green-800 font-medium">Math Quest Complete! </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border border-blue-200">
                    <div className="w-6 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-blue-800 font-medium">Reading Adventure </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl border border-purple-200">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-purple-800 font-medium">Logic Puzzles </span>
                  </div>
                </CardContent>
              </Card>

              {/* Super Scores */}
              <Card
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-10 w-5" />
                    Super Scores! 
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-100 to-green-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl"></span>
                      <span className="font-medium text-green-800">Math Quiz</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-lg px-3 py-1">
                      95%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl"> </span>
                      <span className="font-medium text-blue-800">English Test</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg px-3 py-1">
                      88%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl"></span>
                      <span className="font-medium text-purple-800">Logic Practice</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-lg px-3 py-1">
                      92%
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Stats */}
              <Card
                className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-10 w-5" />
                    Amazing Facts! 
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl">
                    <div className="text-4xl mb-2"></div>
                    <div className="text-2xl font-bold text-orange-600">247</div>
                    <div className="text-sm text-orange-700">Problems Solved!</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-xl">
                    <div className="text-4xl mb-2"></div>
                    <div className="text-2xl font-bold text-green-600">+15%</div>
                    <div className="text-sm text-green-700">Math Skills Up!</div>
                  </div>
                </CardContent>
              </Card>

              {/* Power-ups */}
              <Card
                className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-10 w-5" />
                    Power-ups! 
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="text-center p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl">
                    <div className="text-3xl mb-1"></div>
                    <div className="text-xl font-bold text-purple-600">15</div>
                    <div className="text-xs text-purple-700">Day Streak!</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl">
                    <div className="text-3xl mb-1"></div>
                    <div className="text-xl font-bold text-blue-600">#4</div>
                    <div className="text-xs text-blue-700">Leaderboard</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-xl">
                    <div className="text-3xl mb-1">🏆</div>
                    <div className="text-xl font-bold text-green-600">18</div>
                    <div className="text-xs text-green-700">Badges Won!</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {userRole === "teacher" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h2
                className={`text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent`}
              >
                Teacher Dashboard
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Student Progress */}
              <Card
                className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    My Students
                  </CardTitle>
                  <CardDescription className="text-indigo-100">Class Performance Overview</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-100 to-green-50 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">ET</span>
                        </div>
                        <span className="font-medium text-green-800">Emma Thompson</span>
                      </div>
                      <Badge className="bg-green-500 text-white">Excellent</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">OW</span>
                        </div>
                        <span className="font-medium text-blue-800">Oliver Wilson</span>
                      </div>
                      <Badge className="bg-blue-500 text-white">Good</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-xl border-l-4 border-yellow-500">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">SC</span>
                        </div>
                        <span className="font-medium text-yellow-800">Sophia Chen</span>
                      </div>
                      <Badge className="bg-yellow-500 text-white">Needs Help</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Class Analytics */}
              <Card
                className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Class Performance
                  </CardTitle>
                  <CardDescription className="text-emerald-100">Weekly Analytics</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                  
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[89%] h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                        </div>
                        <span className="font-bold text-green-600">89%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                    
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[94%] h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        </div>
                        <span className="font-bold text-blue-600">94%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-[12%] h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                        </div>
                        <span className="font-bold text-purple-600">+12%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card
                className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-xl rounded-2xl overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription className="text-purple-100">Class Management Tools</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Create Assignment
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl">
                    <Target className="h-4 w-4 mr-2" />
                    Schedule Test
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Reports
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card
              className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 shadow-xl rounded-2xl overflow-hidden mt-6"
            >
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription className="text-orange-100">Latest Class Updates</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-100 to-green-50 rounded-xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-800">Emma Thompson completed Math Assessment with 95%</span>
                    <span className="text-xs text-green-600 ml-auto">2 hours ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-800">New assignment submitted by Oliver Wilson</span>
                    <span className="text-xs text-blue-600 ml-auto">4 hours ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-800">Sophia Chen requested help with Verbal Reasoning</span>
                    <span className="text-xs text-purple-600 ml-auto">6 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Badges Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Achievement Badges
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, index) => (
              <Card
                key={index}
                className={`bg-white shadow-lg rounded-2xl text-center p-4 ${badge.earned ? "opacity-100" : "opacity-50"}`}
              >
                <div className={`w-12 h-12 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <badge.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-medium text-foreground">{badge.name}</div>
                {badge.earned && <Star className="h-4 w-4 text-yellow-500 mx-auto mt-1" />}
              </Card>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Monthly Leaderboard
          </h3>
          <Card className="bg-white shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-3 rounded-xl ${user.isUser ? "bg-blue-50 border-2 border-blue-200" : "bg-gray-50"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        user.rank === 1
                          ? "bg-gold-500 text-white"
                          : user.rank === 2
                            ? "bg-gray-400 text-white"
                            : user.rank === 3
                              ? "bg-orange-500 text-white"
                              : "bg-blue-500 text-white"
                      }`}
                    >
                      {user.rank}
                    </div>
                    <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{user.name}</div>
                    </div>
                    <div className="font-bold text-muted-foreground">
                      {user.score.toLocaleString()} pts
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
