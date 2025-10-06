import { Smartphone, Apple, Cpu, Zap, Users, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AppDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Build once, deploy everywhere - iOS, Android, and more",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Native-like performance with smooth animations",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Intuitive interfaces that users love",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless backend and API integrations",
    },
    {
      icon: Apple,
      title: "Native Development",
      description: "Platform-specific apps for optimal performance",
    },
    {
      icon: Cpu,
      title: "Modern Tech Stack",
      description: "Using React Native, Flutter, and native SDKs",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6">App Development</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your ideas into powerful mobile applications that engage users
              and deliver exceptional experiences across all platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Why Choose Our App Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Build Your App?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's bring your mobile app vision to life
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
