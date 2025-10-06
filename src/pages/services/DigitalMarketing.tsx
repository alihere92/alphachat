import { TrendingUp, Target, Mail, Share2, BarChart3, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const services = [
    {
      icon: Target,
      title: "Social Media Marketing",
      description: "Grow your presence across all major platforms",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads with targeted email campaigns",
    },
    {
      icon: Share2,
      title: "Content Marketing",
      description: "Engaging content that attracts and converts",
    },
    {
      icon: BarChart3,
      title: "PPC Advertising",
      description: "Drive immediate results with paid campaigns",
    },
    {
      icon: MessageSquare,
      title: "Social Media Ads",
      description: "Targeted advertising on Facebook, Instagram, and more",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize performance",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6">Digital Marketing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drive growth and reach your target audience with data-driven digital marketing
              strategies that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Our Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create a marketing strategy that drives real results
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
