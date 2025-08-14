import AnimatedBackground from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Heart, MessageCircle } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Header */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IETE Events</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover upcoming events, relive memories, and explore our rich history of technical excellence
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "5G Technology Workshop",
                  date: "March 15, 2025",
                  time: "10:00 AM - 4:00 PM",
                  location: "Main Auditorium",
                  price: "₹500",
                  registered: 45,
                  capacity: 100,
                  tags: ["Workshop", "5G", "Technology"],
                },
                {
                  title: "IoT Innovation Summit",
                  date: "March 22, 2025",
                  time: "9:00 AM - 5:00 PM",
                  location: "Conference Hall",
                  price: "₹800",
                  registered: 78,
                  capacity: 150,
                  tags: ["Summit", "IoT", "Innovation"],
                },
                {
                  title: "Electronics Design Contest",
                  date: "April 5, 2025",
                  time: "10:00 AM - 6:00 PM",
                  location: "Lab Complex",
                  price: "₹300",
                  registered: 32,
                  capacity: 80,
                  tags: ["Contest", "Design", "Electronics"],
                },
              ].map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {event.registered}/{event.capacity} registered
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-lg font-semibold">{event.price}</span>
                        <Button>Register Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 2025-2026 Events & Memories */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">2025-2026 Events & Memories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Annual Tech Fest 2025",
                  description: "Share your memories from our biggest tech celebration",
                  image: "/placeholder.svg?height=300&width=400&text=Tech+Fest+2025",
                  likes: 124,
                  comments: 18,
                  memories: [
                    "Amazing robotics competition!",
                    "The keynote speaker was inspiring",
                    "Great networking opportunities",
                  ],
                },
                {
                  title: "Industry Connect Seminar",
                  description: "Professional insights and career guidance session",
                  image: "/placeholder.svg?height=300&width=400&text=Industry+Connect",
                  likes: 89,
                  comments: 12,
                  memories: ["Learned so much about industry trends", "Great Q&A session", "Valuable career advice"],
                },
              ].map((event, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {event.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {event.comments}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Recent Memories:</h4>
                        {event.memories.map((memory, memIndex) => (
                          <p key={memIndex} className="text-sm text-muted-foreground italic">
                            "{memory}"
                          </p>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Share Your Memory
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 2024-2025 Past Events */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">2024-2025 Past Events</h2>
            <div className="space-y-12">
              {[
                {
                  title: "AI & Machine Learning Conference",
                  date: "December 10, 2024",
                  location: "Main Campus",
                  description: "A comprehensive conference covering the latest developments in AI and ML technologies.",
                  highlights: [
                    "200+ participants from industry and academia",
                    "15 technical presentations",
                    "Hands-on workshops on TensorFlow and PyTorch",
                    "Networking session with industry experts",
                  ],
                  images: [
                    "/placeholder.svg?height=200&width=300&text=AI+Conference+1",
                    "/placeholder.svg?height=200&width=300&text=AI+Conference+2",
                    "/placeholder.svg?height=200&width=300&text=AI+Conference+3",
                  ],
                },
                {
                  title: "Electronics Innovation Expo",
                  date: "October 15, 2024",
                  location: "Exhibition Hall",
                  description: "Showcasing innovative electronics projects and research from students and faculty.",
                  highlights: [
                    "50+ project exhibitions",
                    "Industry panel discussions",
                    "Best innovation awards ceremony",
                    "Technology transfer opportunities",
                  ],
                  images: [
                    "/placeholder.svg?height=200&width=300&text=Innovation+Expo+1",
                    "/placeholder.svg?height=200&width=300&text=Innovation+Expo+2",
                    "/placeholder.svg?height=200&width=300&text=Innovation+Expo+3",
                  ],
                },
              ].map((event, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <h4 className="font-semibold mb-3">Event Highlights:</h4>
                        <ul className="space-y-2">
                          {event.highlights.map((highlight, hlIndex) => (
                            <li key={hlIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Event Gallery:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {event.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="aspect-video bg-muted rounded-lg overflow-hidden">
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${event.title} ${imgIndex + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
