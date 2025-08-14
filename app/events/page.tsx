import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      title: "5G Technology Workshop",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "Electronics Lab, Main Building",
      description: "Hands-on workshop covering 5G network architecture, implementation, and future prospects.",
      category: "Workshop",
      capacity: 50,
      registered: 35,
      price: "Free",
    },
    {
      title: "IoT Innovation Seminar",
      date: "2024-02-22",
      time: "2:00 PM - 5:00 PM",
      location: "Auditorium A",
      description: "Explore the latest trends in Internet of Things and smart device development.",
      category: "Seminar",
      capacity: 100,
      registered: 78,
      price: "₹200",
    },
    {
      title: "Annual Tech Conference",
      date: "2024-03-10",
      time: "9:00 AM - 6:00 PM",
      location: "Convention Center",
      description: "Two-day conference featuring industry experts and cutting-edge research presentations.",
      category: "Conference",
      capacity: 200,
      registered: 156,
      price: "₹500",
    },
    {
      title: "Circuit Design Competition",
      date: "2024-03-20",
      time: "10:00 AM - 3:00 PM",
      location: "Electronics Lab",
      description: "Design and build innovative electronic circuits. Prizes for top 3 winners.",
      category: "Competition",
      capacity: 30,
      registered: 24,
      price: "₹100",
    },
    {
      title: "AI in Electronics Webinar",
      date: "2024-04-05",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      description: "Virtual session on artificial intelligence applications in electronics engineering.",
      category: "Webinar",
      capacity: 500,
      registered: 342,
      price: "Free",
    },
    {
      title: "PCB Design Workshop",
      date: "2024-04-18",
      time: "1:00 PM - 5:00 PM",
      location: "CAD Lab",
      description: "Learn professional PCB design techniques using industry-standard software.",
      category: "Workshop",
      capacity: 25,
      registered: 20,
      price: "₹300",
    },
  ]

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Events</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our workshops, seminars, and conferences to enhance your knowledge and network with fellow
              enthusiasts.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{event.category}</Badge>
                      <span className="text-lg font-bold text-primary">{event.price}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.registered}/{event.capacity} registered
                      </div>
                    </div>

                    {/* Registration Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Registration</span>
                        <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <Button className="w-full" disabled={event.registered >= event.capacity}>
                      {event.registered >= event.capacity ? "Fully Booked" : "Register Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to get notified about upcoming events and workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
