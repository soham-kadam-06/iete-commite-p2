"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github } from "lucide-react"

export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState("all")

  const teamCategories = [
    { id: "all", name: "All Teams" },
    { id: "creative", name: "Creative" },
    { id: "technical", name: "Technical" },
    { id: "graphics", name: "Graphics & Photography" },
    { id: "marketing", name: "Marketing & Operating" },
    { id: "social", name: "Social Media" },
    { id: "pr", name: "Public Relations" },
  ]

  const coreMembers = [
    {
      name: "Arjun Patel",
      role: "President",
      bio: "Final year Electronics student leading the IETE chapter with passion for innovation.",
      skills: ["Leadership", "Project Management", "Electronics"],
      image: "/placeholder.svg?height=200&width=200&text=AP",
    },
    {
      name: "Priya Singh",
      role: "Vice President",
      bio: "Telecommunications enthusiast with expertise in wireless communication systems.",
      skills: ["Communications", "Research", "Team Building"],
      image: "/placeholder.svg?height=200&width=200&text=PS",
    },
    {
      name: "Rohit Sharma",
      role: "Secretary",
      bio: "Organizing events and managing administrative tasks with precision and dedication.",
      skills: ["Organization", "Communication", "Event Planning"],
      image: "/placeholder.svg?height=200&width=200&text=RS",
    },
    {
      name: "Sneha Gupta",
      role: "Treasurer",
      bio: "Managing finances and ensuring transparent resource allocation for all activities.",
      skills: ["Finance", "Planning", "Analytics"],
      image: "/placeholder.svg?height=200&width=200&text=SG",
    },
  ]

  const teamMembers = [
    // Creative Team
    {
      name: "Vikash Kumar",
      role: "Creative Lead",
      team: "creative",
      bio: "Designing innovative solutions and creative content for IETE initiatives.",
      skills: ["Design Thinking", "Innovation", "Content Creation"],
      image: "/placeholder.svg?height=200&width=200&text=VK",
    },
    {
      name: "Ananya Reddy",
      role: "Creative Designer",
      team: "creative",
      bio: "Bringing creative ideas to life through visual design and artistic expression.",
      skills: ["Visual Design", "Creativity", "Art Direction"],
      image: "/placeholder.svg?height=200&width=200&text=AR",
    },
    // Technical Team
    {
      name: "Karthik Raj",
      role: "Technical Lead",
      team: "technical",
      bio: "Leading technical projects and mentoring students in advanced electronics.",
      skills: ["Programming", "Electronics", "Mentoring"],
      image: "/placeholder.svg?height=200&width=200&text=KR",
    },
    {
      name: "Deepika Jain",
      role: "Software Developer",
      team: "technical",
      bio: "Developing software solutions and maintaining technical infrastructure.",
      skills: ["Software Development", "Problem Solving", "Systems"],
      image: "/placeholder.svg?height=200&width=200&text=DJ",
    },
    // Graphics & Photography
    {
      name: "Rahul Verma",
      role: "Graphics Head",
      team: "graphics",
      bio: "Creating visual content and managing photography for all IETE events.",
      skills: ["Graphic Design", "Photography", "Video Editing"],
      image: "/placeholder.svg?height=200&width=200&text=RV",
    },
    {
      name: "Kavya Nair",
      role: "Photographer",
      team: "graphics",
      bio: "Capturing moments and creating visual stories for IETE activities.",
      skills: ["Photography", "Visual Storytelling", "Editing"],
      image: "/placeholder.svg?height=200&width=200&text=KN",
    },
    // Marketing & Operating
    {
      name: "Amit Agarwal",
      role: "Marketing Head",
      team: "marketing",
      bio: "Developing marketing strategies and managing operational activities.",
      skills: ["Marketing", "Strategy", "Operations"],
      image: "/placeholder.svg?height=200&width=200&text=AA",
    },
    {
      name: "Pooja Mehta",
      role: "Operations Manager",
      team: "marketing",
      bio: "Ensuring smooth operations and coordinating between different teams.",
      skills: ["Operations", "Coordination", "Management"],
      image: "/placeholder.svg?height=200&width=200&text=PM",
    },
    // Social Media
    {
      name: "Nikhil Joshi",
      role: "Social Media Lead",
      team: "social",
      bio: "Managing social media presence and engaging with the online community.",
      skills: ["Social Media", "Content Strategy", "Community Management"],
      image: "/placeholder.svg?height=200&width=200&text=NJ",
    },
    {
      name: "Riya Kapoor",
      role: "Content Creator",
      team: "social",
      bio: "Creating engaging content for social media platforms and online presence.",
      skills: ["Content Creation", "Writing", "Digital Marketing"],
      image: "/placeholder.svg?height=200&width=200&text=RK",
    },
    // Public Relations
    {
      name: "Suresh Babu",
      role: "PR Head",
      team: "pr",
      bio: "Managing public relations and building connections with industry partners.",
      skills: ["Public Relations", "Communication", "Networking"],
      image: "/placeholder.svg?height=200&width=200&text=SB",
    },
    {
      name: "Meera Iyer",
      role: "Communications Specialist",
      team: "pr",
      bio: "Handling external communications and media relations for IETE.",
      skills: ["Communications", "Media Relations", "Writing"],
      image: "/placeholder.svg?height=200&width=200&text=MI",
    },
  ]

  const filteredMembers =
    activeTeam === "all" ? teamMembers : teamMembers.filter((member) => member.team === activeTeam)

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Our Team</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Meet the dedicated individuals who make IETE a thriving community of electronics and telecommunications
              enthusiasts.
            </p>
          </div>
        </section>

        {/* Faculty Advisors & HOD */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">DR</span>
                  </div>
                  <CardTitle className="text-2xl">Dr. Rajesh Kumar</CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">Faculty Advisor</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Ph.D. in Electronics Engineering with 15+ years of experience in telecommunications research and
                    education. Leading research in 5G technologies and IoT applications.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">5G Research</Badge>
                    <Badge variant="secondary">IoT</Badge>
                    <Badge variant="secondary">Signal Processing</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">PR</span>
                  </div>
                  <CardTitle className="text-2xl">Prof. Anita Sharma</CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">Head of Department</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Leading expert in digital signal processing and wireless communications with 20+ years of academic
                    excellence. Published 50+ research papers in international journals.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">DSP</Badge>
                    <Badge variant="secondary">Wireless Comm</Badge>
                    <Badge variant="secondary">Research</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Members */}
        <section className="py-12 px-4 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Core Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {coreMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Categories */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Team Categories</h2>

            {/* Team Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {teamCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeTeam === category.id ? "default" : "outline"}
                  onClick={() => setActiveTeam(category.id)}
                  className="mb-2"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-center gap-2">
                      <Button size="sm" variant="ghost">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
