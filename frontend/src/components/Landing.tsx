import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Mail, TrendingUp, FileText, MessageSquare, GraduationCap, Brain } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Exam Prep",
      description: "AI-powered exam preparation with personalized study plans and practice questions",
      route: "/exam-prep"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Notes Organizer",
      description: "Keep all your study materials organized and accessible in one place",
      route: "/notes"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Manager",
      description: "Manage academic emails efficiently with smart categorization",
      route: "/email"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Attendance Tracker",
      description: "Track your class attendance and never miss important sessions",
      route: "/attendance"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Resources",
      description: "Curated study materials and resources tailored to your courses",
      route: "/resources"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Insights",
      description: "Get personalized career guidance and industry insights",
      route: "/career"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat Assistant",
      description: "24/7 AI assistant to help with your academic questions",
      route: "/chat"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero border-b">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Student Mentor</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NeuroMentor
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Your intelligent companion for academic excellence. Study smarter, not harder.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel in your academic journey, all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={index} to={feature.route}>
              <Card className="h-full transition-smooth hover:shadow-medium hover:-translate-y-1 cursor-pointer gradient-card border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero border-y">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students already using NeuroMentor to achieve their academic goals
            </p>
            <Link to="/register">
              <Button variant="hero" size="xl">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
