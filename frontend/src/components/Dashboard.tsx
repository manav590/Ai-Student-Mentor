import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Mail, TrendingUp, FileText, MessageSquare, GraduationCap, User, LogOut } from "lucide-react";

const Dashboard = () => {
  const features = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Notes",
      description: "Organize your study materials",
      route: "/notes",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Exam Prep",
      description: "AI-powered exam preparation",
      route: "/exam-prep",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Attendance",
      description: "Track your class attendance",
      route: "/attendance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Resources",
      description: "Curated learning materials",
      route: "/resources",
      color: "from-orange-500 to-red-500"
    }
  ];

  const quickActions = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Manager", route: "/email" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Career Insights", route: "/career" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Chat Assistant", route: "/chat" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NeuroMentor
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Student</span>! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Let's make today productive. Choose a tool to get started.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.route}>
              <Card className="h-full transition-smooth hover:shadow-strong hover:-translate-y-2 cursor-pointer group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-bounce`}>
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

        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.route}>
                <Card className="transition-smooth hover:shadow-medium cursor-pointer gradient-card">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground">
                      {action.icon}
                    </div>
                    <span className="font-medium">{action.title}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
