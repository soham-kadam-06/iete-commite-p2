"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, Clock, Heart, MessageCircle, Share2, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"

export default function EventsPage() {
  const [newMemory, setNewMemory] = useState("")
  const [memories, setMemories] = useState([
    {
      id: 1,
      author: "Priya Sharma",
      content:
        "The IoT workshop was incredible! Building our first smart home prototype was such a rewarding experience.",
      image: "/placeholder.svg?height=200&width=300&text=IoT+Workshop",
      likes: 24,
      comments: 8,
      date: "2 days ago",
    },
    {
      id: 2,
      author: "Rahul Patel",
      content:
        "Loved the hands-on approach in the 5G seminar. The practical demonstrations made complex concepts so clear!",
      image: "/placeholder.svg?height=200&width=300&text=5G+Seminar",
      likes: 18,
      comments: 5,
      date: "1 week ago",
    },
  ])

  const addMemory = () => {
    if (newMemory.trim()) {
      const memory = {
        id: memories.length + 1,
        author: "You",
        content: newMemory,
        image: null,
        likes: 0,
        comments: 0,
        date: "Just now",
      }
      setMemories([memory, ...memories])
      setNewMemory("")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">IETE Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover upcoming workshops, share memories, and explore our event history
          </p>
        </div>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Advanced Robotics Workshop",
                date: "March 15, 2025",
                time: "10:00 AM - 4:00 PM",
                location: "Engineering Lab A",
                price: "₹500",
                registered: 45,
                capacity: 60,
                image: "/placeholder.svg?height=200&width=400&text=Robotics+Workshop",
              },
              {
                title: "AI & Machine Learning Seminar",
                date: "March 22, 2025",
                time: "2:00 PM - 6:00 PM",
                location: "Main Auditorium",
                price: "Free",
                registered: 120,
                capacity: 150,
                image: "/placeholder.svg?height=200&width=400&text=AI+ML+Seminar",
              },
              {
                title: "Electronics Innovation Fair",
                date: "April 5, 2025",
                time: "9:00 AM - 5:00 PM",
                location: "Campus Ground",
                price: "₹200",
                registered: 80,
                capacity: 200,
                image: "/placeholder.svg?height=200&width=400&text=Innovation+Fair",
              },
            ].map((event, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{event.price}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Registration</span>
                      <span>
                        {event.registered}/{event.capacity}
                      </span>
                    </div>
                    <Progress value={(event.registered / event.capacity) * 100} className="h-2" />
                  </div>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 2025-2026 Events & Memories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">2025-2026 Events & Memories</h2>

          {/* Memory Sharing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Share Your Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Share your memories from recent events..."
                value={newMemory}
                onChange={(e) => setNewMemory(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex gap-2">
                <Button onClick={addMemory} disabled={!newMemory.trim()}>
                  Share Memory
                </Button>
                <Button variant="outline">
                  <Camera className="w-4 h-4 mr-2" />
                  Add Photo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Memory Feed */}
          <div className="space-y-6">
            {memories.map((memory) => (
              <Card key={memory.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      {memory.author[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{memory.author}</span>
                        <span className="text-sm text-muted-foreground">{memory.date}</span>
                      </div>
                      <p className="mb-3">{memory.content}</p>
                      {memory.image && (
                        <img
                          src={memory.image || "/placeholder.svg"}
                          alt="Memory"
                          className="rounded-lg mb-3 max-w-md"
                        />
                      )}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Heart className="w-4 h-4" />
                          {memory.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          {memory.comments}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 2024-2025 Past Events Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">2024-2025 Past Events</h2>
          <div className="space-y-8">
            {[
              {
                title: "5G Technology Summit",
                date: "December 15, 2024",
                location: "Main Auditorium",
                participants: 200,
                highlights: ["Industry Expert Talks", "Live 5G Demonstrations", "Networking Session"],
                images: [
                  "/placeholder.svg?height=300&width=400&text=5G+Summit+1",
                  "/placeholder.svg?height=300&width=400&text=5G+Summit+2",
                  "/placeholder.svg?height=300&width=400&text=5G+Summit+3",
                ],
                description:
                  "A comprehensive summit exploring the latest developments in 5G technology with industry leaders and hands-on demonstrations.",
              },
              {
                title: "IoT Innovation Workshop",
                date: "November 20, 2024",
                location: "Electronics Lab",
                participants: 80,
                highlights: ["Smart Home Projects", "Sensor Integration", "Cloud Connectivity"],
                images: [
                  "/placeholder.svg?height=300&width=400&text=IoT+Workshop+1",
                  "/placeholder.svg?height=300&width=400&text=IoT+Workshop+2",
                  "/placeholder.svg?height=300&width=400&text=IoT+Workshop+3",
                ],
                description:
                  "Hands-on workshop where participants built IoT devices and learned about sensor integration and cloud connectivity.",
              },
              {
                title: "Electronics Design Competition",
                date: "October 10, 2024",
                location: "Campus Ground",
                participants: 150,
                highlights: ["Circuit Design Contest", "Innovation Awards", "Industry Mentorship"],
                images: [
                  "/placeholder.svg?height=300&width=400&text=Design+Competition+1",
                  "/placeholder.svg?height=300&width=400&text=Design+Competition+2",
                  "/placeholder.svg?height=300&width=400&text=Design+Competition+3",
                ],
                description:
                  "Annual design competition showcasing innovative electronic solutions with industry mentorship and awards.",
              },
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <img
                        src={event.images[0] || "/placeholder.svg"}
                        alt={`${event.title} 1`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <img
                        src={event.images[1] || "/placeholder.svg"}
                        alt={`${event.title} 2`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <img
                        src={event.images[2] || "/placeholder.svg"}
                        alt={`${event.title} 3`}
                        className="w-full h-32 object-cover rounded-lg col-span-2"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{event.participants} participants</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Event Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
