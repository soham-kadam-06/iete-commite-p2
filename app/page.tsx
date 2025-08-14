import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IETE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Institution of Electronics and Telecommunication Engineers
            </p>
            <p className="text-lg text-foreground/80 mb-10 max-w-3xl mx-auto">
              Advancing the science and practice of electronics, telecommunications, computers, and information
              technology for the benefit of humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Providing quality education and training in electronics and telecommunications
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Building a strong community of professionals and students in the field
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Organizing workshops, seminars, and conferences for knowledge sharing
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Promoting excellence in research and development in technology</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Committee Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Committee</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Meet the dedicated professionals who guide our institution towards excellence in electronics and
              telecommunications education.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">DR</span>
                  </div>
                  <CardTitle className="text-xl">Dr. Rajesh Kumar</CardTitle>
                  <CardDescription className="text-primary font-semibold">Faculty Advisor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ph.D. in Electronics Engineering with 15+ years of experience in telecommunications research and
                    education.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">PR</span>
                  </div>
                  <CardTitle className="text-xl">Prof. Anita Sharma</CardTitle>
                  <CardDescription className="text-primary font-semibold">Head of Department</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leading expert in digital signal processing and wireless communications with 20+ years of academic
                    excellence.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button asChild size="lg">
              <Link href="/team">View Full Team</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
