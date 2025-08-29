"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Heart, MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function EventsPage() {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const eventGalleries = {
    "tech-fest-2025": [
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "industry-connect": [
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181804/pexels-photo-1181804.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "ai-ml-conference": [
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "innovation-expo": [
      "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2004162/pexels-photo-2004162.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2004164/pexels-photo-2004164.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2004165/pexels-photo-2004165.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }

  const openGallery = (galleryId: string) => {
    setSelectedGallery(galleryId)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedGallery) {
      const gallery = eventGalleries[selectedGallery as keyof typeof eventGalleries]
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length)
    }
  }

  const prevImage = () => {
    if (selectedGallery) {
      const gallery = eventGalleries[selectedGallery as keyof typeof eventGalleries]
      setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
    }
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">IETE Events</h1>
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
                  id: "tech-fest-2025",
                  title: "Annual Tech Fest 2025",
                  description: "Share your memories from our biggest tech celebration",
                  image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
                  likes: 124,
                  comments: 18,
                  memories: [
                    "Amazing robotics competition!",
                    "The keynote speaker was inspiring",
                    "Great networking opportunities",
                  ],
                },
                {
                  id: "industry-connect",
                  title: "Industry Connect Seminar",
                  description: "Professional insights and career guidance session",
                  image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
                  likes: 89,
                  comments: 12,
                  memories: ["Learned so much about industry trends", "Great Q&A session", "Valuable career advice"],
                },
              ].map((event, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => openGallery(event.id)}
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
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 bg-transparent">
                          Share Your Memory
                        </Button>
                        <Button 
                          variant="outline" 
                          className="bg-transparent"
                          onClick={() => openGallery(event.id)}
                        >
                          View Gallery
                        </Button>
                      </div>
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
                  id: "ai-ml-conference",
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
                    "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=300",
                    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=300",
                    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300",
                  ],
                },
                {
                  id: "innovation-expo",
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
                    "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=300",
                    "https://images.pexels.com/photos/2004162/pexels-photo-2004162.jpeg?auto=compress&cs=tinysrgb&w=300",
                    "https://images.pexels.com/photos/2004164/pexels-photo-2004164.jpeg?auto=compress&cs=tinysrgb&w=300",
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
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Event Gallery:</h4>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="bg-transparent"
                            onClick={() => openGallery(event.id)}
                          >
                            View All
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {event.images.slice(0, 4).map((image, imgIndex) => (
                            <div key={imgIndex} className="aspect-video bg-muted rounded-lg overflow-hidden">
                              <img
                                src={image}
                                alt={`${event.title} ${imgIndex + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                                onClick={() => openGallery(event.id)}
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

        {/* Gallery Modal */}
        {selectedGallery && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeGallery}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Image container */}
              <div className="relative bg-card rounded-lg overflow-hidden">
                <img
                  src={eventGalleries[selectedGallery as keyof typeof eventGalleries][currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Navigation buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {eventGalleries[selectedGallery as keyof typeof eventGalleries].length}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
                {eventGalleries[selectedGallery as keyof typeof eventGalleries].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-16 object-cover rounded cursor-pointer transition-all ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-primary scale-110' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}