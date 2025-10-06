import { Video, Film, Youtube, Play, Sparkles, Clapperboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const VideoEditing = () => {
  const services = [
    {
      icon: Film,
      title: "Corporate Videos",
      description: "Professional videos that showcase your business",
    },
    {
      icon: Youtube,
      title: "Social Media Content",
      description: "Engaging videos optimized for social platforms",
    },
    {
      icon: Play,
      title: "Promotional Videos",
      description: "Compelling content that drives conversions",
    },
    {
      icon: Clapperboard,
      title: "Event Coverage",
      description: "Capture and edit your special moments",
    },
    {
      icon: Sparkles,
      title: "Motion Graphics",
      description: "Dynamic animations and visual effects",
    },
    {
      icon: Video,
      title: "Post-Production",
      description: "Color grading, sound design, and finishing",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
              <Video className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6">Video Editing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform raw footage into compelling stories with professional video editing
              and post-production services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Video Services We Offer</h2>
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
          <h2 className="mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create engaging video content that resonates with your audience
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

export default VideoEditing;
