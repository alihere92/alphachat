import { Palette, Layers, Image, Sparkles, Pen, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Create memorable logos and brand guidelines",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love to interact with",
    },
    {
      icon: Image,
      title: "Marketing Materials",
      description: "Eye-catching designs for print and digital media",
    },
    {
      icon: Sparkles,
      title: "Illustrations",
      description: "Custom illustrations that tell your unique story",
    },
    {
      icon: Layers,
      title: "Social Media Graphics",
      description: "Engaging visuals optimized for social platforms",
    },
    {
      icon: Pen,
      title: "Print Design",
      description: "Business cards, brochures, and packaging design",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
              <Palette className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6">Graphic Design</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elevate your brand with stunning visual designs that captivate audiences
              and communicate your message effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Our Design Services</h2>
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
          <h2 className="mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create stunning visuals that make you stand out
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

export default GraphicDesign;
